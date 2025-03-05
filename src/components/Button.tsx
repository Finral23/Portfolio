import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="text-light px-6 py-3 font-medium rounded-full bg-gradient-to-r from-blue-900 to-blue-300 shadow-lg hover:from-blue-1100 hover:to-blue-400">
      {children}
    </button>
  );
};

export default Button;
