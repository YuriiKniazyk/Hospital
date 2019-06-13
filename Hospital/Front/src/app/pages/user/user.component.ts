import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Rating } from 'src/app/models/rating';

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
    rating: ''
  }];

  doctorId: any = '';
  Authorized: boolean = false;

  newNewRating: any;

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

  newRating(){
    this.user.rating = this.newNewRating;
    this.http.put('http://localhost:3000/api/user/' + this.doctorId + '/rating', this.user).subscribe((data:Rating) => {
      this.user.rating = data.rating;
    });
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
