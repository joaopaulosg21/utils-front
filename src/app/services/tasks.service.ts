import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateTask } from '../types/CreateTask.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }
  private api:string = environment.api;
  
  createTask(task:CreateTask | null,token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(this.api + "/api/tasks/",task,{headers:header});
  }

  findAll(token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.api + "/api/tasks/find/all",{headers:header});
  }

  complete(id:string,token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.patch(this.api + "/api/tasks/complete/"+id,"",{headers:header});
  }

  findByDate(token:string, find:any) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.api + "/api/tasks/find?date="+find.time,{headers:header});
  }

  findByDescription(token:string, description:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(this.api + "/api/tasks/find?description="+description,{headers:header});
  }
}
