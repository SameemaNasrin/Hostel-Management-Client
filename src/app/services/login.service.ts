import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Changepassword } from '../dto/changepassword';
import { Logindto } from '../dto/logindto';
import { Constants } from '../helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login (loginDto: Logindto): Observable<any> {
    return this.http.post(Constants.baseUrl + "login", loginDto);
  }
  getLoggedInInfo (token: string): Observable<any> {
    return this.http.get(Constants.baseUrl + "getloggedininfo", { headers: { 'token-id': token } });
  }
  logout (token: string): Observable<any> {
    return this.http.post(Constants.baseUrl + "logout", {}, { headers: { 'token-id': token } });
  }
  changePassword (changePassDto: Changepassword, token: string): Observable<any> {
    return this.http.post(Constants.baseUrl + `change/password`, changePassDto, { headers: { 'token-id': token } });
  }

}
