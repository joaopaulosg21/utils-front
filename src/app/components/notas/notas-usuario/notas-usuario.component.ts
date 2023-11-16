import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notas-usuario',
  templateUrl: './notas-usuario.component.html',
  styleUrls: ['./notas-usuario.component.css']
})
export class NotasUsuarioComponent implements OnInit{
  constructor(private userService:UserService, private notesService:NotesService) {}

  ngOnInit(): void {
    this.findAll();
  }


  findAll() {
    this.userService.getToken().subscribe((token:any) => {
      this.notesService.findAll(token).subscribe((data:any) => {
        console.log(data);
      });
    });
  }
}
