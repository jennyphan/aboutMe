import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyAccountComponent } from './myaccount.component';
import { AuthGuard } from '../shared/guards/index';
import { AdminAccountComponent } from './admin-account/admin-account.component';
import { GeneralAccountComponent } from './general-account/general-account.component';
import { AccountHeaderComponent } from './shared/account-header/account-header.component';


@NgModule({
    imports: [CommonModule,
        RouterModule.forChild([
            {
                path: '', component: MyAccountComponent, canActivate: [AuthGuard], children: [
                    { path: 'general', component: GeneralAccountComponent },
                    { path: 'admin', component: AdminAccountComponent }
                ]
            }
        ])],
    declarations: [MyAccountComponent, AccountHeaderComponent, AdminAccountComponent, GeneralAccountComponent]
})

export class MyAccountModule {

}
