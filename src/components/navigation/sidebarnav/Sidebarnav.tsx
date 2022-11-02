import { Sidebar } from 'flowbite-react';

export interface ISidebarnav extends React.ComponentPropsWithoutRef<'div'> {}

const Sidebarnav: React.FC<ISidebarnav> = () => {
  return (
    // <aside className="w-64" aria-label="Sidebar">
    //   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
    //     <ul className="space-y-2">
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             aria-hidden="true"
    //             className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
    //             <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
    //           </svg>
    //           <span className="ml-3">Dashboard</span>
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Staff</span>
    //           <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
    //             Pro
    //           </span>
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Students</span>
    //           <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
    //             3
    //           </span>
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Events</span>
    //         </a>
    //       </li>
    //       <li>
    //         <button
    //           type="button"
    //           className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //           aria-controls="dropdown-example"
    //           data-collapse-toggle="dropdown-example"
    //         >
    //           <svg
    //             aria-hidden="true"
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //           <span
    //             className="flex-1 ml-3 text-left whitespace-nowrap"
    //             sidebar-toggle-item
    //           >
    //             E-commerce
    //           </span>
    //           <svg
    //             sidebar-toggle-item
    //             className="w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         </button>
    //         <ul id="dropdown-example" className="hidden py-2 space-y-2">
    //           <li>
    //             <a
    //               href="#"
    //               className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //             >
    //               Products
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //             >
    //               Billing
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="#"
    //               className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    //             >
    //               Invoice
    //             </a>
    //           </li>
    //         </ul>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             aria-hidden="true"
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             aria-hidden="true"
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             aria-hidden="true"
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </aside>

    <div className="w-fit">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="/">Dashboard</Sidebar.Item>
            <Sidebar.Collapse label="Staff">
              <Sidebar.Item>All Staff</Sidebar.Item>
              <Sidebar.Item href="#">Add Staff</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#">Inbox</Sidebar.Item>
            <Sidebar.Item href="#">Users</Sidebar.Item>
            <Sidebar.Item href="#">Products</Sidebar.Item>
            <Sidebar.Item href="#">Sign In</Sidebar.Item>
            <Sidebar.Item href="#">Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Sidebarnav;
