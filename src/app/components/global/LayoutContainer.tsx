import React from "react";

interface props {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<props> = ({ children }) => {
  return <div className="w-full flex overflow-scroll">{children}</div>;
};

export default LayoutContainer;
