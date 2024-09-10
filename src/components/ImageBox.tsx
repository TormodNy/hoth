import { useState } from "react";
import { Box } from "./Box";
import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { BoxSettings } from "./BoxSettings";

interface ImageBoxProps {
  index: number;
}

export function ImageBox({ index }: ImageBoxProps) {
  const [showSettings, setShowSettings] = useState(true);
  const [source, setSource] = useState("");
  const [fit, setFit] = useState(true);

  return (
    <Box index={index} removable={!showSettings}>
      {showSettings ? (
        <BoxSettings header="Image box" setShowSettings={setShowSettings}>
          <TextField
            label="Image URL"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="https://media1.tenor.com/m/3ydOlynD-2EAAAAC/dance-dance-boy.gif"
            className="w-full"
          />

          <ToggleButtonGroup
            exclusive
            value={fit}
            onChange={(_, value) => setFit(value)}
          >
            <ToggleButton value={true}>Fit</ToggleButton>
            <ToggleButton value={false}>Fill</ToggleButton>
          </ToggleButtonGroup>
        </BoxSettings>
      ) : (
        <img
          src={source}
          alt="Image uploaded by user"
          className={
            "rounded-sm h-full w-full " +
            (fit ? "object-contain" : "object-cover")
          }
        />
      )}
    </Box>
  );
}
