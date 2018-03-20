import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/index';
import { AuthGuard } from './shared/guards/index';
import { AboutComponent } from './about/about.component';
import { DanceComponent } from './dance/dance.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dance', component: DanceComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'work', component: WorkComponent },
    { path: 'contactList', component: ContactListComponent },
    { path: 'userList', component: UserListComponent },
    { path: 'myaccount', loadChildren: './myaccount/myaccount.module#MyAccountModule' }, // for lazy loading
    // otherwise redirect to home

    { path: '**', redirectTo: '' }

];

// export const routing = RouterModule.forRoot(appRoutes);
export const routing = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });
