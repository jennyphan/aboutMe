import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GeneralAccountComponent } from './general-account.component';



@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot([
            { path: 'general', component: GeneralAccountComponent }
        ])],
    declarations: [GeneralAccountComponent]
})

export class GeneralAccountModule {

}
