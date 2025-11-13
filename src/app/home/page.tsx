"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className='flex h-lvh flex-col items-center overflow-hidden px-4 gap-20 w-full'>
      <div className='flex flex-col items-center gap-4 pt-28'>
        <h1 className='contact-card text-2xl text-[#00ff00] sm:text-[26px]'>
          Hey!
        </h1>

        <span
          className='font-sharetech text-white text-lg p-8 bg-black rounded-4xl sm:text-xl text-center
          border sm:rounded-[2.5rem] border-green-400/70
        shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(56,189,248,0.3)]
        tracking-[0.06em] mx-auto max-w-3xl sm:rounded-[3rem] px-10 py-10
        '
        >
          Welcome to my website. Here you find posts talk about technology.
        </span>
      </div>

      <div className='w-full flex items-center justify-center bg-black sm:w-2/5 rounded-4xl'>
        <Image
          src='/img/woman.gif'
          alt='code woman'
          className='w-64 h-64 sm:w-96 sm:h-96'
          width={384}
          height={384}
          priority
        />
      </div>
    </div>
  );
}
