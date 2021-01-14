import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_UF } from 'src/app/app.api';
import { UF } from './uf.model';

@Injectable({
    providedIn: 'root'
  })
export class UfService {
    constructor(private http: HttpClient) { }

    getListUF() {
        return this.http.get<UF[]>(API_UF);
    }
}