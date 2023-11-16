import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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

  createTask(description: string, range: any, time: any) {
    let task: CreateTask | null = null;

    if (range.end == null) {
      task = {
        description: description,
        everyDay: true,
        time: this.formatDate(range.start, time.value),
        end_date: this.formatDate(range.start, time.value)
      };
    } else {
      task = {
        description: description,
        everyDay: true,
        time: this.formatDate(range.start, time.value),
        end_date: this.formatDate(range.end, time.value)
      };
    }


    if (task.end_date == null) {
      task.end_date = this.formatDate(range.start, time.value);
    }

    this.userService.getToken().subscribe((token: any) => {
      this.taskService.createTask(task, token).subscribe((data: any) => {
        this.snackBar.open("Tarefa " + description + " adicionada com sucesso", "", { duration: 2000, verticalPosition: 'top' });
      });
    });
  }

  formatDate(range: any, time: string): string {
    const fullDate: Date = range;

    return fullDate.toLocaleString("pt-br").replaceAll("00:00:00", time + ":00").replace(",", "");
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
