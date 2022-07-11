import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loginmodel } from 'src/app/model/loginmodel';
import { UserService } from 'src/app/service/user.service';
import { InteractionService } from 'src/app/service/interaction.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  token: any;
  // To store the status of login weather sucussfull or wrong email or wrong password
  status: any;

  login: Loginmodel = new Loginmodel("", "");
  registerData = false;

  // To store the user entered  email for login from ng model
  email!: string;

  // To store user enterd password for login from ngModel 
  password!: string;

  // to store the logined in user user id to pass later into param  
  userId!: any


  constructor(private service: UserService, private route: Router, private intr: InteractionService) { }

  ngOnInit(): void {
  }

  signIn() {
    console.log(this.login)
    this.registerData = true;
    setTimeout(() => {
      this.service.userLogin(this.login).subscribe((data: any) => {
        this.service.getToken(this.login.email).subscribe((getData: any) => {
          console.log("Token retrieved successfully", getData);
          this.token = getData.data;
          localStorage.setItem("token", this.token);
          console.log("Token from login", this.token);
          this.intr.sendToken(this.token);
          this.route.navigate(['details', this.token]);
        });
        console.log("User Logged In Successfully", data);
      }, error => {
        alert("Invalid username or password");
      });
    }, 1000);
  }

  register() {
    this.route.navigate(['register']);
  }

}
