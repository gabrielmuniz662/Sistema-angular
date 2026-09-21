import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio4',
  standalone: true,
  imports: [],
  templateUrl: './exercicio4.html',
  styleUrl: './exercicio4.scss'
})
export class Exercicio4 {
  formularioValido: boolean = false;

  alternarValidade() {
    this.formularioValido = !this.formularioValido;
  }
}