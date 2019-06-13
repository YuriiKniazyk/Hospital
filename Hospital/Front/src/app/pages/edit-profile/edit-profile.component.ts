import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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
    deyOfwork: ''
  }];

  doctorId: any = '';

  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {
    let json = localStorage.getItem('user');
    let obj = JSON.parse(json);
    this.doctorId = obj.id;
  }

  edit() {
    this.http.put('http://localhost:3000/api/user/' + this.doctorId, this.user).subscribe((data):any => {
      this.router.navigate(['/user', this.doctorId]);
    });
  }
  
  ngOnInit() {
    this.http.get('http://localhost:3000/api/user/' + this.doctorId).subscribe((data): any => {
      this.user = data;
    });
  }

}
