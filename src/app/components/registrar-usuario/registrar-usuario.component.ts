import { Component } from '@angular/core';
import { CreateUser } from 'src/app/types/CreateUser.interface';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  
  create(user:CreateUser) {
    console.log(user);
  }
}
