"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className='flex items-center w-full h-lvh flex-col'>
      <div className='flex flex-col items-center mt-8 px-4'>
        <h1 className='text-2xl text-[#00ff00] sm:text-[26px]'>Hey!</h1>
        <span className='text-white text-lg mt-4 p-8 bg-black rounded-4xl sm:text-xl'>
          Welcome to my website. Here you find posts talk about technology.
        </span>
      </div>
      <div className='w-full flex items-center justify-center bg-black mt-4 sm:w-2/5 sm:rounded-4xl'>
        <Image
          src='/img/woman.gif'
          alt='code woman'
          className='w-64 h-64 sm:w-96 sm:h-96'
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
