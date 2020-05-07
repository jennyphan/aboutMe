import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DanceComponent } from './dance.component';


const routes: Routes = [
  {
    path: '',
    component: DanceComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanceRoutingModule { }
