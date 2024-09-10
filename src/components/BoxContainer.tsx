import { useContext } from "react";
import { ImageBox } from "./ImageBox";
import { TextBox } from "./TextBox";
import { TransportBox } from "./TransportBox";
import { WeatherBox } from "./WeatherBox";
import { AppContext, BoxType } from "../App";
import { UndefinedBox } from "./UndefinedBox";

export function BoxContainer() {
  const { boxes } = useContext(AppContext);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {boxes.map((box, i) => {
        switch (box) {
          case BoxType.Undefined:
            return <UndefinedBox index={i} />;
          case BoxType.Text:
            return <TextBox index={i} />;
          case BoxType.Image:
            return <ImageBox index={i} />;
          case BoxType.Weather:
            return <WeatherBox index={i} />;
          case BoxType.Transport:
            return <TransportBox index={i} />;
        }
      })}
    </div>
  );
}
