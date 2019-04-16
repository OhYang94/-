import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginComponent } from './login/login.component';

import { appRoutes } from './app.routes';
import {BaseService  } from './utils/baseservice';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  // providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
