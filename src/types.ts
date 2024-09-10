export enum BoxType {
  Undefined = "Undefined",
  Text = "Text",
  Image = "Image",
  Weather = "Weather",
  Transport = "Transport",
}

export interface IBaseBox {
  boxType: BoxType;
}

export interface ITextBox extends IBaseBox {
  boxType: BoxType.Text;
  text: string;
}

export interface IImageBox extends IBaseBox {
  boxType: BoxType.Image;
  source: string;
  fit: boolean;
}

export interface IWeatherBox extends IBaseBox {
  boxType: BoxType.Weather;
}

export interface ITransportBox extends IBaseBox {
  boxType: BoxType.Transport;
}

export type IBox = IBaseBox | ITextBox | IImageBox | IWeatherBox | ITransportBox;
