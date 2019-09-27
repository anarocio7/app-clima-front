import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()

export class WeatherService {
  cityName = '';
  constructor(private http: HttpClient) {}

  // This method calls the API indicated on Node Back-end

  getHttpRequest(cityName){
    return this.http.get('http://localhost:3000/weather/?city=' + cityName);
  }


}
