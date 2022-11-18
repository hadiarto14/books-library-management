import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import { LoginService } from "../service/login.service";
  
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private loginService: LoginService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        var isAuthenticated = this.loginService.isLoggedin();
        if (isAuthenticated) {
            const userRole = this.loginService.getRole()
            console.log(route.data["role"]);
            // console.log(route.data["role"].indexOf(userRole));
            if(route.data["role"] && route.data["role"].indexOf(userRole) === -1){
                this.router.navigate(['']);
                return false
            }
            return true
        }
        this.router.navigate(['/login']);
        return false;
    }
}