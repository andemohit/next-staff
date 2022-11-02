import { Breadcrumb } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import InfoCard from '../info-card/InfoCard';
import Search from '../search/Search';

export interface IDashboard extends React.ComponentPropsWithoutRef<'section'> {
  locale?: string;
}

const Dashboard: React.FC<IDashboard> = ({ locale }) => {
  return (
    <section className="flex flex-col gap-y-5">
      <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
        <Breadcrumb.Item href="#">Staff</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard
          count={38}
          imageLink="/assets/icons/teacher-icon.png"
          title="Staff"
          url="/"
        />
        <InfoCard
          count={3809}
          imageLink="/assets/icons/teacher-icon.png"
          title="Studnts"
          url="/"
        />
        <InfoCard
          count={38}
          imageLink="/assets/icons/teacher-icon.png"
          title="Staff"
          url="/"
        />
        <InfoCard
          count={3809}
          imageLink="/assets/icons/teacher-icon.png"
          title="Studnts"
          url="/"
        />
      </div>

      <Image
        src="/googlelogo.png"
        alt="Google Logo"
        width={272}
        height={92}
        priority
      />
      <Search />
      <p>
        Google offered in:{' '}
        <Link href="/" locale={locale === 'en' ? 'fr' : 'en'}>
          <a className="underline text-blue-600">Francais</a>
        </Link>
      </p>
    </section>
  );
};

export default Dashboard;
function useRouter(): { locale: any } {
  throw new Error('Function not implemented.');
}
