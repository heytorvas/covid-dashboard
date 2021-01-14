import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brazil, Data } from './brazil.model';
import { API } from 'src/app/app.api';

@Injectable({
    providedIn: 'root'
  })
export class BrazilService {
    constructor(private http: HttpClient) { }

    getBrazilData() {
        return this.http.get<Data>(`${API}/brazil`);
    }
}