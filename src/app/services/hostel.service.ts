import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../helpers/constants';
import { HostelDto } from '../dto/hosteldto';

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

  viewByName (name: string): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/name/${name}`);
  }

  addHostel(hostel:HostelDto):Observable<any>{
    return this.http.post(Constants.baseUrl + `${this.prefix}/add`, hostel);
  }
}
