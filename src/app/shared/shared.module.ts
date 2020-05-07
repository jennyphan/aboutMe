import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './directives/alert';

@NgModule({
    declarations: [AlertComponent],
    imports: [
        CommonModule
    ],
    exports: [AlertComponent],

})
export class SharedModule { }
