import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TasksService } from 'src/app/services/tasks.service';
import { UserService } from 'src/app/services/user.service';
import { Task } from 'src/app/types/Task.interface';

@Component({
  selector: 'app-tarefas-do-dia',
  templateUrl: './tarefas-do-dia.component.html',
  styleUrls: ['./tarefas-do-dia.component.css']
})
export class TarefasDoDiaComponent implements OnInit {

  constructor(private taskService: TasksService, private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.todayTasks();
  }

  allTasks: Task[] = [];

  complete(id: string) {
    this.userService.getToken().subscribe((token: any) => {
      this.taskService.complete(id, token).subscribe((data: any) => {
        this.snackBar.open("Task concluida com sucesso!", "", { duration: 2000 });
        this.ngOnInit();
      });
    });
  }

  todayTasks() {
    const date = new Date(Date.now()).toLocaleString("pt-br").split(",")[0].replaceAll("/","-");
    const find = {
      time: date
    }
    this.userService.getToken().subscribe((token: any) => {
      this.taskService.findByDate(token, find).subscribe((data: any) => {
        this.allTasks = data;
      });
    });
  }

}
