import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHandlerService } from '../shopping/services/jwt-handler.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private token:JwtHandlerService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log(request);
    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' +  this.token.token},
    });
    return next.handle(request);
  }
}
