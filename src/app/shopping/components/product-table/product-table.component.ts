import { Component, OnInit } from '@angular/core';
import { ShoppingApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  dataSource$:any = this.api.getAllProducts();

  constructor(private api:ShoppingApiService) { }

  ngOnInit(): void {
  }

}
