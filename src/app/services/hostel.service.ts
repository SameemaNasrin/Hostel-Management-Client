import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {

  constructor(public http:HttpClient) { }

  viewAll():Observable<any>{
    return this.http.get("http://localhost:8082/hostel/get");
  }
}
