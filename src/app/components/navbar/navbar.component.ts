import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatDialogModule, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  
  constructor(private userService:UserService,private dialog:MatDialog){}

  token$!:Observable<string | null>;
  ngOnInit(): void {
   this.token$ = this.userService.getToken();
  }

  @Output() showSideEvent = new EventEmitter<boolean>();
  showSide() {
    this.showSideEvent.emit(true);
  }

  openLoginDialog() {
    this.dialog.open(LoginDialogComponent)
  }

  openLogoutDialog() {
    this.dialog.open(LogoutDialogComponent)
  }
}
