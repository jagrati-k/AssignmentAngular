import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="Logout"
  isloggedIn:boolean
  returnUrl: string; 
  constructor( private router: Router,) {
    this.returnUrl = '/';  
    this.isloggedIn= !localStorage.getItem('token')
  }
  ngOnInit(): void {
  }
  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
   this.router.navigate([this.returnUrl]);    
    }    

}
