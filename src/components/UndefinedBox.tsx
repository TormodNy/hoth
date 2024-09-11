import { useContext } from "react";
import { AppContext } from "../App";
import { Box } from "./Box";
import { Button } from "@mui/material";
import {
  Code,
  DirectionsBus,
  Image,
  TextFields,
  WbSunny,
} from "@mui/icons-material";
import { BoxType, ICustomBox, IImageBox, ITextBox } from "../types";

interface UndefinedBoxProps {
  index: number;
}

function boxDefaultValue(boxType: BoxType) {
  switch (boxType) {
    case BoxType.Text:
      return { boxType, text: "" } as ITextBox;
    case BoxType.Image:
      return { boxType, source: "", fit: true } as IImageBox;
    case BoxType.Custom:
      return { boxType, source: "" } as ICustomBox;
    default:
      return { boxType };
  }
}

export function UndefinedBox({ index }: UndefinedBoxProps) {
  const { setBoxes } = useContext(AppContext);

  function setBoxType(boxType: BoxType) {
    setBoxes((prev) =>
      prev.map((box, i) => (i === index ? boxDefaultValue(boxType) : box))
    );
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
        <Button variant="outlined" onClick={() => setBoxType(BoxType.Custom)}>
          <Code />
          Custom box
        </Button>
      </div>
    </Box>
  );
}
