import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  apiUrl: string = "http://18.118.120.32:8080/api"

  register(email: String, password: String): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password })
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, {email, password})
  }

  getToken(): string | null {
    return sessionStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token')
  }
}
