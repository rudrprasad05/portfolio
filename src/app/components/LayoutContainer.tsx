import React from "react";

interface props {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<props> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default LayoutContainer;
