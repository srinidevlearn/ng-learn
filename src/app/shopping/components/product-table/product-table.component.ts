import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingApiService } from '../../services/api.service';
import { JwtHandlerService } from '../../services/jwt-handler.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  dataSource$:any = this.api.getAllProducts();

  constructor(private api:ShoppingApiService,private router:Router,private token:JwtHandlerService) { }

  ngOnInit(): void {
    console.log(this.token.parsedToken())
  }
  edit(product:any){
    if(product?.id)this.router.navigateByUrl('/shopping/product_inventory/form/'+product?.id)
  }
  delete(){}
  view(product:any){
    if(product?.id)this.router.navigateByUrl('/shopping/product-description/'+product?.id)
  }
}
