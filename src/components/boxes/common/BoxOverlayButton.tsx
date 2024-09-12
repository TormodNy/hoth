import { ReactNode } from "react";

interface BoxOverlayButton {
  onClick: () => void;
  hoverColor: `hover:${string}`;
  children: ReactNode;
}

export function BoxOverlayButton({
  onClick,
  hoverColor,
  children,
}: BoxOverlayButton) {
  return (
    <button
      className={`w-full h-full flex justify-center items-center gap-2 text-3xl bg-gray-950 bg-opacity-75 hover:bg-opacity-75 ${hoverColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
