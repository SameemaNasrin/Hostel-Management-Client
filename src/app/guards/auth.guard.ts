import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private storageService: StorageService, private router: Router) { }

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let userInfo = this.storageService.getUserInfo();

    if (userInfo == null || userInfo == undefined || userInfo == "") {
      this.router.navigateByUrl("/login");
      return false;
    }
    else {
      return true;
    }
  }
}
