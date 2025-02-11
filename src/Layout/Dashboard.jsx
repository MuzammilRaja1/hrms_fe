import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import SideBar from "../Components/SideBar/SideBar";
import DashboardHeader from "./DashboardHeader";

const Dashboard = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Sidebar state


  // Toggle Sidebar (Expand/Collapse)
  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };



  return (
    <div className="flex h-screen bg-customprimary">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isSidebarExpanded ? "w-64" : "w-20"
        } bg-white border-r shadow-md`}
      >
        <SideBar
          isSidebarExpanded={isSidebarExpanded}
          toggleSidebar={toggleSidebar}
          location={location}
        />
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 flex-1`}
        style={{
          width: isSidebarExpanded ? "calc(100% - 16rem)" : "calc(100% - 6rem)",
        }}
      >
        {/* Header */}
        <DashboardHeader toggleSidebar={toggleSidebar} isSidebarExpanded={isSidebarExpanded} />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
