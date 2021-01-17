import '../styles/global.css';

import type {AppProps /*, AppContext */} from 'next/app'
import SEO from '../next-seo.config';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';
import {DefaultSeo} from 'next-seo';
import Head from "next/head";

function App({Component, pageProps}: AppProps) {
    return (
        <MDXProvider components={MDXComponents}>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </MDXProvider>
    )
}

export default App