import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio2',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './exercicio2.html',
  styleUrl: './exercicio2.scss'
})
export class Exercicio2 {
  produto : string = 'Teclado';
  preco : number = 150;
  quantidade : number = 3;
}