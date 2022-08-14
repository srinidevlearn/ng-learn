import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ShoppingApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductDescResolver implements Resolve<any> {
  constructor(public api: ShoppingApiService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    let { id } = route?.params;
    return this.api
      .getSingleProducts(id)
      .pipe(map((d:any) => (d?.data ? d.data : [])));
  }
}
