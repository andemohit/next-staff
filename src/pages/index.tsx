import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import StaffDashboard, {
  IstaffDashboardProps,
} from '../components/utility/staff-dashboard/StaffDashboard';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();
  const basicInfo: IstaffDashboardProps = {
    basicInfo: [
      {
        title: 'Staff',
        url: '/',
        imageLink: '/assets/icons/teacher-icon.png',
        count: 38,
      },
      {
        title: 'Students',
        url: '/',
        imageLink: '/assets/icons/teacher-icon.png',
        count: 3809,
      },
      {
        title: 'Staff',
        url: '/',
        imageLink: '/assets/icons/teacher-icon.png',
        count: 38,
      },
      {
        title: 'Students',
        url: '/',
        imageLink: '/assets/icons/teacher-icon.png',
        count: 3809,
      },
    ],
  };

  return <StaffDashboard locale={locale} staffDashboardProps={basicInfo} />;
};

export default Home;

Home.getLayout = function getLayout(page: JSX.Element) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
