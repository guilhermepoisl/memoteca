import { RouterModule, RouterOutlet } from '@angular/router';
import { CriaPensamentosComponent } from './componentes/pensamentos/cria-pensamentos/cria-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [

  ],
  imports: [RouterModule,CriaPensamentosComponent,ListarPensamentoComponent,RouterOutlet],
  bootstrap: [],
})
export class AppModule {}
