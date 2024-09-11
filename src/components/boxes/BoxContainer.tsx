import { useContext } from "react";
import { ImageBox } from "./ImageBox";
import { TextBox } from "./TextBox";
import { TransportBox } from "./TransportBox";
import { WeatherBox } from "./WeatherBox";
import { AppContext } from "../../App";
import { UndefinedBox } from "./UndefinedBox";
import { BoxType } from "../../types";
import { CustomBox } from "./CustomBox";
import { CountdownBox } from "./CountdownBox";

export function BoxContainer() {
  const { boxes } = useContext(AppContext);

  return (
    <div
      className="w-full h-full grid grid-cols-4 gap-4"
      style={{
        gridTemplateColumns: `repeat(${Math.min(boxes.length, 4)}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${boxes.length > 4 ? 2 : 1}, minmax(0, 1fr))`
      }}
    >
      {boxes.map((box, i) => {
        switch (box.boxType) {
          case BoxType.Undefined:
            return <UndefinedBox index={i} key={box.id} />;
          case BoxType.Text:
            return <TextBox index={i} box={box} key={box.id} />;
          case BoxType.Image:
            return <ImageBox index={i} box={box} key={box.id} />;
          case BoxType.Weather:
            return <WeatherBox index={i} key={box.id} />;
          case BoxType.Transport:
            return <TransportBox index={i} key={box.id} />;
          case BoxType.Countdown:
            return <CountdownBox index={i} box={box} key={box.id} />;
          case BoxType.Custom:
            return <CustomBox index={i} box={box} key={box.id} />;
        }
      })}
    </div>
  );
}
