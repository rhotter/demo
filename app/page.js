"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className={`bg-orange-950 h-screen text-white`}>
      <div className="flex justify-center items-center h-full">
        <div className={`rounded-full overflow-hidden pulse-border-animation`}>
          <Image
            src="/bacteriophages-infecting-a-bacterium.jpg"
            width={500}
            height={500}
            alt="bacteriophages-infecting-a-bacterium"
          />

          <Image
            src="/rainbow.webp"
            width={500}
            height={500}
            alt="bacteriophages-infecting-a-bacterium"
          />
        </div>
      </div>
    </div>
  );
}
