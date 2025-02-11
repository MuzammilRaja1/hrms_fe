// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { adminNav } from "./adminmenu.jsx";
// import { employeeNav } from "./employeemenu.jsx";
// import { FaBars, FaAngleDown } from "react-icons/fa";
// import logoLight from "../../../public/assets/logo.png";
// import { useAuth } from "../../Provider/AuthProvider.jsx";

// const SideBar = ({ isSidebarExpanded, toggleSidebar }) => {
//   const { auth } = useAuth();
//   const [slideMenu, setSlideMenu] = useState({});
//   const { pathname } = useLocation();

//   const toggleMenu = (index) => {
//     setSlideMenu((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const navGroup = (item, index) => (
//     <li key={index} className="p-2">
//       <button
//         onClick={() => toggleMenu(index)}
//         className="w-full flex items-center justify-between text-lg  text-gray-700 py-3 px-5 hover:bg-customblue hover:text-white transition duration-300 rounded-lg"
//       >
//         <div className="flex items-center gap-2">
//           {item.icon}
//           {isSidebarExpanded && <span>{item.label}</span>}
//         </div>
//         <FaAngleDown
//           className={`ml-2 transform transition-transform duration-300 ${
//             slideMenu[index] ? "rotate-180" : ""
//           }`}
//         />
//       </button>
//       <ul
//         className={`transition-all overflow-hidden duration-300 ease-in-out  ${
//           slideMenu[index] ? "max-h-[500px]" : "max-h-0"
//         }`}
//       >
//         {item.subMenu?.map((subItem, subIndex) => navItem(subItem, subIndex))}
//       </ul>
//     </li>
//   );

//   const navItem = (item, index) => (
//     <li
//       key={index}
//       className={`${
//         pathname === item?.route
//           ? "bg-customblue text-customprimary"
//           : "hover:bg-blue-100"
//       } flex items-center p-2 py-2 my-1 transition duration-150 rounded-md`}
//     >
//       <Link
//         className="block px-5 w-full flex items-center gap-2"
//         to={item?.route}
//       >
//         {item?.icon}
//         {isSidebarExpanded && <span>{item?.label}</span>}
//       </Link>
//     </li>
//   );

//   const getItems = () => {
//     return auth.role === "admin" ? adminNav : employeeNav;
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 h-full ${
//         isSidebarExpanded ? "w-64" : "w-20"
//       } bg-white border-r shadow-md transition-width duration-300`}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-between p-4">
//         {isSidebarExpanded && (
//           <h1 className="text-lg font-bold">
//             <img src={logoLight} alt="Logo" className="h-8 ml-4" />
//           </h1>
//         )}
//         <button onClick={toggleSidebar} className="p-2">
//           <FaBars className="text-customblue" size={24} />
//         </button>
//       </div>

//       <ul>
//         {getItems()?.map((item, index) =>
//           item?.subMenu ? navGroup(item, index) : navItem(item, index)
//         )}
//       </ul>
//     </div>
//   );
// };

// export default SideBar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { adminNav } from "./adminmenu.jsx";
import { employeeNav } from "./employeemenu.jsx";
import { FaBars, FaAngleDown } from "react-icons/fa";
import logoLight from "../../../public/assets/logo.png";
import { useAuth } from "../../Provider/AuthProvider.jsx";

const SideBar = ({ isSidebarExpanded, toggleSidebar }) => {
  const { auth } = useAuth();
  const [slideMenu, setSlideMenu] = useState({});
  const { pathname } = useLocation();

  const toggleMenu = (index) => {
    setSlideMenu((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // const navGroup = (item, index) => (
  //   <li key={index} className="pt-2  pb-0">
  //     <button
  //       onClick={() => toggleMenu(index)}
  //       className="w-full flex items-center justify-between text-lg text-gray-700 py-3 px-5 hover:bg-customblue hover:text-white transition duration-300 rounded-lg"
  //     >
  //       <div className="flex items-center gap-2 ">
  //         <span className="text-xl">{item.icon}</span>

  //         {isSidebarExpanded && <span>{item.label}</span>}
  //       </div>
  //       <FaAngleDown
  //         className={`ml-2 transform transition-transform duration-300  ${
  //           slideMenu[index] ? "rotate-180" : ""
  //         }`}
  //       />
  //     </button>
  //     <ul
  //       className={`transition-all overflow-hidden duration-300 ease-in-out  ${
  //         slideMenu[index] ? "max-h-[500px]" : "max-h-0"
  //       }`}
  //     >
  //       {item.subMenu?.map((subItem, subIndex) => navItem(subItem, subIndex))}
  //     </ul>
  //   </li>
  // );

  const navGroup = (item, index) => (
    <li key={index} className="pt-2  pb-0">
      <button
        onClick={() => toggleMenu(index)}
        className="w-full flex items-center justify-between text-lg text-gray-700 py-2 px-5 hover:bg-customblue hover:text-white transition duration-300 rounded-lg"
      >
        <div className="flex items-center gap-2 ">
          <span className="text-xl">{item.icon}</span>

          {isSidebarExpanded && <span>{item.label}</span>}
        </div>
        {isSidebarExpanded && (
          <FaAngleDown
            className={`ml-2 transform transition-transform duration-300  ${
              slideMenu[index] ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      <ul
        className={`transition-all overflow-hidden duration-300 ease-in-out  ${
          slideMenu[index] ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {item.subMenu?.map((subItem, subIndex) => navItem(subItem, subIndex))}
      </ul>
    </li>
  );
  const navItem = (item, index) => (
    <li
      key={index}
      className={`${
        pathname === item?.route
          ? "bg-customblue text-customprimary "
          : "hover:bg-blue-100"
      } flex items-center p-2 py-2 my-1 transition duration-150 rounded-md`}
    >
      <Link
        className="block px-[15px]  w-full flex items-center gap-2"
        to={item?.route}
      >
        <span className="text-xl">{item?.icon}</span>
        {isSidebarExpanded && <span>{item?.label}</span>}
      </Link>
    </li>
  );

  const getItems = () => {
    return auth.role === "admin" ? adminNav : employeeNav;
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        isSidebarExpanded ? "w-64" : "w-20"
      } bg-white border-r shadow-md transition-width duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4">
        {isSidebarExpanded && (
          <h1 className="text-lg font-bold">
            <img src={logoLight} alt="Logo" className="h-8 ml-4" />
          </h1>
        )}
        <button onClick={toggleSidebar} className="p-2">
          <FaBars className="text-customblue" size={24} />
        </button>
      </div>

      <ul>
        {getItems()?.map((item, index) =>
          item?.subMenu ? navGroup(item, index) : navItem(item, index)
        )}
      </ul>
    </div>
  );
};

export default SideBar;
