import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/index';
import { AuthGuard } from './shared/guards/index';




const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent},
    { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyAccountModule' }, // for lazy loading
    // otherwise redirect to home

    { path: '**', redirectTo: '' }

];

// export const routing = RouterModule.forRoot(appRoutes);
export const routing = RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules});
