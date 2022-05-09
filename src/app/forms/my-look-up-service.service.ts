import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyLookUpServiceService {
  results: {
    name: 'Onur';
  };
  constructor(private http: HttpClient) {}
  getResults() {
    return this.http
      .get<any>('assets/countries.json')
      .toPromise()
      .then((res) => <any[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
