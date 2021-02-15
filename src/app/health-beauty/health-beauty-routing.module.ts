import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthBeautyComponent } from './health-beauty.component';



const routes: Routes = [
  {
    path: '',
    component: HealthBeautyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthBeautyRoutingModule { }
