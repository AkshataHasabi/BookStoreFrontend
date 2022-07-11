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
  }

  getCartValue(){
    console.log("dsgfsdg");
    this.cservice.getallcartdata().subscribe((getData:any) => {
      this.carts = getData.data;
      console.log(this.carts);
    })
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
      this.cart.token= this.TOKEN;
      this.cart.quantity=1;
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
        this.cart.token= this.TOKEN;
        console.log(this.cart.token);
        this.cart.quantity=this.book.quantity;
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
  }
}

tologinPage() {
  this.router.navigate(["login"]);
}

}

