import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  
  postOrder(order:any){
    return this.http.post("http://localhost:8080/order/create",order);
}

getAllOrders(){
  return this.http.get("http://localhost:8080/order/getallorders");
}

deleteOrderRecordById(Id:any){
  return this.http.delete("http://localhost:8080/order/delete/"+Id);
}

getTotalPrice(){
  return this.http.get("http://localhost:8080/order/totalPrice");
}
}
