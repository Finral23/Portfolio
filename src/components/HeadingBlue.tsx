import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HeadingBlue = ({ children }: Props) => {
  return <p className="text-xs font-light text-blue-500 text ">{children}</p>;
};

export default HeadingBlue;
