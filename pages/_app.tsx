import '../styles/global.css';

import type {AppProps /*, AppContext */} from 'next/app'
import SEO from '../next-seo.config.js';
import {DefaultSeo} from 'next-seo';
import {MDXProvider} from '@mdx-js/react';
import Head from "next/head";

function App({Component, pageProps}: AppProps) {
    return (
        <MDXProvider>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport"/>
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </MDXProvider>
    )
}

export default App