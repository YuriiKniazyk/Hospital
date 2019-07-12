import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [
    {id:1,
    name: 'article 1',
    label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price:25}, 
    {id:3,
    name:"article 3",
    label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price:45},
    {id:2,
    name:"article 2",
    label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price:35},
    {id:7,
    name:"article 7",
    label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price:35}
  ]; 

  bascket: any[] = [];
  
  constructor(private route: ActivatedRoute, private router: Router) { 
    let str = localStorage.getItem('products');
    if(str !== null){
      this.bascket = JSON.parse(str);
    }
  }

  Buy(id){
    let exist = this.bascket.find(function(element) {
      return element.id == id;
    });

    if (!exist){
      let arr = this.products.find(function(element) {
        return element.id == id;
      });

      this.bascket.push(arr);
      localStorage.setItem('products', JSON.stringify(this.bascket));        
    }
  }

  ngOnInit() {
  }
}
