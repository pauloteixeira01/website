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
    <div className='w-full flex flex-col items-center justify-center pt-28'>
      <h1 className='text-2xl text-[#00ff00] sm:text-[26px]'>Projects</h1>
      <div className='flex justify-center items-center h-full p-5 max-[600px]:p-[5px]'>
        <ul className='overflow-x-auto h-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 rounded-lg'>
          {itemsApi.map((item) => (
            <li
              key={item.id}
              className='flex flex-col text-start break-words m-[10px] mb-5 gap-[5px] rounded-[10px] p-[10px] shadow-md shadow-gray-400 border border-gray-400 max-[760px]:text-[13px]'
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
