import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Achate } from '../achate';
@Injectable({
  providedIn: 'root'
})
export class AchateService {

  
  private baseURL = "http://localhost:8080/api/v6/achates";

  constructor(private httpClient: HttpClient) { }
  
  getAchatesList(): Observable<Achate[]>{
    return this.httpClient.get<Achate[]>(`${this.baseURL}`);
  }

  createAchate(achate: Achate): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, achate);
  }

  getAchateById(id: number): Observable<Achate>{
    return this.httpClient.get<Achate>(`${this.baseURL}/${id}`);
  }

  updateAchate(id: number, achate: Achate): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, achate);
  }

  deleteAchate(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
