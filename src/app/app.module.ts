import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasPublicasComponent } from './components/listas/listas-publicas/listas-publicas.component';
import { ListasUsuarioComponent } from './components/listas/listas-usuario/listas-usuario.component';
import { RegistrarListaComponent } from './components/listas/registrar-lista/registrar-lista.component';
import { LoginUsuarioComponent } from './components/usuarios/login-usuario/login-usuario.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarUsuarioComponent } from './components/usuarios/registrar-usuario/registrar-usuario.component';
import { HttpErrorInterceptor } from "./core/http-error.interceptor";
import { RegistrarTarefaComponent } from './components/tarefas/registrar-tarefa/registrar-tarefa.component';
import { TarefasUsuarioComponent } from './components/tarefas/tarefas-usuario/tarefas-usuario.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { TarefasDoDiaComponent } from './components/tarefas/tarefas-do-dia/tarefas-do-dia.component';
import { RegistrarNotaComponent } from './components/notas/registrar-nota/registrar-nota.component';
import { NotasUsuarioComponent } from './components/notas/notas-usuario/notas-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarUsuarioComponent,
    LoginUsuarioComponent,
    MainPageComponent,
    NavbarComponent,
    RegistrarListaComponent,
    ListasPublicasComponent,
    ListasUsuarioComponent,
    RegistrarTarefaComponent,
    TarefasUsuarioComponent,
    TarefasDoDiaComponent,
    RegistrarNotaComponent,
    NotasUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-br'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
