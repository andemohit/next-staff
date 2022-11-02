import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth/AuthContext';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayouts extends AppProps<{ session: Session }> {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayouts) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </SessionProvider>
  );
}

export default MyApp;
