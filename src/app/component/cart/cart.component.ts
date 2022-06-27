
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartmodel } from 'src/app/model/cartmodel';
import { BookService } from 'src/app/service/book.service';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
 
  // carts: any;
  constructor(private route: Router, private cservice:CartService, private bookservice:BookService, private userservice:UserService, private router:ActivatedRoute) { }
  // imagePath = "../../../assets/"

  cart:any;
  user:any;
  book:any;

  token=this.router.snapshot.paramMap.get('token');
  ngOnInit(): void {
    console.log("fdsgfs")
    this.cservice.getallcartdata().subscribe((getData: any) => {
      if (getData.data.length == undefined) {
        this.route.navigate(["details",this.token]);
      }
      this.cart = getData;
      this.user = this.cart.data[0].user.userId;

    })
    // this.cservice.getallcartdata().subscribe((data:any) => {
    //   this.cart = data;
    //   this.user = this.cart.data[0].user.userId;
    //   console.log(data)
    // })

  }

  updateCartadd(cartId: number, cart: any) {
   cart.quantity = cart.quantity + 1;
    this.cservice.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe((data:any) => {
      window.location.reload();
    });

  }

  updateCartsubstract(cartId: number, cart: any) {
    cart.quantity = cart.quantity - 1;
    this.cservice.updateCartByCartQuantityByCartId(cartId, cart.quantity).subscribe((data:any) => {
    });
    }

    deleteCart(cartId: number) {
      this.cservice.deleteCartByCartId(cartId).subscribe(data => {
        window.location.reload()
      });
    }
  }

