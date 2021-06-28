import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService, private storageService: StorageService, private router: Router) { }
  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let userInfo = this.storageService.getUserInfo();

    if (userInfo == null || userInfo == undefined || userInfo == "") {
      this.storageService.msg = "You're not authorized to access";
      this.router.navigateByUrl("/");
      return false;
    }
    let userRole = JSON.parse(userInfo).role;
    if (userRole == "admin") {
      return true;
    }
    else {
      this.storageService.msg = "You're not authorized to access";
      this.router.navigateByUrl("/");
      return false;
    }
  }
}
