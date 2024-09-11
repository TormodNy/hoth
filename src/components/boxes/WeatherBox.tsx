import { Box } from "./Box";

interface WeatherBoxProps {
  index: number;
}

export function WeatherBox({ index }: WeatherBoxProps) {
  return (
    <Box index={index} removable>
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
