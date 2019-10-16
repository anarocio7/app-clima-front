import { Deserializable } from './deserializable.interface';

export class Weather implements Deserializable {
  public temp: number;
  public description: string;


  deserialize(input: any): this {
    return Object.assign(this, input);
  }

  setWeather(weather: Weather) {
    this.deserialize(weather);
  }

  capitalize(weather: Weather) {
    if (weather.description) {
      return this.description.charAt(0).toUpperCase() + this.description.slice(1);
    } else {
      return 'There is no information';
    }
  }
}
