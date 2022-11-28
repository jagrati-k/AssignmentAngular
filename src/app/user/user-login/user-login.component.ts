import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { UsersDataService } from '../../service/users.data.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title="LOGIN"
  isLoggedIn:boolean;
  returnUrl:string;

  constructor(private userData:UsersDataService,
    private router: Router,) {
    this.isLoggedIn=false
    this.returnUrl = '/home';  
   }

  ngOnInit(): void {
  }

  onLogin(loginForm:NgForm){
    
      this.userData.authUser(loginForm.value).subscribe(
        (result:any)=>{
          
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token',result.token)
        this.router.navigate([this.returnUrl]);  
          
      })
     
}

}
