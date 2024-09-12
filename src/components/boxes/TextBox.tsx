import { useContext, useState } from "react";
import { Box } from "./Box";
import { TextField } from "@mui/material";
import { BoxSettings } from "./common/BoxSettings";
import { AppContext } from "../../App";
import { ITextBox } from "../../types";

interface TextBoxProps {
  box: ITextBox;
}

export function TextBox({ box }: TextBoxProps) {
  const { setBoxes } = useContext(AppContext);
  const [showSettings, setShowSettings] = useState(!box.saved);

  return (
    <Box
      box={box}
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
                prev.map((b) =>
                  b.id === box.id ? { ...b, text: e.target.value } : b
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
