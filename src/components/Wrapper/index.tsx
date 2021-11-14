import React from "react";
import "./Wrapper.scss";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default Wrapper;
