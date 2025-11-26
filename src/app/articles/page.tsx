"use client";

import Image from "next/image";

export default function Article() {
  return (
    <div className='flex h-lvh flex-col items-center justify-around overflow-hidden sm:px-4 w-full'>
      <h1 className='contact-card text-2xl text-[#00ff00] sm:text-[26px]'>
        Articles!
      </h1>

      <p>Under construction</p>

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
        src='/img/under-construction.jpg'
        alt='building'
        className='w-60'
        width={100}
        height={100}
        priority
      />
      {/* </div> */}
    </div>
  );
}
