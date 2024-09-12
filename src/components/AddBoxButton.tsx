import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";
import { BoxType } from "../types";

export function AddBoxButton() {
  const { setBoxes } = useContext(AppContext);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Button
        onClick={() =>
          setBoxes((prev) => [
            ...prev,
            {
              id: crypto.randomUUID(),
              boxType: BoxType.Undefined,
              saved: false,
            },
          ])
        }
        variant="outlined"
        className="w-full max-h-full aspect-square"
      >
        <Add />
        Add box
      </Button>
    </div>
  );
}
