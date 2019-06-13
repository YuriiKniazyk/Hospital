import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.css']
})

export class AllDoctorComponent implements OnInit {
  doctors: any = [{
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

    departmentId: any = '';

  constructor(private http: HttpClient,
    private route: ActivatedRoute) { 
   
    this.route.params.subscribe(params => {
      this.departmentId = params['uuid'];
   });
  }
  
  ngOnInit() {
    this.http.get('http://localhost:3000/api/departments/' + this.departmentId).subscribe((data): any => {
      this.doctors = data;
      console.log(data);
    });

  }

}
