import { IStreamBox } from "../../types";
import { Box } from "./Box";

interface StreamBoxProps {
  box: IStreamBox;
}

export function StreamBox({ box }: StreamBoxProps) {
  return (
    <Box box={box} removable>
      <iframe
        src="https://www.nrk.no/video/embed/NRK1?autoplay=true"
        title="NRK1"
        className="w-full rounded-sm aspect-video"
        allow="autoplay"
        allowFullScreen
      />
    </Box>
  );
}
