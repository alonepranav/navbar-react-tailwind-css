import React from "react";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero {...{ title: "Welcome to Home Page" }} />
    </>
  );
}
