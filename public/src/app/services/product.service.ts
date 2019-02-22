import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // uri = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {}

  getProducts() {
    // const  tempObservable = this.http.get(`/products`);
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    return this.http.get(`/products`);
  }
  getProductById(id) {
    return this.http.get(`/products/${id}`);
  }
  addProduct(data) {
    return this.http.post(`/products/add`, data);
  }
  updateProduct(id: string, data) {
    return this.http.post(`/products/${id}`, data);
  }
  delete(id: string) {
    return this.http.delete(`/products/${id}`);
  }
}
