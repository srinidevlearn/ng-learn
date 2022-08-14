import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  productDesc:any;
  @Input() set productDetails(value:any){
    this.productDesc = value;
    this.defaultData = value.quantity
  }



  defaultData = 0;

  @Output() trackQuantity = new EventEmitter();

  constructor() {}

 
  ngOnInit(): void {}

  deleteItem() {
    this.defaultData = this.defaultData - 1;
    if (this.defaultData <= 0) this.defaultData = 0;
    this.updateQuantity();
  }
  addToItem() {
    this.defaultData = this.defaultData + 1;
    if (this.defaultData >= 5) this.defaultData = 5;
    this.updateQuantity()
  }

  updateQuantity(){
    this.trackQuantity.emit({...this.productDesc,quantity:this.defaultData})
  }
}
