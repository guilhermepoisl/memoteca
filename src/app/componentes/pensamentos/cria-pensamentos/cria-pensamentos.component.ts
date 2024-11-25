import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cria-pensamentos',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './cria-pensamentos.component.html',
  styleUrl: './cria-pensamentos.component.css'
})
export class CriaPensamentosComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }
  criaPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelar() {
    alert("Ação cancelada!")
  }
}
