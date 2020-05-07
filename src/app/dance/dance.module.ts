import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DanceRoutingModule } from './dance-routing.module';
import { DanceComponent } from './dance.component';



@NgModule({
  declarations: [DanceComponent],
  imports: [
    CommonModule,
    DanceRoutingModule,
    SharedModule
  ]
})
export class DanceModule { }
