"use client";

import { useState } from "react";

import { categories } from "./categories";

export default function CategoriesBar() {
  const [active, setActive] = useState<string>("");

  return (
    <div className='w-full flex flex-col items-center mt-6'>
      <div
        className='
        flex gap-3 overflow-x-auto pb-3
        sm:grid sm:grid-cols-5 sm:gap-4
        scrollbar-thin scrollbar-thumb-green-500/40 scrollbar-track-transparent
      '
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`
              whitespace-nowrap px-4 py-2 rounded-xl border 
              text-sm font-semibold transition-all
              backdrop-blur-md
              hover:scale-105
              ${
                active === category
                  ? "border-green-400 text-green-400 shadow-[0_0_10px_#22c55e]"
                  : "border-green-400/20 text-green-400/60 hover:text-green-300 hover:border-green-400/40"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
