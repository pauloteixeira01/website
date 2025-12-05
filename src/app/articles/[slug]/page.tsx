import Image from "next/image";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";

import { articles } from "@/components/ArticlesGrid/articles";
import FormatUsbDriveArticle from "../_content/FormatUsbDriveArticle";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const contentBySlug: Record<string, React.ComponentType> = {
  "format-usb-drive-using-terminal-debian-ubuntu": FormatUsbDriveArticle,
};

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return notFound();
  }

  const ArticleContent = contentBySlug[slug];

  return (
    <section
      className={`
        ${inter.className}
        w-full h-full flex justify-center px-4 py-10 sm:px-8
        bg-black/80 text-neutral-100 pt-28
      `}
    >
      <article className='w-full px-2 sm:px-10'>
        <div className='relative w-full h-32 sm:h-80'>
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
        <p className='text-xs text-neutral-400 mb-2'>
          {new Date(article.date).toLocaleDateString("pt-BR")} •{" "}
          {article.readingTime}
        </p>

        <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-green-400'>
          {article.title}
        </h1>

        <p className='text-base sm:text-lg leading-relaxed text-neutral-300 mb-8'>
          {article.excerpt}
        </p>

        {ArticleContent ? (
          <ArticleContent />
        ) : (
          <div className='text-base sm:text-lg leading-relaxed text-neutral-200 bg-black/70 p-4 sm:rounded-2xl'>
            <p>
              The full content for this article is coming soon. Check back
              later.
            </p>
          </div>
        )}
      </article>
    </section>
  );
}
