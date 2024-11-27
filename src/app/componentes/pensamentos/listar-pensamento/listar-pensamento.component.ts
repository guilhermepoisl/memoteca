// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-listar-pensamento',
//   imports: [],
//   templateUrl: './listar-pensamento.component.html',
//   styleUrl: './listar-pensamento.component.css'
// })
// export class ListarPensamentoComponent {

// }

//Abaixo o código da Alura

import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { Pensamento } from '../pensamento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
  imports: [PensamentoComponent,CommonModule]
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }
}
