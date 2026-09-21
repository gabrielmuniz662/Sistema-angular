import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exercicio10',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './exercicio10.html',
  styleUrl: './exercicio10.scss'
})
export class Exercicio10 {
  usuario: string = '';
  senha:  string = '';
  mensagemBoasVindas: string = '';
  usuarioLogado: string = '';

  entrar() {
    if (this.usuario.trim() && this.senha.trim()) {
      this.usuarioLogado = this.usuario;
      this.mensagemBoasVindas = `Bem-vindo, ${this.usuario}!`;
    }
  }

  get camposPreenchidos(): boolean {
    return this.usuario.trim().length > 0 && this.senha.trim().length > 0;
  }
}