import { useEffect, useState } from "react";
import { IClockBox } from "../../types";
import { Box } from "./Box";

interface ClockBoxProps {
  box: IClockBox;
}

function toDoubleDigitFormat(value: number) {
  return value.toString().padStart(2, "0");
}

export function ClockBox({ box }: ClockBoxProps) {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <Box box={box} removable>
      <h1 className="text-6xl">
        {toDoubleDigitFormat(clock.getHours())}:
        {toDoubleDigitFormat(clock.getMinutes())}
      </h1>
    </Box>
  );
}
