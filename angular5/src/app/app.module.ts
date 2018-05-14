import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Load the Itext component
import { ITextComponent } from './itext.component';

import { Service } from './service';

@NgModule({
  declarations: [
    AppComponent,
	// IText component
    ITextComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	// Client module
	HttpClientModule
  ],
  providers: [HttpClient, Service],
  bootstrap: [AppComponent]
})
export class AppModule { }


