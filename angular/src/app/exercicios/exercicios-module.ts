import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciciosRoutingModule } from './exercicios-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';

@NgModule({
  imports: [CommonModule, ExerciciosRoutingModule, Exercicio1, Exercicio2, Exercicio3],
})
export class ExerciciosModule {}
