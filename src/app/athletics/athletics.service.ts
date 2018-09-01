import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Athletics } from './athletics';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;
const athletics = '/athlets';

@Injectable()
export class AthleticsService {

    constructor(private http: HttpClient) { }

    getAllAthletics(): Observable<Athletics[]> {
        return this.http.get<Athletics[]>(URL + athletics);
    }
}
