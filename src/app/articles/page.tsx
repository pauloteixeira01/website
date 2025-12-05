"use client";

import ArticlesGrid from "@/components/ArticlesGrid";
import CategoriesBar from "@/components/CategoriesBar";

export default function Article() {
  return (
    <div className='flex h-full flex-col items-center justify-between overflow-hidden w-full pt-10'>
      <h1 className='contact-card text-2xl text-[#00ff00] sm:text-[26px]'>
        Articles!
      </h1>

      <section className='w-full h-full flex flex-col items-center py-10 text-green-400 bg-black/80 px-10 mt-10'>
        <h1 className='text-4xl font-bold mb-6'>Artigos & Insights</h1>

        <CategoriesBar />
        <ArticlesGrid />
      </section>
    </div>
  );
}
