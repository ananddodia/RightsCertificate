import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class Service {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('assets/sampledata.json');
    }
}
