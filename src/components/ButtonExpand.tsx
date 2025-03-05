import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonExpand = ({ children }: Props) => {
  return (
    <button className="w-10 h-10 flex justify-center text-blue-500 rounded-full border-2 border-blue-500 hover:bg-slate-800 transition">
      {children}
    </button>
  );
};

export default ButtonExpand;
