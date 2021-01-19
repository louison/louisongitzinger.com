import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Container from '../components/Container';
import {ReactNode} from "react";

type GoodLayoutProps = {
    children:ReactNode,
    frontMatter:any
}

export default function GoodLayout({ children, frontMatter }:GoodLayoutProps) {
  const title = `${frontMatter.title} - Good`;
  const url = `https://louisongitzinger.com/warehouse/${frontMatter.slug}`;

  return (
    <Container>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              {frontMatter.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {frontMatter.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={frontMatter.title}
              height={48}
              width={48}
              src={frontMatter.logo ? `/logos/${frontMatter.logo}` : `/logos/default.png`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
