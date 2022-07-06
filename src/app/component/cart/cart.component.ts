
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartmodel } from 'src/app/model/cartmodel';
import { Ordermodel } from 'src/app/model/ordermodel';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { UserService } from 'src/app/service/user.service';
// import {BookImage} from 'src/assets/book2.png';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  bookData: any;
 
 
  // carts: any;
  constructor(private route: Router, private cservice:CartService,private orderservice:OrderService,private bookservice:BookService, private userservice:UserService, private router:ActivatedRoute) { }
  // imagePath = "../../../assets/"

  cart:any;
  user:any;
  book:any;
  quantity:any;
  orderSummary=false;
  order:Ordermodel=new Ordermodel();
  public TOKEN:any = "";
  // bookData:any;
  token=this.router.snapshot.paramMap.get('token');

  
  ngOnInit(): void {
    console.log("fdsgfs")

    this.TOKEN=localStorage.getItem("token");
    console.log(this.TOKEN);

    this.cservice.getallcartdata().subscribe((getData: any) => {
      if (getData.data.length == undefined) {
        this.route.navigate(["details",this.token]);
      }
      this.cart = getData;
      console.log("cart data",this.cart)
      // this.user = this.cart.data[0].user.userId;
      // console.log("karthiiiii",this.user)
      this.user = this.cart.data[0].user.userId;
       console.log("user data",this.user)
    })
    // this.cservice.getallcartdata().subscribe((getData:any) => {
    //   this.cart = getData.data;
    //    this.user = this.cart.data[0].user.userId;
    //    console.log("gvgv",this.user)
    //   console.log(getData.data)
    //   // this.cart = getData.data;
    // })

  }

  updateCartadd(cartId: number, cart: any) {
   cart.quantity = cart.quantity + 1;
    this.cservice.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe((data:any) => {
      window.location.reload();
    });

  }

  updateCartsubstract(cartId: number, cart: any) {
    cart.quantity = cart.quantity- 1;
    this.cservice.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe((data:any) => {
    });
    }

    deleteCart(cartId: number) {
      this.cservice.deleteCartByCartId(cartId).subscribe(data => {
        window.location.reload()
      });
    }
  
    placeOrder(){
      // console.log("data",this.cart.bookData.bookId);
      // this.customerDetails=true;
      for(let i=0;i< this.cart.data.length;i++){
        console.log(this.cart.data.length)
        this.order.token=this.TOKEN;
        console.log(this.order.token)
        this.order.userId=this.cart.data[i].user.userId;
        console.log("data",this.order.userId);
        this.order.bookId=this.cart.data[i].bookData.bookId;
        console.log("bookid",this.order.bookId)
        this.order.quantity=this.cart.data[i].quantity;
        this.order.price=this.cart.data[i].bookData.price ;
        this.order.address=this.cart.data[i].user.address;
        console.log(this.order.address);
        this.order.cancel=false;
        this.orderservice.postOrder(this.order).subscribe((getData:any)=>{
          console.log("Order Placed !",getData);
          this.order=getData;
          console.log(this.order);
          });
          // this.router.navigate(['customer',this.token]);
  
        this.cservice.deleteCartByCartId(this.cart.data[i].cartId).subscribe(data=>{
        console.log("Cart removed !");
      })
      }
      this.route.navigate(['customer',this.TOKEN]);
  
    }
  }
  

