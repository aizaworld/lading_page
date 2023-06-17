import Head from 'next/head';
import Script from 'next/script';

import '../styles/globals.css';
import '../components/hero-rarity/style.css';
import '../components/why-aiza/style.css';
import '../components/bundle-info/style.css';
import '../components/header/style.css';
import '../components/banner/style.css';
import '../components/counter/style.css';
import '../components/about/style.css';
import '../components/anatomy/style.css';
import '../components/faq/style.css';
import '../components/footer/style.css';
import '../components/testimonial/style.css';
import '../components/brand/style.css';
import '../components/ino-exchange/style.css';
import '../components/collection-brand/index.css';
import '../components/hero-chest/index.css';
import '../components/hero-chest-1/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
