import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpagemain',
  templateUrl: './productpagemain.component.html',
  styleUrls: ['./productpagemain.component.scss']
})
export class ProductpagemainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {'id' : '01', 'carModel': { 'modelName': "A01"} , make : 'Product1' }
   ,{'id' : '02', 'carModel': { 'modelName': "A02"} , make : 'Product2' }
   ,{'id' : '03', 'carModel': { 'modelName': "A03"} , make : 'Product3' }
   ,{'id' : '04', 'carModel': { 'modelName': "A04"} , make : 'Product4' }
   ,{'id' : '05', 'carModel': { 'modelName': "A05"} , make : 'Product5' }
   ,{'id' : '06', 'carModel': { 'modelName': "A06"} , make : 'Product6' }
   ,{'id' : '07', 'carModel': { 'modelName': "A07"} , make : 'Product7' }
   ,{'id' : '08', 'carModel': { 'modelName': "A08"} , make : 'Product8' }
   ,{'id' : '09', 'carModel': { 'modelName': "A09"} , make : 'Product9' }
   ,{'id' : '10', 'carModel': { 'modelName': "A10"} , make : 'Product10' }
       
 ];

}
