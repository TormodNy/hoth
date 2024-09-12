import { IWeatherBox } from "../../types";
import { Box } from "./Box";

interface WeatherBoxProps {
  box: IWeatherBox;
}

export function WeatherBox({ box }: WeatherBoxProps) {
  return (
    <Box box={box} removable>
      <iframe
        src="https://www.yr.no/en/content/1-72837/card.html?mode=dark"
        title="Weather forecast for Oslo"
        width="100%"
        height="100%"
        className="rounded-sm"
      />
    </Box>
  );
}
