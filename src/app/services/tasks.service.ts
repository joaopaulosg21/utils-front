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
  
  createTask(task:CreateTask,token:string) {
    const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.post(this.api + "/api/tasks/",task,{headers:header});
  }
}
