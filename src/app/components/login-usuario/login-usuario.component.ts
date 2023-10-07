import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Login } from 'src/app/types/Login.interface';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {
  constructor(private userService:UserService,private snackBar:MatSnackBar){}

  login(login:Login) {
    return this.userService.login(login).subscribe(data => {
      console.log(data);
    });
  }
}
