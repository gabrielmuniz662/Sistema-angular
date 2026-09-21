import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciciosRoutingModule } from './exercicios-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { Exercicio2 } from './exercicio2/exercicio2';
import { Exercicio3 } from './exercicio3/exercicio3';
import { Exercicio4 } from './exercicio4/exercicio4';
import { Exercicio5 } from './exercicio5/exercicio5';

@NgModule({
  imports: [
    CommonModule,
    ExerciciosRoutingModule,
    Exercicio1,
    Exercicio2,
    Exercicio3,
    Exercicio4,
    Exercicio5
  ],
})
export class ExerciciosModule {}
