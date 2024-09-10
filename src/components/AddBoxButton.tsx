import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";
import { BoxType } from "../types";

export function AddBoxButton() {
  const { setBoxes } = useContext(AppContext);

  return (
    <Button
      onClick={() => setBoxes((prev) => [...prev, BoxType.Undefined])}
      variant="outlined"
    >
      <Add />
      Add box
    </Button>
  );
}
