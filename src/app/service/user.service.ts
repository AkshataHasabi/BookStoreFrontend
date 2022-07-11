import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post("http://localhost:8080/user/create", user);
  }

  getUserRecordById(id: any) {
    return this.http.get("http://localhost:8080/user/get/" + id)
  }

  userLogin(loginData: any) {
    return this.http.post("http://localhost:8080/user/login", loginData);
  }

  getToken(email: any) {
    return this.http.get("http://localhost:8080/user/getToken/" + email);
  }

  getUserRecordByToken(token: any) {
    return this.http.get("http://localhost:8080/user/getAll/" + token)
  }

  updateUserRecordById(token: any, user: any) {
    return this.http.put("http://localhost:8080/user/update/" + token, user);
  }
}
