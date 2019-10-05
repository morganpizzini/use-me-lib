import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PotaraModule } from 'potara-lib';
import { TableManagementModule } from 'potara-lib/table-management';
import { TemplateHolderModule } from 'potara-lib/template-holder';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PotaraModule.forRoot({ noGoBackRoutes: ['test'] }),
    TableManagementModule,
    TemplateHolderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
