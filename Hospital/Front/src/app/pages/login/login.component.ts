import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Token } from '../../models/token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {login: '', password: ''};

  constructor(private http: HttpClient,  
    private router: Router) { }

  login() {
    this.http.post('http://localhost:3000/api/login', this.user).subscribe((data: Token) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('type', data.type);
      localStorage.setItem('IsAuthorized', '1');

      let decoded = jwt_decode(data.token); 
      localStorage.setItem('user', JSON.stringify(decoded));

      this.router.navigate(['/user', decoded.id]);
    })
  }

  ngOnInit() {
  }
}
