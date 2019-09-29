import { Component } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-info',
  templateUrl: '../home-info/home-info.component.html'
})

export class HomeInfoComponent {
  welcome = 'Stranger';
  formInput = new FormGroup({
    cityName: new FormControl('', Validators.required)
  });

  weather = '';


  constructor(private weatherService: WeatherService){}

  search() {
    const form = this.formInput.value;
    if (!form) {
      return 'Please input value';
    } else {
      this.weatherService.getHttpRequest(form.cityName).subscribe((res: any) => {
        this.weather = res.weather;
      });
    }

  }

  showWeather() {
    const form = this.formInput.value;
    if (!form) {
      return 'Please input value';
    }
    else {
      this.weatherService.getWeather(form.cityName).subscribe((res: any) => {
        this.weather = res.weather;
      })
    }
  }
}
