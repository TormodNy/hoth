import { useContext } from "react";
import { ImageBox } from "./ImageBox";
import { TextBox } from "./TextBox";
import { TransportBox } from "./TransportBox";
import { WeatherBox } from "./WeatherBox";
import { AppContext } from "../../App";
import { UndefinedBox } from "./UndefinedBox";
import { BoxType } from "../../types";
import { CustomBox } from "./CustomBox";

export function BoxContainer() {
  const { boxes } = useContext(AppContext);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {boxes.map((box, i) => {
        switch (box.boxType) {
          case BoxType.Undefined:
            return <UndefinedBox index={i} key={i} />;
          case BoxType.Text:
            return <TextBox index={i} box={box} key={i} />;
          case BoxType.Image:
            return <ImageBox index={i} box={box} key={i} />;
          case BoxType.Weather:
            return <WeatherBox index={i} key={i} />;
          case BoxType.Transport:
            return <TransportBox index={i} key={i} />;
          case BoxType.Custom:
            return <CustomBox index={i} box={box} key={i} />;
        }
      })}
    </div>
  );
}
