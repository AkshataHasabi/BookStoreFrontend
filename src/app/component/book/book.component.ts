import { Component, OnInit } from '@angular/core';
import { Bookmodel } from 'src/app/model/bookmodel';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book:Bookmodel= new Bookmodel("","","","",0,0);
  constructor() { }

  ngOnInit(): void {
  }
  addBook(){
    console.log(this.book);
  }

  addBook1(){
    console.log(this.book);

  }
}
