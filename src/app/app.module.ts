import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

import { SecondComponent } from './second/second.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
