import { Component } from '@angular/core';
import { WeatherService } from 'src/services/weather.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Weather } from 'src/models/weather.model';

@Component({
  selector: 'app-home-info',
  templateUrl: '../home-info/home-info.component.html'
})

export class HomeInfoComponent {
  welcome = 'Stranger';
  formInput = new FormGroup({
    cityName: new FormControl('', Validators.required)
  });


public weather: Weather;

constructor(private weatherService: WeatherService) {}

// tslint:disable-next-line:use-lifecycle-interface
ngOnInit() {
  this.weather = new Weather();
}

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
    if (form.cityName) {
      this.weatherService.getWeather(form.cityName).subscribe(resp => {
        this.weather.setWeather(resp);
        console.log(resp);
      });
    } else {
      return 'There is no information';
    }
}



}

