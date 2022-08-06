import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingApiService } from 'src/app/shopping/services/api.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {

  productInfo:any = null;
  productId:string = ''
  constructor(private actRouter:ActivatedRoute,private api:ShoppingApiService) {
    this.productId = this.actRouter?.snapshot?.params['id'];
   }

  ngOnInit(): void {
    this.fetchSingleProductDetail();
  }

  fetchSingleProductDetail(){
    if(this.productId){
      this.api.getSingleProducts(this.productId).subscribe((d:any)=>{
        this.productInfo = d?.data;
      })
    }
  }

}
