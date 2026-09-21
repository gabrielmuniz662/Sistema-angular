import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio9',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercicio9.html',
  styleUrl: './exercicio9.scss'
})
export class Exercicio9 {
  produto: string = 'Celular';
  estoque: number = 5;

  incrementar() {
    this.estoque++;
  }

  decrementar() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }
}