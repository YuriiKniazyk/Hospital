import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-department',
  templateUrl: './all-department.component.html',
  styleUrls: ['./all-department.component.css']
})
export class AllDepartmentComponent implements OnInit {
  departments: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/departments').subscribe((data): any => {
      this.departments = data;
      console.log(data);
    });
  }

}
