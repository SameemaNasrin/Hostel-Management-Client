import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studentdto } from '../dto/studentdto';
import { Constants } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  prefix: string = "student/";
  constructor(private http: HttpClient) { }

  getStudents (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get`);
  }

  addStudent (studentDto: Studentdto): Observable<any> {
    return this.http.post(Constants.baseUrl + `${this.prefix}add`, studentDto);
  }

  getStudentById (id: number): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/${id}`);
  }

  getStudentByName (name: string): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/name/${name}`);
  }

  getStudentByMobile (mobile: string): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/mobile/${mobile}`);
  }

  getUnallocatedStudents (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/unallotted`);
  }

  getAllocatedStudents (): Observable<any> {
    return this.http.get(Constants.baseUrl + `${this.prefix}get/allotted`);
  }

}
