import { ReactNode, useContext, useState } from "react";
import { AppContext } from "../../App";
import { Delete, Edit } from "@mui/icons-material";
import { BoxOverlayButton } from "./common/BoxOverlayButton";
import { IBaseBox } from "../../types";
import {
  BOX_CONTAINER_WIDTH,
  getCoordinates,
  getMinMaxCoordinates,
} from "./BoxContainer";

interface BoxProps {
  box: IBaseBox;
  removable: boolean;
  onEdit?: () => void;
  children: ReactNode;
}

export function Box({ box, children, removable, onEdit }: BoxProps) {
  const { setBoxes } = useContext(AppContext);
  const [editing, setEditing] = useState(!box.saved || !removable);
  const start = getCoordinates(box.start, BOX_CONTAINER_WIDTH);
  const end = getCoordinates(box.end, BOX_CONTAINER_WIDTH);
  const { min, max } = getMinMaxCoordinates(start, end);

  function handleEdit() {
    setEditing(true);
    if (onEdit) {
      onEdit();
    }
  }

  return (
    <div
      className="w-full h-full bg-gray-900 p-4 rounded-sm flex flex-col items-center justify-center shadow-md shadow-black relative"
      style={{
        gridColumnStart: min.x + 1,
        gridColumnEnd: max.x + 2,
        gridRowStart: min.y + 1,
        gridRowEnd: max.y + 2,
      }}
      onMouseLeave={() => removable && setEditing(false)}
    >
      {children}
      {removable && !editing && (
        <div className="absolute top-0 left-0 w-full h-full hover:opacity-100 opacity-0 transition-opacity flex flex-col">
          <BoxOverlayButton hoverColor="hover:bg-blue-950" onClick={handleEdit}>
            <Edit fontSize="large" />
            Edit
          </BoxOverlayButton>
          <BoxOverlayButton
            hoverColor="hover:bg-red-950"
            onClick={() =>
              setBoxes((prev) => prev.filter((b) => b.id !== box.id))
            }
          >
            <Delete fontSize="large" />
            Remove
          </BoxOverlayButton>
        </div>
      )}
    </div>
  );
}
