import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Brazil, Data } from './brazil.model';

import { API } from '../../app.api';

@Injectable()
export class BrazilService {
    constructor(private httpClient: HttpClient) { }
    
    getBrazilData(): Observable<Data> {
        return this.httpClient.get(`${API}/brazil`).pipe(map((response: any) => response.json()));
    }

    // getBrazilData() {
    //     return this.httpClient.get(`${API}/brazil`);
    // }
}
