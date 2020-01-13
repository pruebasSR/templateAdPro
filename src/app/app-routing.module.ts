import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PruebaComponent } from './components/prueba/prueba.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'prueba', component: PruebaComponent },
  // { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
