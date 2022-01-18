import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fournisseure } from './fournisseure';
@Injectable({
  providedIn: 'root'
})
export class FournisseureService {

 
  private baseURL = "http://localhost:8080/api/v7/fournisseures";

  constructor(private httpClient: HttpClient) { }
  
  getFournisseuresList(): Observable<Fournisseure[]>{
    return this.httpClient.get<Fournisseure[]>(`${this.baseURL}`);
  }

  createFournisseure(fournisseure: Fournisseure): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fournisseure);
  }

  getFournisseureById(id: number): Observable<Fournisseure>{
    return this.httpClient.get<Fournisseure>(`${this.baseURL}/${id}`);
  }

  updateFournisseure(id: number, fournisseure: Fournisseure): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, fournisseure);
  }

  deleteFournisseure(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
