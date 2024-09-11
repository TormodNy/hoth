import { ReactNode, useContext } from "react";
import { AppContext } from "../../App";
import { Delete } from "@mui/icons-material";

interface BoxProps {
  index: number;
  removable: boolean;
  children: ReactNode;
}

export function Box({ index, children, removable }: BoxProps) {
  const { setBoxes } = useContext(AppContext);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-h-full bg-gray-900 aspect-square p-4 rounded-sm flex flex-col items-center justify-center shadow-md shadow-black relative">
        {children}
        {removable && (
          <button
            className="absolute top-0 left-0 w-full h-full bg-[rgba(3,7,18,0.75)] hover:opacity-100 text-3xl opacity-0 transition-opacity flex justify-center items-center gap-2"
            onClick={() =>
              setBoxes((prev) => prev.filter((_, i) => i !== index))
            }
          >
            <Delete fontSize="large" />
            Remove box
          </button>
        )}
      </div>
    </div>
  );
}
