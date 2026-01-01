import { useEffect } from 'react';
import Router from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { initGA, logPageView } from 'analytics';
import { LocaleProvider } from 'contexts/locale-context';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.min.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <SessionProvider session={session}>
      <LocaleProvider>
        <Component {...pageProps} />
      </LocaleProvider>
    </SessionProvider>
  );
}
