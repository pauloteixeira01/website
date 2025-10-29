"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { BsXLg } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) =>
    (path === "/" ? pathname === "/" : pathname === `/${path}`)
      ? "bg-black"
      : "";

  return (
    <header className='relative h-24 flex items-center justify-center border-b-2'>
      <div className='w-full h-full flex items-center justify-between px-8 lg:w-2/3 sm:px-0'>
        <div className='flex flex-col'>
          <h1 className='text-3xl'>Paulo Teixeira</h1>
          <span className='text-[#00ff00]'>Software Engineer</span>
        </div>

        {/* Botão menu (mobile) */}
        <button
          aria-label='Abrir menu'
          aria-controls='site-nav'
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className='absolute top-4 right-4 hidden max-[560px]:flex sm:hidden text-[30px] cursor-pointer z-50'
        >
          <FaBars />
        </button>

        {/* Navegação desktop */}
        <nav id='site-nav' className='hidden max-[560px]:hidden sm:flex gap-5'>
          <Link
            href='/'
            className={`text-[#00ff00] no-underline text-[20px] transition w-full h-[10vh] sm:h-auto sm:px-12 flex items-center ${isActive(
              ""
            )}`}
          >
            HOME
          </Link>
          <Link
            href='/project'
            className={`text-[#00ff00] no-underline text-[20px] transition w-full h-[10vh] sm:h-auto sm:px-12 flex items-center ${isActive(
              "project"
            )}`}
          >
            PROJECTS
          </Link>
          <Link
            href='/contact'
            className={`text-[#00ff00] no-underline text-[20px] transition w-full h-[10vh] sm:h-auto sm:px-12 flex items-center ${isActive(
              "contact"
            )}`}
          >
            CONTACTS
          </Link>
        </nav>

        {/* Navegação mobile (≤560px): off-canvas à direita */}
        <div
          className={`max-[560px]:fixed max-[560px]:top-0 max-[560px]:right-0 max-[560px]:h-screen max-[560px]:w-[60%] max-[560px]:bg-[#161616] max-[560px]:flex max-[560px]:flex-col max-[560px]:gap-0
                      max-[560px]:transition-transform max-[560px]:duration-500 max-[560px]:z-40
                      ${
                        open
                          ? "max-[560px]:translate-x-0"
                          : "max-[560px]:translate-x-full"
                      }`}
        >
          {/* Botão fechar */}
          <button
            aria-label='Fechar menu'
            onClick={() => setOpen(false)}
            className='absolute top-4 right-4 text-[30px] flex cursor-pointer'
          >
            <BsXLg />
          </button>

          <Link
            href='/'
            onClick={() => setOpen(false)}
            className={`mt-24 flex items-center justify-around text-[#00ff00] no-underline text-[20px] w-full h-[10vh] ${isActive(
              ""
            )}`}
          >
            HOME
          </Link>
          <Link
            href='/project'
            onClick={() => setOpen(false)}
            className={`flex items-center justify-around text-[#00ff00] no-underline text-[20px] w-full h-[10vh] ${isActive(
              "project"
            )}`}
          >
            PROJECTS
          </Link>
          <Link
            href='/contact'
            onClick={() => setOpen(false)}
            className={`flex items-center justify-around text-[#00ff00] no-underline text-[20px] w-full h-[10vh] ${isActive(
              "contact"
            )}`}
          >
            CONTACTS
          </Link>
        </div>

        {/* Overlay (mobile) */}
        {open && (
          <button
            aria-label='Fechar menu'
            onClick={() => setOpen(false)}
            className='fixed inset-0 bg-black/40 max-[560px]:block sm:hidden z-30'
          />
        )}
      </div>
    </header>
  );
}
