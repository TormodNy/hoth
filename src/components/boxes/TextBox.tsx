import { useContext, useState } from "react";
import { Box } from "./Box";
import { TextField } from "@mui/material";
import { BoxSettings } from "./common/BoxSettings";
import { AppContext } from "../../App";
import { ITextBox } from "../../types";

interface TextBoxProps {
  index: number;
  box: ITextBox;
}

export function TextBox({ index, box }: TextBoxProps) {
  const { setBoxes } = useContext(AppContext);
  const [showSettings, setShowSettings] = useState(true);

  return (
    <Box
      index={index}
      removable={!showSettings}
      onEdit={() => setShowSettings(true)}
    >
      {showSettings ? (
        <BoxSettings header="Text box" setShowSettings={setShowSettings}>
          <TextField
            label="Text"
            value={box.text}
            onChange={(e) =>
              setBoxes((prev) =>
                prev.map((b, i) =>
                  i === index ? { ...b, text: e.target.value } : b
                )
              )
            }
            placeholder="Insert text here"
            className="w-full"
          />
        </BoxSettings>
      ) : (
        <h1 className="text-6xl text-center">{box.text}</h1>
      )}
    </Box>
  );
}
