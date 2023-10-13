import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrarUsuarioComponent } from './components/usuarios/registrar-usuario/registrar-usuario.component';
import { LoginUsuarioComponent } from './components/usuarios/login-usuario/login-usuario.component';
import { RegistrarListaComponent } from './components/listas/registrar-lista/registrar-lista.component';
import { ListasPublicasComponent } from './components/listas/listas-publicas/listas-publicas.component';
import { ListasUsuarioComponent } from './components/listas/listas-usuario/listas-usuario.component';

const routes: Routes = [
  {path:"",component:MainPageComponent},
  {path:"conta/registro",component: RegistrarUsuarioComponent},
  {path:"conta/login",component:LoginUsuarioComponent},
  {path:"lista/registro",component:RegistrarListaComponent},
  {path:"lista/buscar/publicas",component:ListasPublicasComponent},
  {path:"lista/todas",component:ListasUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
