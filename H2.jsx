import React from "react";

export default function H2({ children, className }) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}
