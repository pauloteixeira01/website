"use client";

import React, { useEffect, useState } from "react";

interface ItemsApiProps {
  id: number;
  name: string;
  url: string;
  created_at: string;
}

export default function Project() {
  const [itemsApi, setItemsApi] = useState<ItemsApiProps[]>([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function getGitHubAPI() {
      try {
        const res = await fetch(
          "https://api.github.com/users/pauloteixeira01/repos",
          {
            signal: abortController.signal,
          }
        );
        if (!res.ok) throw new Error(`Failure with status: ${res.status}`);
        const data = await res.json();
        setItemsApi(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        if (e.name === "AbortError") return;
        console.error(e);
      }
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center pt-28 gap-8 '>
      <h1 className='contact-card text-2xl text-[#00ff00] sm:text-[26px]'>
        Projects
      </h1>
      <div
        className='flex justify-center items-center h-full  
        w-full min-[601px]:w-[20%] h-[80vh]  flex flex-col items-center justify-around
        relative bg-black/90   border sm:rounded-[2.5rem] border-green-400/70
        shadow-[0_0_20px_rgba(34,197,94,0.6),0_0_40px_rgba(56,189,248,0.3)]
        tracking-[0.06em] mx-auto max-w-3xl sm:rounded-[3rem] px-2 py-2 sm:py-4
      '
      >
        <ul className='w-full overflow-x-auto h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 rounded-lg px-6 sm:px-0'>
          {itemsApi.map((item) => (
            <li
              key={item.id}
              className='font-sharetech flex flex-col text-start break-words m-[10px] mb-5 gap-[5px] rounded-[10px] p-[10px] shadow-md shadow-gray-400 border border-gray-400 max-[760px]:text-[13px]'
            >
              <strong className='font-semibold text-lg'>
                {item.name.toUpperCase()}
              </strong>
              <span className='text-sm break-words'>URL: {item.url}</span>
              <span className='text-sm text-gray-500'>
                Data Criação:{" "}
                {Intl.DateTimeFormat("pt-BR").format(new Date(item.created_at))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
