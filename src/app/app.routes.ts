import { RouterModule,Routes } from '@angular/router';
import { CriaPensamentosComponent } from './componentes/pensamentos/cria-pensamentos/cria-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  {path: '', redirectTo: 'listarPensamento', pathMatch: 'full'},
  {path: 'criaPensamento', component: CriaPensamentosComponent},
  {path: 'listarPensamento', component: ListarPensamentoComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppModule{}
