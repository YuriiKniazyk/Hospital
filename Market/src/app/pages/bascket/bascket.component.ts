import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.component.html',
  styleUrls: ['./bascket.component.css']
})
export class BascketComponent implements OnInit {
  products: any[] = []; 
  bascketPrice: number = 0;

  constructor() { 
    this.products = JSON.parse(localStorage.getItem('products'));
    this.sum();  
  }

  sum(){
    if (this.products == null){
      this.bascketPrice = 0;    
    } else {
      var sum = this.products.reduce(function (accumulator, item) {
        return accumulator + item.price;
      }, 0);
      this.bascketPrice = sum;
    }
  }
  
  DeleteFromBacket(id){
    let curentItem = this.products.find(function(element) {
      return element.id == id;
    });
    let index = this.products.indexOf(curentItem);
    if (index > -1) {
      this.products.splice(index, 1);
    }
    localStorage.setItem('products', JSON.stringify(this.products));
    this.sum();
  }

  ngOnInit() {
  }
}
