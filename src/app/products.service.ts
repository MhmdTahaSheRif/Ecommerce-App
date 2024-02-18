import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from 'src/interfaces/product';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private apiUrl = "https://fakestoreapi.com/products"

  getProductData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

getItemDetails(id: any): Observable<any> {
  return this.http.get<any>(`/api/items/${id}`).pipe(
    catchError((error) => {
      console.error('Error fetching item details:', error);
      return throwError(error);
    })
  );
}}
