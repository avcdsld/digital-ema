import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import { LocaleProvider } from 'contexts/locale-context';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
