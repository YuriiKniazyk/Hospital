import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = [{
    _id: '',
    id_department: '',
    doctor: '',
    name: '',
    surname: '',
    login: '',
    password: '',
    experiens: '',
    description: '',
    phone: '',
    email: '',
    floor: '',
    office: '',
    deyOfwork: '',
    rating: 5
  }];

  doctorId: any = '';
  Authorized: boolean = false;

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { 
  
    this.route.params.subscribe(params => {
      this.doctorId = params['uuid'];
    });
  }
  editProfile(){
    this.router.navigate(['edit']);
  }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/user/' + this.doctorId).subscribe((data): any => {
      this.user = data;
    });
  }

  ngDoCheck(){
    this.Authorized = !!localStorage.getItem('IsAuthorized');    
  }

}
