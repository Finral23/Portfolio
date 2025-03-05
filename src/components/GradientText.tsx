import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GradientText = ({ children }: Props) => {
  return (
    <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default GradientText;
