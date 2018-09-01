import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Sport } from './Sport';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const URL = environment.url;
const sports = '/sports';

@Injectable()
export class SportsServices {

    constructor(private http: HttpClient) { }

    getAllSport(): Observable<Sport[]> {
        return this.http.get<Sport[]>(URL + sports);
    }
}
