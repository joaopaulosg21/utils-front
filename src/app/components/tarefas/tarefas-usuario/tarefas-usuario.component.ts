import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TasksService } from 'src/app/services/tasks.service';
import { UserService } from 'src/app/services/user.service';
import { Task } from 'src/app/types/Task.interface';

@Component({
  selector: 'app-tarefas-usuario',
  templateUrl: './tarefas-usuario.component.html',
  styleUrls: ['./tarefas-usuario.component.css']
})
export class TarefasUsuarioComponent implements OnInit {
  constructor(private taskService: TasksService, private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.findAll();
  }

  allTasks: Task[] = [];

  findAll() {
    this.userService.getToken().subscribe((token: any) => {
      this.taskService.findAll(token).subscribe((data: any) => {
        this.allTasks = data;
      });
    });
  }

  complete(id: string) {
    this.userService.getToken().subscribe((token: any) => {
      this.taskService.complete(id, token).subscribe((data: any) => {
        this.snackBar.open("Task concluida com sucesso!", "", { duration: 2000 });
        this.ngOnInit();
      });
    });
  }

  findByDate(picker: any) {
    const date: Date = picker._model.selection;
    const find = {
      time: date.toLocaleString().split(",")[0].replaceAll("/", "-")
    };
    this.userService.getToken().subscribe((token: any) => {
      this.taskService.findByDate(token, find).subscribe((data: any) => {
        this.allTasks = data;
      })
    });
  }

  findByDescription(description: string) {
    description = description.replaceAll(" ", "-");

    this.userService.getToken().subscribe((token: any) => {
      this.taskService.findByDescription(token, description).subscribe((data: any) => {
        this.allTasks = data;
      })
    });
  }
}
