import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';
import { UserDataListComponent } from './user-data-list/user-data-list.component';
import { ServRoutParamsService } from '../serv-rout-params.service';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UserDataComponent, UserDataListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([{path:'userdata',component:UserDataComponent},
    {path:'userdatalist/:id',component:UserDataListComponent}])
  ],
  
  providers:[ServRoutParamsService]
})
export class UserModuModule { }
