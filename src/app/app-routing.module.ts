import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'admin',
    // canActivate: [AuthGuard],
    loadChildren: () => 
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path: 'user',
    // canActivate: [AuthGuard],
    loadChildren: () => 
    import('./modules/user/user.module').then((m) => m.UserModule),
  },

    {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
