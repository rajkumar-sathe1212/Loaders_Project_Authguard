import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminroleGuard implements CanActivate {


  canActivate(){
    if(localStorage.getItem("userType")=="Admin"){
      return true;
    }
    else{
      return false;
    }
  }

}
