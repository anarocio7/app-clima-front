import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeInfoComponent } from 'src/components/home-info/home-info.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { CardInfoComponent } from 'src/components/card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInfoComponent,
    HeaderComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
