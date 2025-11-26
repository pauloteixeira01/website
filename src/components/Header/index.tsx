"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { BsXLg } from "react-icons/bs";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 🔒 Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const isActive = (path: string) =>
    (path === "/" ? pathname === "/" : pathname === `/${path}`)
      ? "bg-black"
      : "";

  return (
    <header className='fixed inset-x-0 top-0 z-50 w-full justify-center items-center bg-[#0b0b0b] border-b-2 p-2'>
      <div className='w-full h-full flex items-center justify-between pl-4 sm:justify-around'>
        <div className='flex flex-col'>
          <h1 className='text-3xl'>Paulo Teixeira</h1>
          <span className='text-[#00ff00]'>Software Engineer</span>
        </div>

        {/* === Botão menu (mobile) === */}
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-controls='site-nav'
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className='absolute top-3 right-4 hidden max-[560px]:flex sm:hidden text-[28px] cursor-pointer z-50 transition-transform duration-200 hover:scale-110'
        >
          {open ? <BsXLg /> : <FaBars />}
        </button>

        {/* === Navegação Desktop === */}
        <nav id='site-nav' className='hidden  sm:flex gap-5'>
          <Link
            href='/'
            className={`text-[#00ff00] no-underline text-[20px] transition sm:px-8 flex items-center ${isActive(
              ""
            )}`}
          >
            HOME
          </Link>
          <Link
            href='/project'
            className={`text-[#00ff00] no-underline text-[20px] transition sm:px-8 flex items-center ${isActive(
              "project"
            )}`}
          >
            PROJECTS
          </Link>
          <Link
            href='/articles'
            className={`text-[#00ff00] no-underline text-[20px] transition sm:px-8 flex items-center ${isActive(
              "project"
            )}`}
          >
            ARTICLES
          </Link>
          <Link
            href='/contact'
            className={`text-[#00ff00] no-underline text-[20px] transition sm:px-8 flex items-center ${isActive(
              "contact"
            )}`}
          >
            CONTACTS
          </Link>
        </nav>
      </div>

      {/* === Navegação Mobile === */}
      <div
        className={`hidden max-[560px]:flex max-[560px]:fixed max-[560px]:top-0 max-[560px]:right-0
                    max-[560px]:h-[100dvh] max-[560px]:w-[60%] max-[560px]:bg-[#161616]
                    max-[560px]:flex-col max-[560px]:gap-0
                    max-[560px]:transition-transform max-[560px]:duration-500 max-[560px]:z-40
                    ${
                      open
                        ? "max-[560px]:translate-x-0 pointer-events-auto"
                        : "max-[560px]:translate-x-full pointer-events-none"
                    }`}
      >
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
          href='/articles'
          onClick={() => setOpen(false)}
          className={`flex items-center justify-around text-[#00ff00] no-underline text-[20px] w-full h-[10vh] ${isActive(
            "contact"
          )}`}
        >
          ARTICLES
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

      {/* === Overlay (fundo escuro) === */}
      {open && (
        <button
          aria-label='Fechar menu'
          onClick={() => setOpen(false)}
          className='fixed inset-0 bg-black/40 max-[560px]:block sm:hidden z-30'
        />
      )}
    </header>
  );
}
