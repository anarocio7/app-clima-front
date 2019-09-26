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

  weather = ''


  constructor(private weatherService: WeatherService){}

  search() {
    let form = this.formInput.value;
    this.weatherService.getHttpRequest(form.cityName).subscribe((res: any) => {
      this.weather = res.weather;
    })
  }
}
