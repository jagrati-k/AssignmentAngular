import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule, NbInputModule,NbCardModule,
   NbRadioModule, NbButtonModule, } from '@nebular/theme';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'; 
import { AuthGuard } from './service/auth.guard';
const appRoutes:Routes=[
  {path:"register", component:UserRegisterComponent},
  {path:"", component:UserLoginComponent},
  {path:"home", component:HomeComponent  ,canActivate:[AuthGuard]}]


@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbActionsModule,
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbInputModule,
    NbCardModule,
    NbRadioModule,
    NbButtonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
