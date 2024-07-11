import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-logout-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './logout-dialog.component.html',
  styleUrl: './logout-dialog.component.css'
})
export class LogoutDialogComponent {

  constructor(private snackBar:MatSnackBar, private dialog:MatDialog, private userService:UserService){}

  logout() {
    this.userService.setToken(null);
    this.snackBar.open("Logout efetuado com sucesso",undefined,{duration:2000});
    this.dialog.closeAll();
  }

}
