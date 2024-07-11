import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private tokenSubject:BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  login(email:string,password:string) {
    const login = {
      email:email,
      password:password
    }
    return this.http.post("http://localhost:8080/login",login);
  }

  setToken(token:string | null) {
    if(token) {
      localStorage.setItem("jwtToken",token);
    }
    this.tokenSubject.next(token);
  }

  getToken() {
    return this.tokenSubject.asObservable();
  }
}
