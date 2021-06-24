import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitordto } from '../dto/visitordto';
import { Constants } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  prefix: string = "visitor/";
  constructor(public http: HttpClient) { }

  viewAll (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get`);
  }

  viewById (vid: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/student/${vid}`);
  }

  viewByDate (date: string): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/${date}`);
  }

  viewByDateHostelId (date: string, id: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/date/${date}/${id}`);
  }

  addVisitor (visitorDto: Visitordto): Observable<any> {
    return this.http.post(Constants.baseUrl + `${this.prefix}add`, visitorDto);
  }

}
