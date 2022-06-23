import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  registerBook(book: any) {
    return this.http.post("http://localhost:8080/book/create", book);
  }

  getAllBooks() {
    return this.http.get("http://localhost:8082/book//name/");
  }
}
