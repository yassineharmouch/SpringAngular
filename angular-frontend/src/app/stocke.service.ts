import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stocke } from './stocke';
@Injectable({
  providedIn: 'root'
})
export class StockeService {

  
  private baseURL = "http://localhost:8080/api/v3/stockes";

  constructor(private httpClient: HttpClient) { }
  
  getStockesList(): Observable<Stocke[]>{
    return this.httpClient.get<Stocke[]>(`${this.baseURL}`);
  }

  createStocke(stocke: Stocke): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, stocke);
  }

  getStockeById(id: number): Observable<Stocke>{
    return this.httpClient.get<Stocke>(`${this.baseURL}/${id}`);
  }

  updateStocke(id: number, stocke: Stocke): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, stocke);
  }

  deleteStocke(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
