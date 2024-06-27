import React from "react";

export default function TitlePage({ children }) {
  return (
    <h1 className="lg:text-4xl text-2xl font-semibold pb-3 mb-3 w-auto">
      {children}
    </h1>
  );
}
