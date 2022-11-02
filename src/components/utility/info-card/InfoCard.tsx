import Image from 'next/image';
import Link from 'next/link';

export interface IinfoCard extends React.ComponentPropsWithoutRef<'div'> {
  url: string;
  imageLink: string;
  title: string;
  count: number;
  desc?: string;
}

const InfoCard: React.FC<IinfoCard> = ({
  url = '/',
  imageLink,
  title,
  count,
  desc,
}) => {
  return (
    <Link href={url}>
      <a className="flex flex-col p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex flex-row justify-between">
          <Image
            src={imageLink}
            objectFit="contain"
            alt="Teacher Icon"
            width={80}
            height={80}
          />
          <div className="flex flex-col">
            <p className="tracking-widest text-gray-500 md:text-lg dark:text-gray-400">
              {title}
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-right">
              {count}
            </h5>
          </div>
        </div>
        {/* <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p> */}
      </a>
    </Link>
  );
};

export default InfoCard;
