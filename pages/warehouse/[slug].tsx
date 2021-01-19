import hydrate from 'next-mdx-remote/hydrate';

import { getFiles, getFileBySlug } from '../../lib/mdx';
import GoodLayout from '../../layouts/goods';
import MDXComponents from '../../components/MDXComponents';

export default function Good({ mdxSource, frontMatter }:any) {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <GoodLayout frontMatter={frontMatter}>{content}</GoodLayout>;
}

export async function getStaticPaths() {
  const goods = await getFiles('goods');

  return {
    paths: goods.map((s) => ({
      params: {
        slug: s.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }:any) {
  const good = await getFileBySlug('goods', params.slug);

  return { props: good };
}
