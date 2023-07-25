import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<IProps> = ({ children, className }) => {
  return (
    <div className={`flex max-w-7xl w-full mx-auto p-5 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
