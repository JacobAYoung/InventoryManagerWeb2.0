import { Component, Input, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() car;
  isLoaded = false;
  panelOpenState = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['car'].currentValue) {
        this.car  = changes['car'].currentValue;
        this.isLoaded = true;
    }
  }
 getMakeLabel(make){
   
   return make;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
