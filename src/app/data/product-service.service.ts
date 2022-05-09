import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get('assets/products.json').pipe(
      map((data) => {
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            return data[key];
          }
        }
      })
    );
  }
}
