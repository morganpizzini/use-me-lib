import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PotaraModule } from 'projects/potara-lib/src/public_api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PotaraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
