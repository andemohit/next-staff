import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

export interface IEventsProps {}

const Events: NextPageWithLayout = () => {
  return (
    <>
      <h1>Events Page </h1>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps<IEventsProps> = async ({
//   query,
// }) => {
//   return {
//     props: {
//       data: '',
//     },
//   };
// };

export default Events;

Events.getLayout = (page) => {
  return <PrimaryLayout justify="items-start">{page}</PrimaryLayout>;
};
