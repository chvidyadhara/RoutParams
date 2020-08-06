import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServRoutParamsService } from './serv-rout-params.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [ServRoutParamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
