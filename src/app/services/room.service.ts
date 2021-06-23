import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roomdto } from '../dto/roomdto';
import { Constants } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  prefix: string = "room/";
  constructor(private http: HttpClient) { }

  getRooms (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get`);
  }

  addRoom (roomDto: Roomdto): Observable<any> {
    return this.http.post(Constants.baseUrl + `${this.prefix}add`, roomDto);
  }

}


