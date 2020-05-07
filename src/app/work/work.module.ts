import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';



@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    SharedModule
  ]
})
export class WorkModule { }
