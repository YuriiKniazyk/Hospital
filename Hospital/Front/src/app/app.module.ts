import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AllDepartmentComponent } from './pages/all-department/all-department.component';
import { AllDoctorComponent } from './pages/all-doctor/all-doctor.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';

import {Observable} from 'rxjs';
import { HttpAuthInterceptor } from './http-interceptors/auth.interceptor';
import { LogoutComponent } from './pages/logout/logout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'departments', pathMatch: 'full'},
  {path: 'departments', component: AllDepartmentComponent},
  {path: 'department/:uuid', component: AllDoctorComponent},
  {path: 'user/:uuid', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search/result', component: SearchComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AllDepartmentComponent,
    AllDoctorComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    AboutComponent,
    RegisterComponent,
    SearchComponent,
    LogoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
