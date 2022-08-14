import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHandlerService } from './jwt-handler.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryAccessGaurd implements CanActivate {
  constructor( public token:JwtHandlerService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    return this.isInventoryManager();
  }
  

  // isInventoryManagerBCK(){
  //   let userData:any = localStorage.getItem('userInfo');
  //   try{
  //     userData = JSON.parse(userData)
  //   }catch(e){}
    
  //  if(userData?.role){
  //   return userData.role.includes("inventoryManager") ? true : false
  //  }else{
  //   return false;
  //  }
  // }

  isInventoryManager(){
    let userData = this.token.parsedToken()
    if(userData?.user?.role){
      return userData.user.role.includes("inventoryManager") ? true : false
     }

    return false;
  }

}
