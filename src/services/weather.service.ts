import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Weather } from 'src/models/weather.model';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()

export class WeatherService {
  cityName = '';
  constructor(private http: HttpClient) {}

  // This method calls the API indicated on Node Back-end

  getHttpRequest(cityName){
    return this.http.get('http://localhost:3000/weather/?city=' + cityName);
  }

public getWeather(cityName: String){
    return this.http.get<Weather>('http://localhost:3000/weather/?city=' + cityName)
           .pipe(
             map(data => new Weather().deserialize(data)),
             catchError(() => throwError('City not Found'))
           );
  }


}
