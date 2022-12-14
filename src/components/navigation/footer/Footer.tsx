export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 dark:bg-gray-800 ${className} border-t`}
    >
      <p>India</p>
    </footer>
  );
};

export default Footer;
