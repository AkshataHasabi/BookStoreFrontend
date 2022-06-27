import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { 
  }

  addCart(cart:any){
    return this.http.post("http://localhost:8080/cart/create",cart);
  }

  updateCartByCartQuantityByCartId(Id:any,quantity:any){
    return this.http.get("http://localhost:8080/cart/cartid/"+Id+"?quantity="+quantity)
}

  getallcartdata(){
    return this.http.get("http://localhost:8080/cart/getall")
  }

  deleteCartByCartId(id:any){
    return this.http.delete("http://localhost:8080/cart/cartdelete/"+id);
  }

  getCartRecordByBookId(id:any){
    return this.http.get("http://localhost:8080/cart/retrieveCartByBookId/"+id);
}

getCartRecordByUserId(id:any){
  return this.http.get("http://localhost:8080/cart/retrieveCartByUserId/"+id);
}
}
