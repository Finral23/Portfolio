import { ReactNode } from "react";

interface Props {
  onExpandItem: () => void;
  children: ReactNode;
}

const ButtonExpand = ({ onExpandItem, children }: Props) => {
  return (
    <button
      onClick={onExpandItem}
      className="
    w-10 h-10 flex justify-center text-blue-500 rounded-full border border-blue-500 hover:bg-slate-800 transition"
    >
      {children}
    </button>
  );
};

export default ButtonExpand;
