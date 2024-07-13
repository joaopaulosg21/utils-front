import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [NavbarComponent, MatSidenavModule, MatButtonModule, MatMenuModule,RouterLink,RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  showSideEvent = false;

  showSide(event: boolean) {
    if (this.showSideEvent) {
      this.showSideEvent = false;
    } else {
      this.showSideEvent = event;
    }
  }
}
