import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allotmentdto } from '../dto/allotmentdto';

@Injectable({
  providedIn: 'root'
})
export class AllotmentserviceService {

  constructor(public http: HttpClient) { }

  viewallotmentbyhid (hid: number): Observable<any> {
    return this.http.get("http://localhost:8082/allotment/get/hid/" + hid);
  }

<<<<<<< HEAD
  addallotment(allotment:Allotmentdto):Observable<any>{
    return this.http.get("http://localhost:8082/allotment/add");
=======
  addallotment (allotment: Allotmentdto): Observable<any> {
    return this.http.get("http://localhost:8082/allotment/add/" + allotment);
>>>>>>> fb6f4f9da9601b7c75964c1e8f10fd992b74a042
  }

  delete (aid: number): Observable<any> {
    return this.http.post("http://localhost:8082/remove/aid/", aid);
  }
}
