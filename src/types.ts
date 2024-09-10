export enum BoxType {
  Undefined = "Undefined",
  Text = "Text",
  Image = "Image",
  Weather = "Weather",
  Transport = "Transport",
}

export interface IUndefinedBox {
  boxType: BoxType.Undefined;
}

export interface ITextBox {
  boxType: BoxType.Text;
  text: string;
}

export interface IImageBox {
  boxType: BoxType.Image;
  source: string;
  fit: boolean;
}

export interface IWeatherBox {
  boxType: BoxType.Weather;
}

export interface ITransportBox {
  boxType: BoxType.Transport;
}

export type IBox = IUndefinedBox | ITextBox | IImageBox | IWeatherBox | ITransportBox;
