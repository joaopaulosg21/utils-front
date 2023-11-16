import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RegistrarUsuarioComponent } from './components/usuarios/registrar-usuario/registrar-usuario.component';
import { LoginUsuarioComponent } from './components/usuarios/login-usuario/login-usuario.component';
import { RegistrarListaComponent } from './components/listas/registrar-lista/registrar-lista.component';
import { ListasPublicasComponent } from './components/listas/listas-publicas/listas-publicas.component';
import { ListasUsuarioComponent } from './components/listas/listas-usuario/listas-usuario.component';
import { RegistrarTarefaComponent } from './components/tarefas/registrar-tarefa/registrar-tarefa.component';
import { TarefasUsuarioComponent } from './components/tarefas/tarefas-usuario/tarefas-usuario.component';
import { TarefasDoDiaComponent } from './components/tarefas/tarefas-do-dia/tarefas-do-dia.component';

const routes: Routes = [
  {path:"",component:MainPageComponent},
  {path:"conta/registro",component: RegistrarUsuarioComponent},
  {path:"conta/login",component:LoginUsuarioComponent},
  {path:"lista/registro",component:RegistrarListaComponent},
  {path:"lista/buscar/publicas",component:ListasPublicasComponent},
  {path:"lista/todas",component:ListasUsuarioComponent},
  {path:"tarefa/registro",component:RegistrarTarefaComponent},
  {path:"tarefa/todas",component:TarefasUsuarioComponent},
  {path:"tarefa/dia",component:TarefasDoDiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
