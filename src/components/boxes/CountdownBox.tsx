import { useContext, useState } from "react";
import { Box } from "./Box";
import { BoxSettings } from "./common/BoxSettings";
import { ICountdownBox } from "../../types";
import { AppContext } from "../../App";
import { Countdown } from "./common/Countdown";
import { TextField } from "@mui/material";

interface CountdownBoxProps {
  box: ICountdownBox;
}

export function CountdownBox({ box }: CountdownBoxProps) {
  const { setBoxes } = useContext(AppContext);
  const [showSettings, setShowSettings] = useState(!box.saved);

  return (
    <Box
      box={box}
      removable={!showSettings}
      onEdit={() => setShowSettings(true)}
    >
      {showSettings ? (
        <BoxSettings header="Countdown box" setShowSettings={setShowSettings}>
          <div className="w-full flex gap-2">
            <input
              type="date"
              value={box.date}
              onChange={(e) =>
                setBoxes((prev) =>
                  prev.map((b) =>
                    b.id === box.id ? { ...b, date: e.target.value } : b
                  )
                )
              }
              className="w-[calc(100%-78px)] bg-transparent border rounded-[4px] border-opacity-[0.23] hover:border-opacity-100 border-white py-2 px-[14px]"
            />
            <TextField
              value={box.time}
              onChange={(e) =>
                setBoxes((prev) =>
                  prev.map((b) =>
                    b.id === box.id ? { ...b, time: e.target.value } : b
                  )
                )
              }
              placeholder="00:00"
              className="w-[70px]"
            />
          </div>
          <TextField
            label="Occasion (optional)"
            value={box.occasion ?? ""}
            onChange={(e) =>
              setBoxes((prev) =>
                prev.map((b) =>
                  b.id === box.id ? { ...b, occasion: e.target.value } : b
                )
              )
            }
            placeholder="Lunchtime"
            className="w-full"
          />
        </BoxSettings>
      ) : (
        <Countdown
          date={box.date}
          time={box.time || "00:00"}
          occasion={box.occasion}
        />
      )}
    </Box>
  );
}
