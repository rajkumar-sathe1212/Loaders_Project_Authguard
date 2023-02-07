import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent,pathMatch:"full"},
  {
    path:"admins",canActivate:[AuthGuard],loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
