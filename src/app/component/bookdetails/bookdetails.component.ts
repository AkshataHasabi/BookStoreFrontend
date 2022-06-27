import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { NgForm } from '@angular/forms';
import { Cartmodel } from 'src/app/model/cartmodel';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  
  user:any;
  book:any;
  totalBooks: number = 10;
  sort:string;
  search:any;
  
  token=this.route.snapshot.paramMap.get("token");

  cart:Cartmodel=new Cartmodel(0,0,0);
  carts: any;
  userId: any;
  bookId:any;
  temp: any;

  constructor(private router:Router,private route:ActivatedRoute,private cservice:CartService,private service:BookService,private bookservice:BookService, private userservice:UserService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe((data:any)=>{
      console.log("Book Data retrieved successfully",data);
      this.book=data.data;
      this.totalBooks=this.book.length;
    });

  //   this.userservice.getUserRecordByToken(this.token).subscribe((getData:any)=>{
  //     console.log("User record retrieved successfully");
  //      this.userId=getData.data;
  // });

  this.cservice.getCartRecordByUserId(this.user.userId).subscribe((data:any)=>{
    console.log("sfbgdnhnf",data);
    this.carts=data.data;
  });

  }

  sortBy() {
    if (this.sort == "Increasing") {
      this.service.sortBookInAscending().subscribe((data:any) => {
        this.book = data.data;
      });
    } if (this.sort == "Decreasing") {
      this.service.sortBookInDescending().subscribe((data:any) => {
        this.book = data.data;

      });
    } if (this.sort == "Relevance") {
      this.service.getAllBooks().subscribe((data:any) => {
        this.book= data.data;
      });
    }
 }

 searchByBookname() {
  console.log("search")
    this.service.searchBookByName(this.search).subscribe((data:any) => {
      this.book=data.data;
      console.log("fdgd",data);
    });
}
// getById(){
//   this.service.getById(this.token).subscribe((data:any)=>{this.book=data.data});
// }

// addToCart(bookId: number) {
  // let i = 0
  // if (this.carts.data != 0) {
  //   for (; i < this.carts.data.length; i++) {
  //     if (this.carts.data[i].book.bookId == bookId) {
  //       alert("book is already in cart");
  //       break;
  //     }
  //   }

  //   if (this.carts.data.length==0) {
  //     this.cart.bookId = bookId;
  //     this.cart.userId = this.userId;
  //     this.cart.quantity = 1;
  //     this.cservice.addCart(this.cart).subscribe((data: any) => {
  //       this.carts = data.data;
  //       window.location.reload();

  //     });
  //   }
  // else {
    // this.cart.bookId = bookId;
    // this.cart.userId = this.userId
    // this.cart.quantity = 1;
  //   this.cservice.getcartbibookid().subscribe((data: any) => {
  //     this.carts = data.data;
  //     window.location.reload();
  //   });
  // }
// }

addToCart(Id:any){
  let i=0;
  // console.log("hello");
  //  console.log(this.carts.data.length);
    // if(this.carts.data.length == 0){
      if(this.carts.data.length == i){
      this.cart.bookId=Id;
      this.cart.userId=this.user.userId;
      console.log("hello");
      this.cart.quantity=1;
      console.log(this.cart);
      console.log("hellow");
      this.cservice.addCart(this.cart).subscribe((getData:any) =>{
        console.log("Cart Added successfully !");
        this.cart=getData.data;
        window.location.reload();
      });
  }
  else{
    this.cservice.getCartRecordByBookId(Id).subscribe((data:any)=>{
      this.temp=data.data;
      console.log(this.temp.data);
      if(this.temp.data==null){
        this.cart.bookId=Id;
        this.cart.userId=this.user.userId;
        this.cart.quantity=1;
        //console.log(this.cart);
        this.cservice.addCart(this.cart).subscribe((getData:any) =>{
          console.log("Cart Added !");
          this.cart=getData;
          //window.location.reload();
        });
      }
         else{
        alert("Book Already added...Please check cart !!!");
      }
      window.location.reload();
    });
  }
}

}

