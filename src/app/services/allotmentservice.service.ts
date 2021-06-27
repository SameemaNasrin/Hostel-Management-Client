import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../helpers/constants';
import { Allotmentdto } from '../dto/allotmentdto';

@Injectable({
  providedIn: 'root'
})
export class AllotmentserviceService {
  prefix: string = "allotment/";
  constructor(public http: HttpClient) { }

  viewallotmentbyhid (hid: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/${hid}`);
  }

  addAllotment (allotmentDto: Allotmentdto): Observable<any> {
    return this.http.post(Constants.baseUrl + `${this.prefix}add`, allotmentDto);
  }

  deleteallotment (aid: number): Observable<any> {
    return this.http.delete("http://localhost:8082/remove/aid/" + aid);
  }
}
