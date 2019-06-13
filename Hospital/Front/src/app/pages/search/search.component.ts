import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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

find: string = '';
  
  constructor(private http: HttpClient, private route: ActivatedRoute) { 

    this.route.queryParams.subscribe(params => {
      this.find = params['name'] || '';
    });
  }
  
  
   

  findPeople() {
    this.http.get('http://localhost:3000/api/users/find?name=' + this.find).subscribe((data): any => {
      this.find = '';
      this.doctors = data;       
    });
  }

  ngOnInit() {
    this.findPeople();    
  }

}
