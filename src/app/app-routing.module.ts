import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserModuModule } from './user-modu/user-modu.module';


const routes: Routes = [{path:'',loadChildren:()=>import('../app/user-modu/user-modu.module').then(m=>m.UserModuModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
