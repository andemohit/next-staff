import { IHeader } from './Header';

const login: IHeader = {
  navlist: [],
};
const logout: IHeader = {
  navlist: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Services', url: '/' },
    { title: 'Pricing', url: '/' },
    { title: 'Contact', url: '/' },
  ],
  userInfo: {
    username: 'Mohit Ande',
    email: 'mohit@gmail.com',
  },
};

export const mockHeaderProps = {
  login,
  logout,
};
