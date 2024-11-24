import React from "react";

interface props {
  children: React.ReactNode;
}

const PaddedContainer: React.FC<props> = ({ children }) => {
  return <div className="w-full overflow-auto px-24 py-16">{children}</div>;
};

export default PaddedContainer;
