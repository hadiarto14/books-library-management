import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class Interceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('TOKEN') != null) { 
            const token =  localStorage.getItem('TOKEN');
            const headers = new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Authorization': 'Bearer '+token,
            });
            const AuthRequest = request.clone( { headers: headers});
            return next.handle(AuthRequest);
        }else{
            return next.handle(request);
        }
    }
}