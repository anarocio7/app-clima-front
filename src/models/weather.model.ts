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
}
