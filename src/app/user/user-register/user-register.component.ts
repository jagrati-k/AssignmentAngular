import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'
import { UsersDataService } from '../../service/users.data.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  title="REGISTER"
  returnUrl: string; 
  constructor(private userData:UsersDataService,
    private router: Router,) { 
      this.returnUrl = '/';  
    }

  

  ngOnInit(): void {
  }
  getUserData(registerForm:any){
    this.userData.saveUser(registerForm.value).subscribe((result)=>{ 
      this.router.navigate([this.returnUrl]);  
      
    })
  }

}
