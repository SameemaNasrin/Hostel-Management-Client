import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  prefix: string = "student/";
  constructor(public http: HttpClient) { }

  getStudents (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get`);
  }

}
