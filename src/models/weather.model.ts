import { Deserializable } from './deserializable.interface';

export class Weather implements Deserializable {
  public main: String;
  public description: String;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
