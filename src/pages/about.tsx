import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
        accusantium consequuntur perferendis aspernatur itaque, est nostrum eum
        minima error possimus molestiae ipsam culpa quod enim, ipsa hic
        blanditiis necessitatibus tenetur.
      </p>
    </section>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
