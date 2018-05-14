import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';


@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    ApiClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
