import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  standalone: true,
  imports: [],
  templateUrl: './exercicio1.component.html',
  styleUrl: './exercicio1.component.scss'
})
export class Exercicio1Component {
  nome: string = 'Carlos';
  idade: number = 25;
  curso: string = 'Sistemas de Informação';
}