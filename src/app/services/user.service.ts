import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUser } from '../types/CreateUser.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private api:string = environment.api;

  createUser(user:CreateUser){
    return this.http.post("http://localhost:8080/api/users/",user);
  }

}
