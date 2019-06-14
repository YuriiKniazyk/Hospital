import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Token } from '../../models/token';
import { Reg_User} from '../../models/reg_user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  find: string = '';
  users: any = []; 
  Authorized: boolean = false;
  user1: any = {login: '', password: ''};

  user: Reg_User = {
    doctor: false,
    name: '', 
    surname: '', 
    login: '',
    password: '',
    experiens: 0,
    description: '',
    phone: '',
    email: '',
    floor: 0,
    office: 0,
    deyOfwork: '',
    id_department: '',
    rating: 5             
};
departments: any = [];

  constructor(private router: Router,private http: HttpClient) { }

  findPeople() {
    this.router.navigate(['/search/result'], { queryParams: { name: this.find } });
    this.find = '';
  }
  
  login() {
    this.http.post('http://localhost:3000/api/login', this.user1).subscribe((data: Token) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('type', data.type);
      localStorage.setItem('IsAuthorized', '1');

      let decoded = jwt_decode(data.token); 
      localStorage.setItem('user', JSON.stringify(decoded));

      this.router.navigate(['/user', decoded.id]);
    })
  }


  register() {
    return this.http.post('http://localhost:3000/api/createDoctor', this.user).subscribe((data): any => {
      this.user = {
        doctor: false,
        name: '', 
        surname: '', 
        login: '',
        password: '',
        experiens: 0,
        description: '',
        phone: '',
        email: '',
        floor: 0,
        office: 0,
        deyOfwork: '',
        id_department: '',
        rating: 5             
      };
      location.reload();
    });
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/departments').subscribe((data): any => {
      this.departments = data;
    });
  }
  
  ngDoCheck(){
    this.Authorized = !!localStorage.getItem('IsAuthorized');    
  }
}