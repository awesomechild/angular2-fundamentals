import { Component } from "@angular/core"
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl:'app/user/login.component.html'
})
export class LoginComponent{
    constructor(private authService:AuthService, private router: Router){

    }
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password)
        this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events']) 
        //square brackets ke bahar (single) brackets hota hai 6:00 am to 8:51 am isme chala gya
    }
}

