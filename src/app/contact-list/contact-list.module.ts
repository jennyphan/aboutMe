import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactListRoutingModule } from './contact-list-routing.module';
import { ContactListComponent } from './contact-list.component';



@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    ContactListRoutingModule,
    SharedModule
  ]
})
export class ContactListModule { }
