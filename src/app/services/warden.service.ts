import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Wardendto } from '../dto/wardendto';

@Injectable({
  providedIn: 'root'
})
export class WardenService {
  viewallwarden():Observable<any>{
    return this.http.get("http://localhost:8082/warden/get")
  }
  constructor(public http:HttpClient) { }
}
