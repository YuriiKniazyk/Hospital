import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Reg_User} from '../../models/reg_user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
    id_department: ''             
};
  constructor(private http: HttpClient, private router: Router) { }
  
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
          id_department: ''             
      };
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
