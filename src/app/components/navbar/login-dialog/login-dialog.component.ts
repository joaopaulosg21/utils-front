import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';
import { DialogModule } from '@angular/cdk/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {

  userService = inject(UserService);
  snackBar = inject(MatSnackBar);
  dialog = inject(MatDialog);

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login(email: string, password: string) {
    const response = this.userService.login(email, password);
    response.subscribe({
      next: (result: any) => {
        if (result.hasOwnProperty("token")) {
          this.userService.setToken(result.token);
          this.snackBar.open("Login efetuado com sucesso", undefined, { duration: 2000 });
          this.dialog.closeAll();
        }
      },
      error: (err) => {
        throw new Error(err.error.error);
      }
    })
  }

  register() {
    this.dialog.closeAll();
    this.dialog.open(RegisterDialogComponent);
  }
}
