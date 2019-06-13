import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  find: string = '';
  users: any = []; 
  Authorized: boolean = false;

  constructor(private router: Router) { }

  findPeople() {
    this.router.navigate(['/search/result'], { queryParams: { name: this.find } });
    this.find = '';
  }

  ngOnInit() {
  }
  
  ngDoCheck(){
    this.Authorized = !!localStorage.getItem('IsAuthorized');    
  }
}
