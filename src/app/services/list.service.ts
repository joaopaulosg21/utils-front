import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListData } from '../../types/List';
import { api } from '../../api';
import { createList } from '../../types/CreateList';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  api = api;

  public findAll(token:string | null) : Observable<ListData[]>{
    return this.http.get<ListData[]>(api + "list/all",{headers: {Authorization:"Bearer " + token}})
  }

  public createList(list:createList, token:string | null){
    return this.http.post(api + "list",list,{headers: {Authorization:"Bearer " + token}})
  }
}
