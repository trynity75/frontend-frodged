import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = "http://18.118.120.32:8080/api/";

  constructor(private http: HttpClient) { }
  
  addIngredient(id: string, name:string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/add-ingredient/${id}`, {name} );
  }

  removeIngredient(id: string, name: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/remove-ingredient/${id}`, {name} )
  }

  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-user-by-id/${id}`)
  }
}
