import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [FormsModule, ListarPensamentoComponent,
    CriarPensamentoComponent,PensamentoComponent,
    BrowserModule,AppComponent,CabecalhoComponent,
    RodapeComponent, ExcluirPensamentoComponent,
    EditarPensamentoComponent,AppRoutingModule],
  providers: [HttpClient],
  bootstrap: []
})
export class AppModule { }
