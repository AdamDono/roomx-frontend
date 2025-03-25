import { Injectable } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('access_token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Safe localStorage access
  let token: string | null = null;
  try {
    token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  } catch (e) {
    console.warn('localStorage access error:', e);
  }

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  return next(req);
};
