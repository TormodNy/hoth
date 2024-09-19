export enum BoxType {
  Undefined = "Undefined",
  Text = "Text",
  Image = "Image",
  Weather = "Weather",
  Transport = "Transport",
  Countdown = "Countdown",
  Clock = "Clock",
  Stream = "Stream",
  Custom = "Custom",
}

export interface IBaseBox {
  boxType: BoxType;
  id: string;
  saved: boolean;
  start: number;
  end: number;
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

export interface IClockBox extends IBaseBox {
  boxType: BoxType.Clock;
}

export interface IStreamBox extends IBaseBox {
  boxType: BoxType.Stream;
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
  | IClockBox
  | IStreamBox
  | ICustomBox;
