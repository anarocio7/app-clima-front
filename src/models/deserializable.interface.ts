// This interface will take care of mapping our data to our object.

export interface Deserializable {
  deserialize(input: any): this;
}
