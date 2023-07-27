import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
};
const apiUrl = 'http://localhost:8080/api/products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getAll(params?: { _search: string }): Observable<Product[]> {
    const paramsUrl = new HttpParams().set('_search', params?._search || '');

    return this.httpClient
      .get<Product[]>(`${apiUrl}?${paramsUrl.toString()}`)
      .pipe();
  }

  getOne(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${apiUrl}/${id}`).pipe();
  }

  create(product: Omit<Product, '_id'>): Observable<Product> {
    return this.httpClient.post<Product>(`${apiUrl}`, product).pipe();
  }

  update(id: string, product: Product): Observable<Product> {
    return this.httpClient.patch<Product>(`${apiUrl}/${id}`, product).pipe();
  }

  delete(id: string): Observable<Product> {
    return this.httpClient.delete<Product>(`${apiUrl}/${id}`).pipe();
  }
}
