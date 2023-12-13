import { Injectable } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { 
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpHandler

 } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIntersepterService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (typeof localStorage !== 'undefined') {

    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      const authRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next.handle(authRequest);
    }
  }
    return next.handle(req);
  }
}
