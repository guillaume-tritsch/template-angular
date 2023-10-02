import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [ReactiveFormsModule, FormsModule, BrowserModule, AppRoutingModule, InputTextModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
