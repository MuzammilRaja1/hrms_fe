import logoLight from "../../public/assets/logo.png";
import { FaBars } from "react-icons/fa"; // Import Hamburger icon
import Breadcrumb from "../Components/common/Breadcrumb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const DashboardHeader = ({ isSidebarExpanded, toggleSidebar, user }) => {
  return (
    <div className="flex items-center justify-between bg-white border-b border-gray-200 p-4 shadow-sm">
      {/* Hamburger Icon for Mobile */}
      <div className={`flex items-center ${isSidebarExpanded ? "" : " "} transition-all duration-300`}>
        <Breadcrumb />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="text-gray-600 hover:text-gray-800">
          <IoIosNotificationsOutline className="h-6 w-6" />
        </button>

        {/* Settings Icon */}
        <button className="text-gray-600 hover:text-gray-800">
          <CiSettings className="h-6 w-6" />
        </button>

        {/* User Profile */}
        <div className="relative">
          <img
            src={user?.profileImage || "https://via.placeholder.com/40"} // Placeholder if no image
            alt="User Profile"
            className="h-10 w-10 rounded-full border border-gray-300 object-cover cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
