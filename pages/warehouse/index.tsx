import { NextSeo } from 'next-seo';

import Container from '../../components/Container';
import FunctionCard from '../../components/FunctionCard';
import { getAllFilesFrontMatter } from '../../lib/mdx';

const url = 'https://louisongitzinger.com/warehouse';
const title = 'Warehouse – Louison Gitzinger';

export default function Warehouse({ goods }:any) {
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
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Warehouse
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
            A place to store and share things I encountered on The Internet.
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {goods.map((good:any) => (
            <FunctionCard
              key={good.slug}
              title={good.title}
              type={good.type}
              slug={good.slug}
              logo={good.logo}
              description={good.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const goods = await getAllFilesFrontMatter('goods');

  return { props: { goods } };
}
