import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
   
  book:any;
  totalBooks: number = 10;
  sort:string;
  search:any;
  token:any;


  constructor(private router:Router,private route:ActivatedRoute,private service:BookService) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe((data:any)=>{
      console.log("Book Data retrieved successfully",data);
      this.book=data.data;
      this.totalBooks=this.book.length;
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
getById(){
  this.service.getById(this.token).subscribe((data:any)=>{this.book=data.data});
}
}
