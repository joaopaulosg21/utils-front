import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }
  private api:string = environment.api;

  createNote(token:string, data:any) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(this.api + "/api/notes/",data,{headers:header});
  }


}
