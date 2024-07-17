import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { api } from '../../api';
import { CreateUser } from '../../types/CreateUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private tokenSubject:BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  api = api;

  login(email:string,password:string) {
    const login = {
      email:email,
      password:password
    }
    return this.http.post(api+"login",login);
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

  register(user:CreateUser) {
    return this.http.post(api + "users",user);
  }
}
