import React from "react";
import Hero from "./components/Hero";
import SeenOn from "./components/SeenOn";

export const metadata = {
  title: "OSO Search",
  description: "Uncensored AI Search connected to the internet. ",
  keywords: "AI Search Uncensored AI, Unbiased AI, OSO Search, up to date AI",
};

export default function Homepage() {
  return (
    <main>
      <Hero />
      <SeenOn />
    </main>
  );
}
