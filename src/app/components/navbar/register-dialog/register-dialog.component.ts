import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUser } from '../../../../types/CreateUser';
import { UserService } from '../../../services/user.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule],
  templateUrl: './register-dialog.component.html',
  styleUrl: './register-dialog.component.css'
})
export class RegisterDialogComponent {

  constructor(private userService: UserService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  register(name: string, email: string, password: string) {
    const user: CreateUser = {
      name: name,
      email: email,
      password: password
    };

    const response = this.userService.register(user);

    response.subscribe(data => {
      this.snackBar.open("Registro efetuado com sucesso!", undefined, { duration: 2000 });
      this.dialog.closeAll();
      this.dialog.open(LoginDialogComponent);
    })
  }
}
