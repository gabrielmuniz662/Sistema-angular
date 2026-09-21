import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercicio7',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercicio7.html',
  styleUrl: './exercicio7.scss'
})
export class Exercicio7 {
  nome: string = '';
}