import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ventee } from '../module/ventee';
@Injectable({
  providedIn: 'root'
})
export class VenteeService {

 
  private baseURL = "http://localhost:8080/api/v2/ventees";

  constructor(private httpClient: HttpClient) { }
  
  getVenteesList(): Observable<Ventee[]>{
    return this.httpClient.get<Ventee[]>(`${this.baseURL}`);
  }

  createVentee(ventee: Ventee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, ventee);
  }

  getVenteeById(id: number): Observable<Ventee>{
    return this.httpClient.get<Ventee>(`${this.baseURL}/${id}`);
  }

  updateVentee(id: number, ventee: Ventee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, ventee);
  }

  deleteVentee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
