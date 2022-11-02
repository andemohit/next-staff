import { Dropdown, Navbar } from 'flowbite-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AuthButton from '../../button/auth-button/AuthButton';

export interface INavlist {
  title: string;
  url: string;
}

export interface IUserInfo {
  username: string;
  email: string;
}

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {
  navlist?: INavlist[];
  userInfo?: IUserInfo;
}

const Header: React.FC<IHeader> = ({ className, ...headeerProps }) => {
  const route = useRouter();
  const { data: session, status } = useSession();

  const collapseNav = (navlist: INavlist[]) => {
    return (
      <Navbar.Collapse>
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          {navlist.map((nav, idx) => {
            return (
              <li key={idx}>
                <Link href={nav.url}>
                  <a
                    className={`nav_link ${
                      route.pathname === nav.url
                        ? 'text-blue-700'
                        : 'text-gray-700'
                    }`}
                  >
                    {nav.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Navbar.Collapse>
    );
  };
  return (
    <header
      {...headeerProps}
      className={`w-full justify-between bg-gray-50 border-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {headeerProps.navlist && headeerProps.navlist.length > 0 ? (
            <>
              <div className="pr-1">
                <Dropdown arrowIcon={false} inline={true} label={'English'}>
                  <Dropdown.Item>Telugu</Dropdown.Item>
                  <Dropdown.Item>Tamil</Dropdown.Item>
                  <Dropdown.Item>Hindi</Dropdown.Item>
                </Dropdown>
              </div>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={headeerProps.userInfo?.username}
              >
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <div>
                {status === 'authenticated' ? (
                  <button onClick={() => signOut()}>Signout</button>
                ) : (
                  <button onClick={() => signIn()}>SignIn</button>
                )}
              </div>
            </>
          ) : (
            <AuthButton />
          )}

          <Navbar.Toggle />
        </div>
        {headeerProps.navlist && headeerProps.navlist.length > 0 ? (
          collapseNav(headeerProps.navlist)
        ) : (
          <></>
        )}
      </Navbar>
      {/* <div className="space-x-5 m-5">
        <Link href="/about">
          <a
            className={`hover:underline ${
              route.pathname === '/about' ? 'text-blue-700' : ''
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/">
          <a className={`hover:underline`}>Store</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <AuthButton />
      </div> */}
    </header>
  );
};

export default Header;
