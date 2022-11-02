import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import Footer from '../../navigation/footer/Footer';
import Header, { INavlist } from '../../navigation/header/Header';
import Sidebarnav from '../../navigation/sidebarnav/Sidebarnav';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-start',
}) => {
  const [navList, setNavList] = useState<INavlist[]>();

  useEffect(() => {
    setNavList([
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about' },
    ]);
  }, []);

  const { data: session, status } = useSession();
  // if (status === 'unauthenticated' || session === null) {
  //   signIn();
  // }

  return (
    <>
      <Head>
        <title>Primary Layout title</title>
      </Head>
      <div className={`min-h-screen flex flex-col`}>
        <Header navlist={navList} />
        <div className="flex flex-row">
          <Sidebarnav />
          <main className="px-5 items-center w-[calc(100%-16rem)]">
            {session?.user?.name || 'user not authenticated'}
            {children}
          </main>
        </div>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
