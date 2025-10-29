import React, { ElementType } from "react";
import Link from "next/link";

interface ItemContactProps {
  IconFa: ElementType;
  LinkContact: string;
  href?: string;
}

export default function ItemContact({
  IconFa,
  LinkContact,
  href,
}: ItemContactProps) {
  return (
    <div className='w-full flex items-center break-words'>
      <div className='mr-4 flex'>
        <IconFa className='w-[30px] h-[30px]' />
      </div>

      {href ? (
        <Link
          href={href}
          target='_blank'
          className='text-[#00ff00] cursor-pointer no-underline hover:underline'
        >
          {LinkContact}
        </Link>
      ) : (
        <p className='text-[#00ff00] text-start'>{LinkContact}</p>
      )}
    </div>
  );
}
