import React from "react";

interface props {
  children: React.ReactNode;
}

const FullWidthContainer: React.FC<props> = ({ children }) => {
  return <div className="w-full h-full grow">{children}</div>;
};

export default FullWidthContainer;
