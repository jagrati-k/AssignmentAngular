import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
    providedIn:'root',
})
export class UsersDataService{
    url='http://localhost:3000/api/v1/auth/signup';
    url2='http://localhost:3000/api/v1/auth/login'
    constructor(private http:HttpClient){
          }
    saveUser(data:any){
        return this.http.post(this.url ,data)
    }

    authUser(data:any){
        return this.http.post(this.url2,data)
    }
  
   
}
