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

  addRoom (roomDto: Roomdto): Observable<any> {
    return this.http.post(Constants.baseUrl + `${this.prefix}add`, roomDto);
  }
  getRoomsByHostelId (hid: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/byhostel/${hid}`);
  }
  getRoomsByFloorAndHostelId (hostel_id: number, floor_id: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/hostel-and-floor/${hostel_id}/${floor_id}`);
  }

  getRoomsAvailableByHostelId (hostel_id: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/available/${hostel_id}`);
  }
  getAvailableRooms (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/all/available`);
  }
  getAllRooms (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/all`);
  }

}


