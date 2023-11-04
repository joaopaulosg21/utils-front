import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from 'src/app/services/notes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registrar-nota',
  templateUrl: './registrar-nota.component.html',
  styleUrls: ['./registrar-nota.component.css']
})
export class RegistrarNotaComponent {

  constructor(private userService:UserService, private notesService:NotesService, private snackBar:MatSnackBar){}

  createNote(description:string) {
    const data = {
      description:description
    }

    this.userService.getToken().subscribe((token:any) => {
      this.notesService.createNote(token,data).subscribe((data:any) =>{
        this.snackBar.open("Nota adicionada com sucesso!","",{duration:2000,verticalPosition:'top'});
      });
    });

  }
}
