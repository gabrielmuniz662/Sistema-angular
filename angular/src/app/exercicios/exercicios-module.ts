import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciciosRoutingModule } from './exercicios-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';

@NgModule({
  imports: [CommonModule, ExerciciosRoutingModule, Exercicio1, Exercicio2],
})
export class ExerciciosModule {}
