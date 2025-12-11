import Image from "next/image";
import Link from "next/link";

import { articles } from "./articles";
import { inter } from "@/shared/fonts";

export default function ArticlesGrid() {
  return (
    <div
      className={`${inter.className} w-full mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4`}
    >
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/articles/${article.slug}`}
          className='group h-full'
        >
          <article
            key={article.slug}
            className='
            h-full
            group relative flex flex-col overflow-hidden
            rounded-3xl border border-green-500/30
            bg-black/80
            shadow-[0_0_25px_rgba(34,197,94,0.25)]
            transition-transform transition-shadow duration-200
            hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,197,94,0.5)]
          '
          >
            <div className='relative w-full h-40'>
              <Image
                src={article.image}
                alt={article.title}
                fill
                className='object-cover opacity-80 group-hover:opacity-100 transition-opacity'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />
              <span className='absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-black/70 border border-green-400/60 text-green-400 font-semibold'>
                {article.category}
              </span>
            </div>

            <div className='flex flex-col flex-1 p-4 gap-3'>
              <div className='flex items-center justify-between text-xs text-neutral-400'>
                <span>
                  {new Date(article.date).toLocaleDateString("pt-BR")}
                </span>
                <span>{article.readingTime}</span>
              </div>

              <h2 className='text-lg font-semibold text-green-400 leading-snug group-hover:text-green-300'>
                {article.title}
              </h2>

              <p className='text-sm text-neutral-300/80'>{article.excerpt}</p>

              <div className='flex flex-wrap gap-2 mt-auto pt-2'>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className='text-[11px] px-2 py-1 rounded-full border border-green-500/30 text-green-300/80'
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
