import { TextField } from "@mui/material";
import { ICustomBox } from "../../types";
import { Box } from "./Box";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { BoxSettings } from "./common/BoxSettings";

interface CustomBoxProps {
  index: number;
  box: ICustomBox;
}

export function CustomBox({ index, box }: CustomBoxProps) {
  const { setBoxes } = useContext(AppContext);
  const [showSettings, setShowSettings] = useState(true);

  return (
    <Box
      index={index}
      removable={!showSettings}
      onEdit={() => setShowSettings(true)}
    >
      {showSettings ? (
        <BoxSettings header="Custom box" setShowSettings={setShowSettings}>
          <TextField
            label="Source URL"
            value={box.source}
            onChange={(e) =>
              setBoxes((prev) =>
                prev.map((b, i) =>
                  i === index ? { ...b, source: e.target.value } : b
                )
              )
            }
            placeholder="https://www.yr.no/en/content/1-72837/card.html?mode=dark"
            className="w-full"
          />
        </BoxSettings>
      ) : (
        <iframe
          src={box.source}
          title="Custom user content"
          className="w-full h-full rounded-sm scale"
        />
      )}
    </Box>
  );
}
