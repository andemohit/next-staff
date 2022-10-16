import Link from 'next/link';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  // const { status } = useSession();
  return (
    <nav className="">
      {/* {status === 'authenticated' ? (
        <>
          <p>Signed In</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <Link href="api/auth/signin">
          <a>Sign in</a>
        </Link>
      )} */}
      <input className="" placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default SidebarLayout;
