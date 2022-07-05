import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { NgForm } from '@angular/forms';
import { Cartmodel } from 'src/app/model/cartmodel';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { InteractionService } from 'src/app/service/interaction.service';

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
  bookData:any;
  token=this.route.snapshot.paramMap.get('token');

  cart:Cartmodel=new Cartmodel();
  carts: any;
  userId: any;
  bookId:any;
  temp: any;
  public TOKEN:any = "";

  constructor(private router:Router,private route:ActivatedRoute,private iservice:InteractionService,private cservice:CartService,private service:BookService,private bookservice:BookService, private userservice:UserService) { }

  ngOnInit(): void {
    this.TOKEN=localStorage.getItem("token");
    console.log(this.TOKEN);
    //  this.userId=this.token
    // console.log(this.userId);
    this.getCartValue();

    this.service.getAllBooks().subscribe((data:any)=>{
      console.log("Book Data retrieved successfully",data);
      this.book=data.data;
      this.totalBooks=this.book.length;
    });

    this.userservice.getUserRecordByToken(this.token).subscribe((getData:any)=>{
      console.log("User record retrieved successfully");
       this.userId=getData.data;
       console.log(this.userId)
  });
  // this.cservice.getCartRecordByUserId(this.user[0].user.userId).subscribe(data=>{
  //   console.log("data success",data);
  //   this.carts=data;
  // });
 

  }

  getCartValue(){
    console.log("dsgfsdg");
    this.cservice.getallcartdata().subscribe((getData:any) => {
      this.carts = getData.data;
      console.log(this.carts);
      // this.bookservice.getAllBooks().subscribe((data:any)=>{
      //   console.log("dfdj",data)
      //   this.book=data;
      //  this.user = this.cart.data[0].user.userId;
      // console.log(getData.data)
      // this.cart = getData.data;
    })
    // console.log(this.user.userId)
    // this.cservice.getCartRecordByUserId(this.user.userId).subscribe((data:any)=>{
    //   console.log("sfbgdnhnf");
    //   this.carts=data.data;
    // });
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

addToCart(Id:any){
  let i=0;
        if(this.carts.length == i){
      this.cart.bookId=Id;
      // this.cart.userId=this.user.userId;
      // console.log("hello",this.cart.userId);
      this.cart.token= this.TOKEN;
      this.cart.quantity=1;
      console.log(this.cart);
      console.log("hellow");
      this.cservice.addCart(this.cart).subscribe((getData:any) =>{
        console.log("Cart Added successfully !");
        this.cart=getData.data;
        window.location.reload();
      });
  }else{
    this.cservice.getCartRecordByBookId(Id).subscribe(data=>{
      this.temp=data;
      console.log(this.temp);
      if(this.temp.data==null){
        this.cart.bookId=Id;
        console.log("bookid",this.cart.bookId)
        // this.cart.userId=this.user.userId;
        // console.log("userid",this.cart.userId)
        this.cart.token= this.TOKEN;
        console.log(this.cart.token);
        this.cart.quantity=this.book.quantity;
        //console.log(this.cart);
        this.cservice.addCart(this.cart).subscribe((getData:any) =>{
          console.log("Cart Added !");
          this.cart=getData.data;
          window.location.reload();
        });
      }
      else{
        alert("Book Already present in the cart!!!");
      }
      window.location.reload();
    });
  // else{
  //   this.cart.bookId=60;
  //   this.cart.userId=26;
  //   this.cart.quantity=4;
  //   this.cservice.addCart(this.cart).subscribe((getData:any) =>{
  //     console.log("Cart Added !");
  //     this.cart=getData;
  //     //window.location.reload();
  //   });
    // this.cservice.getCartRecordByBookId(Id).subscribe((data:any)=>{
    //   this.temp=data.data;
    //   console.log(this.temp.data);
    //   if(this.temp.data==null){
    //     this.cart.bookId=Id;
    //     this.cart.userId=this.user.userId;
    //     this.cart.quantity=1;
    //     //console.log(this.cart);
    //     this.cservice.addCart(this.cart).subscribe((getData:any) =>{
    //       console.log("Cart Added !");
    //       this.cart=getData;
    //       //window.location.reload();
    //     });
    //   }
    //      else{
    //     alert("Book Already added...Please check cart !!!");
    //   }
    //   window.location.reload();
    // });
  }
}

}

