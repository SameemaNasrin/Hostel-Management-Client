import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../helpers/constants';
import { Hosteldto } from '../dto/hosteldto';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  prefix: string = "hostel/";
  constructor(public http: HttpClient) { }

  viewAll (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get`);
  }

  viewById (hid: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/${hid}`);
  }

  addHostel(hostel:Hosteldto):Observable<any>{
    return this.http.post("http://localhost:8082/hostel/add", hostel);
  }
}
