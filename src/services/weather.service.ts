import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class WeatherService {
  constructor(private http: HttpClient) {}


  getHttpRequest(cityName){
    return this.http.get('api.openweathermap.org/data/2.5/weather?q=' + cityName);
  }
}
