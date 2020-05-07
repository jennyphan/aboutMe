import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dance', loadChildren: () => import('./dance/dance.module').then(m => m.DanceModule) },
    { path: 'home', component: HomeComponent },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    { path: 'work', loadChildren: () => import('./work/work.module').then(m => m.WorkModule) },
    { path: 'contactList', loadChildren: () => import('./contact-list/contact-list.module').then(m => m.ContactListModule) },
    { path: 'userList', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule) },
    { path: 'myaccount', loadChildren: () => import('./myaccount/myaccount.module').then(m => m.MyAccountModule) }, // for lazy loading
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

// export const routing = RouterModule.forRoot(appRoutes);
export const routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });
