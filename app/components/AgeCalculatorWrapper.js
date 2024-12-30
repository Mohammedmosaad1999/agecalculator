"use client";

import dynamic from "next/dynamic";

const AgeCalculatorClient = dynamic(() => import("./AgeCalculatorClient"), {
  ssr: false,
});

export default function AgeCalculatorWrapper() {
  return <AgeCalculatorClient />;
}
