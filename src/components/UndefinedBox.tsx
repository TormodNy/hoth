import { useContext } from "react";
import { AppContext } from "../App";
import { Box } from "./Box";
import { Button } from "@mui/material";
import { DirectionsBus, Image, TextFields, WbSunny } from "@mui/icons-material";
import { BoxType } from "../types";

interface UndefinedBoxProps {
  index: number;
}

export function UndefinedBox({ index }: UndefinedBoxProps) {
  const { setBoxes } = useContext(AppContext);

  function setBoxType(boxType: BoxType) {
    setBoxes((prev) => prev.map((box, i) => (i === index ? boxType : box)));
  }

  return (
    <Box index={index} removable={false}>
      <div className="w-full h-full grid gap-2 grid-cols-2">
        <Button variant="outlined" onClick={() => setBoxType(BoxType.Text)}>
          <TextFields />
          Text box
        </Button>
        <Button variant="outlined" onClick={() => setBoxType(BoxType.Image)}>
          <Image />
          Image box
        </Button>
        <Button variant="outlined" onClick={() => setBoxType(BoxType.Weather)}>
          <WbSunny />
          Weather box
        </Button>
        <Button
          variant="outlined"
          onClick={() => setBoxType(BoxType.Transport)}
        >
          <DirectionsBus />
          Transport box
        </Button>
      </div>
    </Box>
  );
}
