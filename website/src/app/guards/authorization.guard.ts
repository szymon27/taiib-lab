import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {}

  canActivate() {
    const token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token))
      return true;
    this.router.navigate(["login"]);
    return false;
  }
  
}
