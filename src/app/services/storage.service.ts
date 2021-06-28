import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  msg: string;

  constructor() { }

  setUserInfo (data): void {
    localStorage.setItem("userinfo", data);
  }
  getUserInfo () {
    return localStorage.getItem("userinfo") ? localStorage.getItem("userinfo") : "";
  }
  clearUserInfo () {
    localStorage.clear()
  }
}
