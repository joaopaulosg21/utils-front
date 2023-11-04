import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { RegistrarNotaComponent } from '../notas/registrar-nota/registrar-nota.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private userService:UserService, private router:Router, private dialog:MatDialog){}

  token$!:Observable<string | null>;
  
  ngOnInit(): void {
    this.token$ = this.userService.getToken()
  }

  logout() {
    this.userService.setToken(null);
    this.router.navigateByUrl("/conta/login");
  }

  openDialog() {
    this.dialog.open(RegistrarNotaComponent);
  }
}
