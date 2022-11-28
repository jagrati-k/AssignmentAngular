import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersDataService } from './users.data.service';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,
    private router:Router){}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  any {
      if(this.auth.IsLoggedIn()){
        return true;  
      }
      else{
        this.router.navigate(['login'])
      }
      
    }
  
  
}
