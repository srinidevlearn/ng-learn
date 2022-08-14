import { Component, OnInit } from '@angular/core';
import { ShoppingApiService } from '../../services/api.service';
import { Subject } from 'rxjs';
import { delay, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  private destroy = new Subject<void>();
  cartItems: any = [];
  constructor(private api: ShoppingApiService) {}
  ngOnInit(): void {
    this.fetchCartItems();
  }
  fetchCartItems() {
    this.api
      .getUserCartItem()
      .pipe(takeUntil(this.destroy))
      .subscribe((product: any) => {
        this.cartItems = product;
      });
  }
  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  deleteItem(item: any) {

    let updateCart:any =null
    
    this.cartItems = this.cartItems.map((cartItem:any)=>{
      
      if(cartItem.product.id === item.product.id){
        cartItem.quantity = item.quantity-1;
        if(cartItem.quantity<=1) cartItem.quantity = 1;

        updateCart = cartItem;
      }
      return cartItem;
    })

    if(updateCart) this.updateCartItem(updateCart);
  }
  addToItem(item: any) {

    let updateCart:any = null;

    this.cartItems = this.cartItems.map((cartItem:any)=>{
      if(cartItem.product.id === item.product.id){
        cartItem.quantity = item.quantity+1;
        if(cartItem.quantity>=5) cartItem.quantity = 5;
      }
      updateCart = cartItem;
      return cartItem;
    })

    if(updateCart) this.updateCartItem(updateCart);
  }
  updateCartItem(cartEvent:any){
    cartEvent.id = cartEvent.product.id;
    this.api.updateUserCartItem(cartEvent).pipe(take(1)).subscribe()
  }
}
