import clsx from "clsx";
import React from "react";

interface props {
  children: React.ReactNode;
  className?: string;
}

const PaddedContainer: React.FC<props> = ({ children, className }) => {
  return (
    <div className={clsx("w-full overflow-auto px-24 py-16", className)}>
      {children}
    </div>
  );
};

export default PaddedContainer;
