import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usermodel } from 'src/app/model/usermodel';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Usermodel = new Usermodel("", "", "", "", "");
  constructor(private route: Router, private service: UserService, private router: ActivatedRoute) { }

  id: any = this.router.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.service.getUserRecordById(this.id).subscribe((getData: any) => {
      console.log("User Record for given token retrieved successfully", getData);
      this.user = getData;
    })
  }

  onClick() {
    console.log("dafsd")
    this.service.registerUser(this.user).subscribe((data: any) => {
      console.log("User Registered Successfully");
      this.route.navigate(['login']);
    });
  }
}
