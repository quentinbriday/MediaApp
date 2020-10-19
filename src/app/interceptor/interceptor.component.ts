import { Component, OnInit } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit, HttpInterceptor {

  constructor() { }

  ngOnInit(): void {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newReq = req.clone({headers:
    req.headers.set('Authorization', 'thisismyuniquetokenorsomething')});
    return next.handle(newReq);
  }

}
