import { BOX_CONTAINER_WIDTH, getCoordinates } from "../BoxContainer";

export interface BoxContainerBox {
  index: number;
  occupied: boolean;
}

interface BoxContainerButtonProps {
  box: BoxContainerBox;
  highlighted: boolean;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseEnter: () => void;
}

export function BoxContainerButton({
  box,
  highlighted,
  onMouseDown,
  onMouseUp,
  onMouseEnter,
}: BoxContainerButtonProps) {
  const { x, y } = getCoordinates(box.index, BOX_CONTAINER_WIDTH);

  return (
    <button
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      className={`border-8 border-gray-800 w-32 h-32 ${
        highlighted ? "bg-gray-700" : "bg-gray-900"
      }`}
      style={{
        gridColumn: x + 1,
        gridRow: y + 1,
      }}
    />
  );
}
