const title = 'Louison Gitzinger – PhD in computer science';
const description =
  'PhD and enthusiast problem solver, curious and passionate about music, with research and full stack experiences.';

const SEO = {
  title,
  description,
  canonical: 'https://louisongitzinger.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://louisongitzinger.com',
    title,
    description,
    images: [
      {
        url: 'https://leerob.io/static/images/banner.png',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@leeerob',
    site: '@leeerob',
    cardType: 'summary_large_image'
  }
};

export default SEO;
