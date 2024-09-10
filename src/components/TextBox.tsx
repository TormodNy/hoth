import { useState } from "react";
import { Box } from "./Box";
import { TextField } from "@mui/material";
import { BoxSettings } from "./BoxSettings";

interface TextBoxProps {
  index: number;
}

export function TextBox({ index }: TextBoxProps) {
  const [showSettings, setShowSettings] = useState(true);
  const [text, setText] = useState("");

  return (
    <Box index={index} removable={!showSettings}>
      {showSettings ? (
        <BoxSettings header="Text box" setShowSettings={setShowSettings}>
          <TextField
            label="Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Insert text here"
            className="w-full"
          />
        </BoxSettings>
      ) : (
        <h1 className="text-6xl text-center">{text}</h1>
      )}
    </Box>
  );
}
