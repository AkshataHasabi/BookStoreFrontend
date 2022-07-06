import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  token:any;
  user: any;
  Id:any=this.route.snapshot.paramMap.get('Id');
  public TOKEN:any = "";
  // getting the user id from the parameter 
  usertoken: any = this.route.snapshot.paramMap.get('token');
  constructor(private route: ActivatedRoute, private router: Router, private userService:UserService) { }

  ngOnInit(): void {
    this.TOKEN=localStorage.getItem("token");
    console.log(this.TOKEN);

    this.userService.getUserRecordByToken(this.TOKEN).subscribe((getData:any)=>{
      console.log("Data retrieved for user",getData);
      this.user=getData.data[0];
      console.log(this.user);
    })
  }

  updateUser() {
    
    this.userService.updateUserRecordById(this.TOKEN, this.user).subscribe((data:any) => {
      console.log(this.TOKEN);
      console.log("user data updated",data);
      this.router.navigate(["ordersummary",this.TOKEN]);
    })
  }


}
