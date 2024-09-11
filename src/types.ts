export enum BoxType {
  Undefined = "Undefined",
  Text = "Text",
  Image = "Image",
  Weather = "Weather",
  Transport = "Transport",
  Countdown = "Countdown",
  Custom = "Custom",
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

export interface ICountdownBox {
  boxType: BoxType.Countdown;
  date: string;
  time: string;
  occasion?: string;
}

export interface ICustomBox {
  boxType: BoxType.Custom;
  source: string;
}

export type IBox =
  | IUndefinedBox
  | ITextBox
  | IImageBox
  | IWeatherBox
  | ITransportBox
  | ICountdownBox
  | ICustomBox;
