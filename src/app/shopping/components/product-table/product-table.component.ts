import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  dataSource$:any = this.api.getAllProducts();

  constructor(private api:ShoppingApiService,private router:Router) { }

  ngOnInit(): void {
  }
  edit(id:string){
    this.router.navigateByUrl('/shopping/product_inventory/form/'+id)
  }
  delete(){}
}
