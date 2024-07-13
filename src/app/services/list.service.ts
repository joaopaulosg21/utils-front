import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListData } from '../../types/List';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }


  public findAll(token:string | null) : Observable<ListData[]>{
    return this.http.get<ListData[]>("http://localhost:8080/list/all",{headers: {Authorization:"Bearer " + token}})
  }
}
