import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';

const routes: Routes = [
  {path:"",component:MainPageComponent},
  {path:"conta/registro",component: RegistrarUsuarioComponent},
  {path:"conta/login",component:LoginUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
