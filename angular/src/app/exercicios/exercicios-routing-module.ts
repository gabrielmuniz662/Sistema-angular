import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercicio1Component } from './exercicio1/exercicio1.component';

const routes: Routes = [
  { path: 'exercicio1', component: Exercicio1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciciosRoutingModule {}
