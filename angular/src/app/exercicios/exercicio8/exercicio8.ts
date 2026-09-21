import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio8',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './exercicio8.html',
  styleUrl: './exercicio8.scss'
})
export class Exercicio8 {
  produto: string = '';
  preco: number = 0;
  quantidade: number = 0;

  get total(): number {
    return (this.preco || 0) * (this.quantidade || 0);
  }
}