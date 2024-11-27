// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cabecalho',
//   imports: [],
//   templateUrl: './cabecalho.component.html',
//   styleUrl: './cabecalho.component.css'
// })
// export class CabecalhoComponent {

// }



// código abaixo é da Alura
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
