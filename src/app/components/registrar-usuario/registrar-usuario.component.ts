import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CreateUser } from 'src/app/types/CreateUser.interface';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {
  constructor(private userService:UserService, private snackBar:MatSnackBar,
    private router:Router) {}

  create(user:CreateUser) {
    this.userService.createUser(user).subscribe(data => {
      this.snackBar.open("Sua conta foi registrada com sucesso","",{duration:2000});
      this.router.navigateByUrl("/conta/login");
    });
  }
}
