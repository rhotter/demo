"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className={`bg-orange-950 h-screen text-white pt-4`}>
      <Link
        href="/https://mmm.page/luma.us"
        className="underline text-orange-600 pl-4"
      >
        next page {"->"} boticelli + barbarossa{" "}
      </Link>
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
