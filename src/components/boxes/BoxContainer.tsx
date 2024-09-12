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
import { AddBoxButton } from "../AddBoxButton";

interface BoxContainerProps {
  cursorInWindow: boolean;
}

export function BoxContainer({ cursorInWindow }: BoxContainerProps) {
  const { boxes } = useContext(AppContext);
  const boxLength = boxes.length + (cursorInWindow ? 1 : 0);

  return (
    <div
      className="w-full h-full grid grid-cols-4 gap-4"
      style={{
        gridTemplateColumns: `repeat(${Math.min(
          boxLength,
          4
        )}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${boxLength > 4 ? 2 : 1}, minmax(0, 1fr))`,
      }}
    >
      {boxes.map((box) => {
        switch (box.boxType) {
          case BoxType.Undefined:
            return <UndefinedBox box={box} key={box.id} />;
          case BoxType.Text:
            return <TextBox box={box} key={box.id} />;
          case BoxType.Image:
            return <ImageBox box={box} key={box.id} />;
          case BoxType.Weather:
            return <WeatherBox box={box} key={box.id} />;
          case BoxType.Transport:
            return <TransportBox box={box} key={box.id} />;
          case BoxType.Countdown:
            return <CountdownBox box={box} key={box.id} />;
          case BoxType.Custom:
            return <CustomBox box={box} key={box.id} />;
        }
      })}
      {cursorInWindow && boxes.length < 8 && <AddBoxButton />}
    </div>
  );
}
