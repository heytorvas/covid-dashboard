import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { States } from './states.model';
import { API } from 'src/app/app.api';

@Injectable({
    providedIn: 'root'
})
export class StatesService {
    constructor(private http: HttpClient) { }

    getStatesData(id: string) {
        return this.http.get<States>(`${API}/brazil/uf/${id}`);
    }
}