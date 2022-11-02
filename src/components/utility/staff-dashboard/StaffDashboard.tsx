import { Breadcrumb } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { INavlist } from '../../navigation/header/Header';
import InfoCard, { IinfoCard } from '../info-card/InfoCard';

export interface IstaffDashboardProps {
  basicInfo: IinfoCard[];
}

export interface IStaffDashboard extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode;
  locale?: string;
  staffDashboardProps: IstaffDashboardProps;
}

const StaffDashboard: React.FC<IStaffDashboard> = ({
  children,
  locale,
  staffDashboardProps,
}) => {
  const [navList, setNavList] = useState<INavlist[]>();
  useEffect(() => {
    setNavList([
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about' },
    ]);
  }, []);

  return (
    <div className="flex flex-col gap-y-5 m-0 p-0">
      <Breadcrumb aria-label="Default breadcrumb example" className="mt-4">
        <Breadcrumb.Item href="#">Staff</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {staffDashboardProps.basicInfo.map((info: IinfoCard, _idx: number) => {
          return (
            <InfoCard
              key={_idx}
              count={info.count}
              imageLink={info.imageLink}
              title={info.title}
              url={info.url}
            />
          );
        })}
      </div>

      <div className="grid"></div>
    </div>
  );
};

export default StaffDashboard;
