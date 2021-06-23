import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Wardendto } from '../dto/wardendto';
import { Constants } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class WardenService {
  prefix: string = "warden/";
  constructor(public http: HttpClient) { }

  getWardens (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get`);
  }

  addWarden (wardendto:Wardendto): Observable<any> {
    return this.http.post(Constants.baseUrl + `${this.prefix}add`, wardendto);
  }

  viewByWId (wid: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/${wid}`);
  }

  viewByHId (hid: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/hostel/${hid}`);
  }

}

