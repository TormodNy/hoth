import { ReactNode, useContext } from "react";
import { AppContext } from "../../App";
import { Delete, Edit } from "@mui/icons-material";
import { BoxOverlayButton } from "./common/BoxOverlayButton";

interface BoxProps {
  index: number;
  removable: boolean;
  onEdit?: () => void;
  children: ReactNode;
}

export function Box({ index, children, removable, onEdit }: BoxProps) {
  const { setBoxes } = useContext(AppContext);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full max-h-full bg-gray-900 aspect-square p-4 rounded-sm flex flex-col items-center justify-center shadow-md shadow-black relative">
        {children}
        {removable && (
          <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 transition-opacity flex flex-col">
            {onEdit && (
              <BoxOverlayButton
                hoverColor="hover:bg-green-950"
                onClick={onEdit}
              >
                <Edit fontSize="large" />
                Edit
              </BoxOverlayButton>
            )}
            <BoxOverlayButton
              hoverColor="hover:bg-red-950"
              onClick={() =>
                setBoxes((prev) => prev.filter((_, i) => i !== index))
              }
            >
              <Delete fontSize="large" />
              Remove
            </BoxOverlayButton>
          </div>
        )}
      </div>
    </div>
  );
}
