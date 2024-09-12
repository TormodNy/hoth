import { useContext, useState } from "react";
import { Box } from "./Box";
import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { BoxSettings } from "./common/BoxSettings";
import { IImageBox } from "../../types";
import { AppContext } from "../../App";

interface ImageBoxProps {
  index: number;
  box: IImageBox;
}

export function ImageBox({ index, box }: ImageBoxProps) {
  const { setBoxes } = useContext(AppContext);
  const [showSettings, setShowSettings] = useState(true);

  return (
    <Box
      index={index}
      removable={!showSettings}
      onEdit={() => setShowSettings(true)}
    >
      {showSettings ? (
        <BoxSettings header="Image box" setShowSettings={setShowSettings}>
          <TextField
            label="Image URL"
            value={box.source}
            onChange={(e) =>
              setBoxes((prev) =>
                prev.map((b, i) =>
                  i === index ? { ...b, source: e.target.value } : b
                )
              )
            }
            placeholder="https://media1.tenor.com/m/3ydOlynD-2EAAAAC/dance-dance-boy.gif"
            className="w-full"
          />

          <ToggleButtonGroup
            exclusive
            value={box.fit}
            onChange={(_, value) =>
              setBoxes((prev) =>
                prev.map((b, i) => (i === index ? { ...b, fit: value } : b))
              )
            }
          >
            <ToggleButton value={true}>Fit</ToggleButton>
            <ToggleButton value={false}>Fill</ToggleButton>
          </ToggleButtonGroup>
        </BoxSettings>
      ) : (
        <img
          src={box.source}
          alt="Image uploaded by user"
          className={
            "rounded-sm h-full w-full " +
            (box.fit ? "object-contain" : "object-cover")
          }
        />
      )}
    </Box>
  );
}
