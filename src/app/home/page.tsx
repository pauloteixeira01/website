"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full h-lvh pt-24 sm:pt-12'>
      <div className='h-full flex flex-col items-center justify-between sm:justify-around'>
        <h1 className='title text-2xl text-[#00ff00] sm:text-[26px]'>
          Hello World
        </h1>

        <span
          className='font-sharetech text-white text-lg p-8 bg-black  sm:text-xl text-center
          border sm:rounded-[2.5rem] border-green-400/70
        shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(56,189,248,0.3)]
        tracking-[0.06em] mx-auto max-w-3xl sm:rounded-[3rem] px-10 py-4 mt-6 sm:mt-0
        '
        >
          Welcome to my website. <br />
          Here you find posts talk about technology.
        </span>
        <div className='w-full bg-black flex justify-center sm:w-2/5 sm:rounded-4xl'>
          <Image
            src='/img/woman.gif'
            alt='code woman'
            className='w-56 h-56 sm:w-96 sm:h-96 sm:rounded-2xl'
            width={100}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
