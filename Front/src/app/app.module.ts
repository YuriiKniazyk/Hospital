import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {Observable} from 'rxjs';

import { AllDepartmentComponent } from './pages/all-department/all-department.component';
import { AllDoctorComponent } from './pages/all-doctor/all-doctor.component';
import { UserComponent } from './pages/user/user.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './pages/search/search.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HttpAuthInterceptor } from './http-interceptors/auth.interceptor';

const routes: Routes = [
  {path: '', redirectTo: 'departments', pathMatch: 'full'},
  {path: 'departments', component: AllDepartmentComponent},
  {path: 'department/:uuid', component: AllDoctorComponent},
  {path: 'user/:uuid', component: UserComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search/result', component: SearchComponent},
  {path: 'edit', component: EditProfileComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AllDepartmentComponent,
    AllDoctorComponent,
    UserComponent,
    HeaderComponent,
    AboutComponent,
    SearchComponent,
    LogoutComponent,
    PageNotFoundComponent,
    EditProfileComponent
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