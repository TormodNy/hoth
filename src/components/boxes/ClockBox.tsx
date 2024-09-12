import { useEffect, useState } from "react";
import { IClockBox } from "../../types";
import { Box } from "./Box";

interface ClockBoxProps {
  box: IClockBox;
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
        {clock.getHours()}:{clock.getMinutes()}
      </h1>
    </Box>
  );
}
