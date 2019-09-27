import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeInfoComponent } from 'src/components/home-info/home-info.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { CardInfoComponent } from 'src/components/card-info/card-info.component';

import { WeatherService } from 'src/services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeInfoComponent,
    HeaderComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
