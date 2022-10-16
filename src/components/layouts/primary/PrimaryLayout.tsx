import Head from 'next/head';

// export interface IPrimaryLayout {
//   children: JSX.Element;
// }

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout title</title>
      </Head>
      <main className="">{children}</main>
    </>
  );
};

export default PrimaryLayout;
