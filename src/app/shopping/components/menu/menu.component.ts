import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { ShoppingApiService } from '../../services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  private destroy = new Subject<void>();

  // todo
  // 1) fetch all product from server
  // 2) send data to app-product card using input
  // cart item increase quantity handle via output
  // collect all cartData at here

  tempCartImage = "https://ouch-cdn2.icons8.com/v9tQerukt_ZRIn_4wqPGcLmlPCQway9C3MUD1AKfn10/rs:fit:485:456/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNi9k/MDU5NDhhMS1hNjUw/LTRjZDMtYTVmNC02/MmNiNTgzZWRjYzUu/c3Zn.png"
  cartCounter=0;
  loader: boolean =false;
  constructor(private api:ShoppingApiService) { 
    this.loader = true;
    this.fetchCartItems();

  }

  productInfo = [];
  cartItem:{[k:string]:any} = {};

  ngOnInit(): void {

    this.fetchAllProducts();
  }

  ngOnDestroy():void{
    this.destroy.next();
    this.destroy.complete();
  }

  fetchAllProducts(){
    this.loader = true;
      this.api.getAllProducts().pipe(takeUntil(this.destroy),delay(2000)).subscribe(product=>{
        this.productInfo = product.map(((item:any)=>{
          if(Object.keys(this.cartItem).includes(item.id)){
            item['quantity'] = this.cartItem[item.id].quantity;
            item.cartId = this.cartItem[item.id].id
          }else{
            item['quantity'] =0;
          }
          return item;
        }))
        this.loader = false
      })

  }

  fetchCartItems(){
    return this.api.getUserCartItem().pipe(takeUntil(this.destroy)).subscribe((product:any)=>{   
      this.cartCounter = product.length  
      product.forEach((item:any,index:any)=>{
        this.cartItem[item.product.id] = item;
      }) 
    })
  }

  updateCart(cartEvent:any){
    if(cartEvent.quantity >= 1)this.api.updateUserCartItem(cartEvent).pipe(
      tap(d=>this.fetchCartItems()),
      take(1)
      ).subscribe()
    if(cartEvent.quantity === 0)this.api.deleteCartItem(cartEvent).pipe(tap(d=>this.fetchCartItems()),take(1)).subscribe()
  }

}
