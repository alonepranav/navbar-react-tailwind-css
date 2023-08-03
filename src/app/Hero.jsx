import React from "react";

export default function Hero({ title }) {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <h3 className="text-2xl md:text-3xl">{title}</h3>
      </div>
    </>
  );
}
