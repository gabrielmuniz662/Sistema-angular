import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: true,
  imports: [],
  templateUrl: './exercicio6.html',
  styleUrl: './exercicio6.scss'
})
export class Exercicio6 {
  quantidade: number = 0;

  incrementar() {
    this.quantidade++;
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}