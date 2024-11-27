// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pensamento',
//   imports: [],
//   templateUrl: './pensamento.component.html',
//   styleUrl: './pensamento.component.css'
// })
// export class PensamentoComponent {

// }

//abaixo o código da alura

import { NgClass } from '@angular/common';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pensamento',
  imports: [NgClass],
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
