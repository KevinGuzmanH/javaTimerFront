import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {timer} from "rxjs";
import {TimerSService} from "./service/timer-s.service";
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TimerSService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
