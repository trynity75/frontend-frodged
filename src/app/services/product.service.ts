import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = "http://18.118.120.32:8080/api/";

  constructor(private http: HttpClient) { }

  createProduct(product: {
    imageurl: string,
    name: string;
    type: string;
    description: string;
    conservation: string;
    vegetarian: boolean;
    perishable: boolean;
  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create-product`, product);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}get-all-products`);
  }

}
