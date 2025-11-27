"use client";

import Image from "next/image";

export default function Article() {
  return (
    <div className='flex h-lvh flex-col items-center justify-between overflow-hidden sm:px-4 w-full pt-28'>
      <h1 className='contact-card text-2xl text-[#00ff00] sm:text-[26px]'>
        Articles!
      </h1>

      {/* <div
        className='w-full
                flex
                justify-center
                items-end            
                bg-transparent       
                sm:items-center      
                sm:bg-black         
                sm:w-2/5
                sm:rounded-4xl'
      > */}
      <Image
        src='/img/under-construction.png'
        alt='building'
        className='w-full sm:w-lvh'
        width={200}
        height={200}
        priority
      />
      {/* </div> */}
    </div>
  );
}
