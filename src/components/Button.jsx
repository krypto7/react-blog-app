import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className,
  ...props
}) {
  return (
    <button className={`${className} ${textColor} ${bgColor} px-4 py-2 rounded-lg`}{...props}>{children}</button>
  );
}

export default Button;
