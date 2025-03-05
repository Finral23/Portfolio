import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonOutline = ({ children }: Props) => {
  return (
    <button className="mt-6 px-6 py-3 rounded-full border-2 border-blue-500 hover:bg-slate-800 transition">
      {children}
    </button>
  );
};

export default ButtonOutline;
