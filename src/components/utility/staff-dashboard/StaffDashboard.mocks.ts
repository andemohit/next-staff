import { IStaffDashboard } from './StaffDashboard';

const base: IStaffDashboard = {
  children: '{{component}}',
  staffDashboardProps: {
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
  },
};

export const mockStaffDashboardProps = {
  base,
};
