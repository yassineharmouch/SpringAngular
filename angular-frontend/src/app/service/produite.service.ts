import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produite } from './produite';
import { Stocke } from './stocke';
import { StockeService } from './stocke.service';
@Injectable({
  providedIn: 'root'
})
export class ProduiteService {

 
  private baseURL = "http://localhost:8080/api/v4/produites";

  stkes: Stocke[];
  constructor(private httpClient: HttpClient) { }
  
  

  getProduitesList(): Observable<Produite[]>{
    return this.httpClient.get<Produite[]>(`${this.baseURL}`);
  }

  createProduite(produite: Produite): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, produite);
  }

  getProduiteById(id: number): Observable<Produite>{
    return this.httpClient.get<Produite>(`${this.baseURL}/${id}`);
  }

  updateProduite(id: number, produite: Produite): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, produite);
  }

  deleteProduite(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
