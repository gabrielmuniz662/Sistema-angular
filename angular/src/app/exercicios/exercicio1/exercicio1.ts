import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [],
  templateUrl: './exercicio1.html',
  styleUrl: './exercicio1.scss'
})
export class Exercicio1 {
  nome: string = 'Carlos';
  idade: number = 25;
  curso: string = 'Sistemas de Informação';
}