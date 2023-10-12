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

  findAllPublic() {
    return this.http.get(this.api + "/api/list/find/public");
  }

  findAllUser(token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.api + "/api/list/find/all",{headers:header});
  }
}
