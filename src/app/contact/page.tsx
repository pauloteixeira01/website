"use client";

import Image from "next/image";
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import ItemContact from "@/components/ItemContact";

export default function Contact() {
  return (
    <div className='w-full h-lvh pt-24 sm:pt-12'>
      <div className='h-full flex flex-col items-center justify-between sm:justify-around'>
        <h1 className='title text-2xl text-[#00ff00] sm:text-[26px]'>
          Contacts
        </h1>

        <div
          className='
        w-full h-[60vh] mt-0 flex flex-col items-center justify-around
        relative bg-black/90 border sm:rounded-[2.5rem] border-green-400/70
        shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(56,189,248,0.3)]
        tracking-[0.06em] mx-auto max-w-2xl sm:rounded-[3rem]'
        >
          <div className='h-[20vh] flex flex-col justify-between'>
            <ItemContact
              IconFa={FaLinkedin}
              LinkContact='paulo-teixeira-developer'
              href='https://www.linkedin.com/in/paulo-teixeira-developer/'
            />
            <ItemContact
              IconFa={FaGithub}
              LinkContact='pauloteixeira01'
              href='https://github.com/pauloteixeira01'
            />
            <ItemContact
              IconFa={FaWhatsapp}
              LinkContact='(85) 98662-9688'
              href='https://api.whatsapp.com/send?phone=85986629688&text=Hey!%20What´s up...'
            />
            <ItemContact
              IconFa={FaEnvelope}
              LinkContact='paulo.teixeira541@gmail.com'
            />
          </div>
          <div>
            <Image
              src='/img/profile.png'
              alt='profile_picture'
              width={200}
              height={200}
              className='w-40 h-40 sm:w-60 sm:h-60 rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
