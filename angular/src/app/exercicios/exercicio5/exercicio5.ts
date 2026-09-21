import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio5',
  standalone: true,
  imports: [],
  templateUrl: './exercicio5.html',
  styleUrl: './exercicio5.scss'
})
export class Exercicio5 {
  curtidas: number = 0;

  curtir() {
    this.curtidas++;
  }
}