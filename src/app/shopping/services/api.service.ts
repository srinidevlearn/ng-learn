import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { EMPTY, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JwtHandlerService } from './jwt-handler.service';
@Injectable({
  providedIn: 'root',
})
export class ShoppingApiService {
  private url = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient,
    private toast: HotToastService,
    private token: JwtHandlerService
  ) {}

  login(body: { email: string; password: string }) {
    return this.http.post(this.url + '/auth/login', body, {
      // headers:new HttpHeaders().set('')
    });
  }

  getAllCategories() {
    return (
      this.http
        .get(this.url + '/product/get/categories')
        //   .pipe(map((i: { status: string; data: string[] }) => i.data));// todo
        .pipe(map((i: any) => i.data))
    );
  }

  addNewProduct(body: any) {
    return this.http
      .post(this.url + '/product/new', body)
      .pipe(catchError(this.handleError));
  }

  updateProduct(body: any) {
    return this.http
      .put(this.url + '/product/update', body)
      .pipe(catchError(this.handleError));
  }
  getAllProducts() {
    return this.http
      .get(this.url + '/product/get', {
        params: new HttpParams().set('all', true),
      })
      .pipe(
        catchError(this.handleError),
        map((i: any) => (i?.data ? i.data : []))
      );
  }

  getUserCartItem() {
    let userData = this.token.parsedToken();
    return this.http
      .get(this.url + '/cart/getUserCart/' + userData.userId)
      .pipe(map((i: any) => i.data));
  }

  updateUserCartItem(cartItem: any) {
    let userData = this.token.parsedToken();
    return this.http.post(this.url + '/cart/addToCart', {
      userId: userData.userId,
      productId: cartItem.id,
      quantity: cartItem.quantity,
    });
  }
  deleteCartItem(cartItem: any) {
    let userData = this.token.parsedToken();
    return this.http.delete(this.url + '/cart/delete/'+cartItem.cartId);
  }

  getSingleProducts(id: string) {
    return this.http
      .get(this.url + '/product/get?', {
        params: new HttpParams().set('id', id),
      })
      .pipe(catchError(this.handleError));
  }
  handleError(error: any) {
    console.log(error);
    // this.toast.error('Oh no!');
    return error;
    // return EMPTY;
  }
}
