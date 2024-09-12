import { IStreamBox } from "../../types";
import { Box } from "./Box";

interface StreamBoxProps {
  box: IStreamBox;
}

export function StreamBox({ box }: StreamBoxProps) {
  return (
    <Box box={box} removable>
      <div className="max-w-full h-full aspect-video flex items-center">
        <iframe
          src="https://www.nrk.no/video/embed/NRK1?autoplay=true"
          title="NRK1"
          className="w-full aspect-video rounded-sm"
          allow="autoplay"
          allowFullScreen
        />
      </div>
    </Box>
  );
}
