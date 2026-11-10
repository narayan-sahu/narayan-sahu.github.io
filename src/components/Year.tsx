"use client";
import { useEffect, useState } from "react";

// `initial` is the year at build time, passed in by the server component. Using it as the
// first client render makes the markup match the pre-rendered HTML exactly (no hydration
// mismatch). After hydration the effect refreshes it to the visitor's current year.
export default function Year({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <span>{year}</span>;
}
