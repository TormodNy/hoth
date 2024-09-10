import { Button } from "@mui/material";
import { ReactNode } from "react";

interface BoxSettings {
  header: string;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export function BoxSettings({
  header,
  setShowSettings,
  children,
}: BoxSettings) {
  return (
    <div className="w-full flex flex-col justify-center gap-4 items-center">
      <h1 className="text-3xl">{header}</h1>

      {children}

      <Button variant="outlined" onClick={() => setShowSettings(false)}>
        Show box
      </Button>
    </div>
  );
}
