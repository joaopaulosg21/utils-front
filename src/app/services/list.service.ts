import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateList } from '../types/CreateList.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }
  private api:string = environment.api;

  createList(list:CreateList, token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(this.api + "/api/list/",list,{headers:header});
  } 
}
