import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListData } from '../../types/List';
import { api } from '../../api';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  api = api;

  public findAll(token:string | null) : Observable<ListData[]>{
    return this.http.get<ListData[]>(api + "list/all",{headers: {Authorization:"Bearer " + token}})
  }
}
