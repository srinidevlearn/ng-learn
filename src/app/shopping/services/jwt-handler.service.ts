import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class JwtHandlerService {
  
  jwt = new JwtHelperService();
  public get token(){
    let temp:any = localStorage.getItem('my-app-token');
    return temp.replace(/"/g,'')
    
  }
  constructor() { 


  }

  parsedToken(){
      var tokenPayload = this.jwt.decodeToken(this.token);
      return tokenPayload
  }
}
