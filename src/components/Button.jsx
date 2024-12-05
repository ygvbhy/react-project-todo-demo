import React from "react";

// Button 재사용 컴포넌트
const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    >
      {children}
    </button>
  );
};

export default Button;
