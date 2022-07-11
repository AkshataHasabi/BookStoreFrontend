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
    return this.http.get("http://localhost:8080/book/get");
  }

  // To get all the books from database in the form of assending order by 'PRICE'
  sortBookInAscending() {
    return this.http.get("http://localhost:8080/book/ascsort");
  }

  // To get all the books from database in the form of descending order by 'PRICE'
  sortBookInDescending() {
    return this.http.get("http://localhost:8080/book/dessort");
  }

  searchBookByName(name: any) {
    return this.http.get("http://localhost:8080/book/name/" + name);
  }

  getById(id: any) {
    return this.http.get("http://localhost:8080/book/id/" + id)
  }

}
