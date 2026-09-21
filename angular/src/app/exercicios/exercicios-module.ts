import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciciosRoutingModule } from './exercicios-routing-module';
import { Exercicio1Component } from './exercicio1/exercicio1.component';

@NgModule({
  declarations: [Exercicio1Component],
  imports: [CommonModule, ExerciciosRoutingModule],
})
export class ExerciciosModule {}
