import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class FeestructureService {
  
  prefix: string = "feestructure/";

  constructor(public http: HttpClient) { }

  viewByStudentId (sid: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}viewbystudent/${sid}`);
  }

  viewUnpaid (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}viewunpaid`);
  }
}
