import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HealthBeautyRoutingModule } from './health-beauty-routing.module';
import { HealthBeautyComponent } from './health-beauty.component';

@NgModule({
  declarations: [HealthBeautyComponent],
  imports: [
  CommonModule,
    HealthBeautyRoutingModule,
    SharedModule
  ]
})
export class HealthBeautyModule { }
