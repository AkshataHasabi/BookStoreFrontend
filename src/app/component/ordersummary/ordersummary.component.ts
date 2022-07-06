import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit {

  book:any;
  order:any;
  cart!: any;
  amount:any;

  constructor(private cartService:BookService,private bookService:BookService,private router:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((getData:any)=>{
      console.log("order Data Retrieved successfully",getData);
      this.order=getData;
   });
   this.bookService.getById(this.order.bookid).subscribe((data:any)=>{
    console.log("Book data retrieved",data);
    //console.log(this.order.data.bookid.bookid);
    this.book = data.data;
  })

  this.money();
  }

  
  orderDetails(){
    this.router.navigate(['order']);
  }


money(){
    this.orderService.getTotalPrice().subscribe((data:any)=>{
      console.log("Data",data);
      this.amount = data;
      console.log("Money",this.amount);
    })
  }

}
