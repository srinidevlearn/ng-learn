import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryAccessGaurd implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    return this.isInventoryManager();
  }
  

  isInventoryManager(){
    let userData:any = localStorage.getItem('userInfo');
    try{
      userData = JSON.parse(userData)
    }catch(e){}
    
   if(userData?.role){
    return userData.role.includes("inventoryManager") ? true : false
   }else{
    return false;
   }
  }

}
