import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingApiService } from 'src/app/shopping/services/api.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  productInfo:any = null;
  productId:string = ''
  constructor(private router:Router,private actRouter:ActivatedRoute,private api:ShoppingApiService) {
    this.productId = this.actRouter?.snapshot?.params['id'];
    this.productInfo = this.actRouter?.snapshot?.data['product_desc']
   }

  ngOnInit(): void {
  }

}
