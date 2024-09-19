import { useContext, useMemo, useState } from "react";
import { ImageBox } from "./ImageBox";
import { TextBox } from "./TextBox";
import { TransportBox } from "./TransportBox";
import { WeatherBox } from "./WeatherBox";
import { AppContext } from "../../App";
import { UndefinedBox } from "./UndefinedBox";
import { BoxType } from "../../types";
import { CustomBox } from "./CustomBox";
import { CountdownBox } from "./CountdownBox";
import { ClockBox } from "./ClockBox";
import { StreamBox } from "./StreamBox";
import {
  BoxContainerBox,
  BoxContainerButton,
} from "./common/BoxContainerButton";

export interface Coordinates {
  x: number;
  y: number;
}

export function getCoordinates(index: number, size: number) {
  return { x: index % size, y: Math.floor(index / size) };
}

export function getMinMaxCoordinates(a: Coordinates, b: Coordinates) {
  const minX = Math.min(a.x, b.x);
  const maxX = Math.max(a.x, b.x);
  const minY = Math.min(a.y, b.y);
  const maxY = Math.max(a.y, b.y);

  return { min: { x: minX, y: minY }, max: { x: maxX, y: maxY } };
}

function isInsideSelection(
  index: number,
  start: number,
  stop: number,
  size: number
) {
  const { x: indexX, y: indexY } = getCoordinates(index, size);
  const startCoord = getCoordinates(start, size);
  const stopCoord = getCoordinates(stop, size);
  const { min, max } = getMinMaxCoordinates(startCoord, stopCoord);

  return (
    indexX >= min.x && indexX <= max.x && indexY >= min.y && indexY <= max.y
  );
}

interface BoxContainerProps {
  cursorInWindow: boolean;
}

export const BOX_CONTAINER_WIDTH = 12;
export const BOX_CONTAINER_HEIGHT = 6;

export function BoxContainer({ cursorInWindow }: BoxContainerProps) {
  const { boxes, setBoxes } = useContext(AppContext);

  const containerBoxes = useMemo<BoxContainerBox[]>(
    () =>
      Array(BOX_CONTAINER_WIDTH * BOX_CONTAINER_HEIGHT)
        .fill({})
        .map((_, i) => ({
          index: i,
          occupied: boxes.some((box) =>
            isInsideSelection(i, box.start, box.end, BOX_CONTAINER_WIDTH)
          ),
        })),
    [boxes]
  );
  const [downBox, setDownBox] = useState<number | null>(null);
  const [currentBox, setCurrentBox] = useState<number | null>(null);

  function handleMouseDown(index: number) {
    setDownBox(index);
    setCurrentBox(index);
  }

  function handleMouseEnter(index: number) {
    setCurrentBox(index);
  }

  function handleMouseUp(index: number) {
    setDownBox(null);
    setCurrentBox(null);

    if (downBox !== null) {
      setBoxes((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          boxType: BoxType.Undefined,
          saved: false,
          start: downBox,
          end: index,
        },
      ]);
    }
  }

  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${BOX_CONTAINER_WIDTH}, minmax(0, 8rem))`,
        gridTemplateRows: `repeat(${BOX_CONTAINER_HEIGHT}, minmax(0, 8rem))`,
      }}
    >
      {cursorInWindow &&
        containerBoxes
          .filter((box) => !box.occupied)
          .map((box) => (
            <BoxContainerButton
              key={box.index}
              box={box}
              highlighted={
                downBox !== null && currentBox !== null
                  ? isInsideSelection(
                      box.index,
                      downBox,
                      currentBox,
                      BOX_CONTAINER_WIDTH
                    )
                  : false
              }
              onMouseDown={() => handleMouseDown(box.index)}
              onMouseUp={() => handleMouseUp(box.index)}
              onMouseEnter={() => handleMouseEnter(box.index)}
            />
          ))}
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
          case BoxType.Clock:
            return <ClockBox box={box} key={box.id} />;
          case BoxType.Stream:
            return <StreamBox box={box} key={box.id} />;
          case BoxType.Custom:
            return <CustomBox box={box} key={box.id} />;
        }
      })}
    </div>
  );
}
