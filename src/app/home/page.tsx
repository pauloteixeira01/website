"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className='flex h-lvh flex-col items-center overflow-hidden px-4 gap-20'>
      <div className='flex flex-col items-center gap-4 pt-14'>
        <h1 className='text-2xl text-[#00ff00] sm:text-[26px]'>Hey!</h1>

        <span className='text-white text-lg p-8 bg-black rounded-4xl sm:text-xl text-center'>
          Welcome to my website. Here you find posts talk about technology.
        </span>
      </div>

      <div className='w-full flex items-center justify-center bg-black sm:w-2/5 rounded-4xl'>
        <Image
          src='/img/woman.gif'
          alt='code woman'
          className='w-64 h-64 sm:w-96 sm:h-96'
          width={384} // só para Next/Image não ficar 16x16
          height={384}
          priority
        />
      </div>
    </div>
  );
}
