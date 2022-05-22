import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksModule } from './books/books.module';
import { HomeComponent } from './public-components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,

    HowItWorksComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BooksModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
