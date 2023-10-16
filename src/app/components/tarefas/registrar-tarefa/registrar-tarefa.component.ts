import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TasksService } from 'src/app/services/tasks.service';
import { UserService } from 'src/app/services/user.service';
import { CreateTask } from 'src/app/types/CreateTask.interface';

@Component({
  selector: 'app-registrar-tarefa',
  templateUrl: './registrar-tarefa.component.html',
  styleUrls: ['./registrar-tarefa.component.css']
})
export class RegistrarTarefaComponent {

  constructor(private taskService: TasksService, private userService: UserService,
    private snackBar: MatSnackBar) { }

  createTask(description: string, picker: any, time: string, everyDay: string) {
    const task: CreateTask = {
      description: description,
      everyDay: JSON.parse(everyDay),
      time: this.formatDate(picker, time)
    };
    
    this.userService.getToken().subscribe((token: any) => {
      this.taskService.createTask(task, token).subscribe((data: any) => {
        this.snackBar.open("Tarefa " + description + " adicionada com sucesso", "", { duration: 2000 });
      });
    });
  }

  formatDate(picker: any, time: string): string {
    const fullDate: Date = picker._model.selection;

    return fullDate.toLocaleString().replaceAll("00:00:00", time + ":00").replace(",", "");
  }
}
