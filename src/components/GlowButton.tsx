import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GlowButton = ({ children }: Props) => {
  return (
    <motion.a
      href="#"
      className="relative inline-flex items-center gap-2 px-6 py-3 
                 text-light text-lg font-medium 
                 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-300 
                //  hover:from-blue-1100 hover:to-blue-400
                 shadow-[0px_0px_20px_rgba(59,130,246,0.6)] transition-all"
      whileHover={{
        boxShadow: "0px 0px 30px rgba(59,130,246,0.9)",
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.a>
  );
};

export default GlowButton;
