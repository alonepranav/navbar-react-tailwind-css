import React from "react";
import Hero from "./Hero";

export default function About() {
  return (
    <>
      <Hero {...{ title: "Welcome to About Page" }} />
    </>
  );
}
