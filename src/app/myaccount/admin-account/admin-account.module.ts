import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminAccountComponent } from './admin-account.component';




@NgModule({
    imports: [CommonModule,
        RouterModule.forRoot([
            { path: 'admin', component: AdminAccountComponent }
        ])],
    declarations: [AdminAccountComponent]
})

export class AdminAccountModule {

}
