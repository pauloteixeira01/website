"use client";

import ArticlesGrid from "@/components/ArticlesGrid";
// import CategoriesBar from "@/components/CategoriesBar";

export default function Article() {
  return (
    <div className='w-full h-lvh pt-24 sm:pt-26'>
      <div className='h-full flex flex-col items-center justify-between sm:justify-around'>
        <h1 className='title text-2xl text-[#00ff00] sm:text-[26px]'>
          Articles!
        </h1>

        <section className='w-full h-full flex flex-col items-center py-10 text-green-400 bg-black/80 px-4 mt-10'>
          <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
            Artigos & Insights
          </h1>

          {/* <CategoriesBar /> */}
          <ArticlesGrid />
        </section>
      </div>
    </div>
  );
}
