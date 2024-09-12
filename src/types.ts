export enum BoxType {
  Undefined = "Undefined",
  Text = "Text",
  Image = "Image",
  Weather = "Weather",
  Transport = "Transport",
  Countdown = "Countdown",
  Custom = "Custom",
}

export interface IBaseBox {
  boxType: BoxType;
  id: string;
  saved: boolean;
}

export interface IUndefinedBox extends IBaseBox {
  boxType: BoxType.Undefined;
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

export interface ICountdownBox extends IBaseBox {
  boxType: BoxType.Countdown;
  date: string;
  time: string;
  occasion?: string;
}

export interface ICustomBox extends IBaseBox {
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
