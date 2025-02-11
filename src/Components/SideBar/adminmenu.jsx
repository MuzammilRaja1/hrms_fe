import { GoHome, GoPerson } from "react-icons/go";
import { LuBuilding } from "react-icons/lu";
import { BsClipboardCheck } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { FcLeave } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { BsPersonVcard } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { GoChecklist } from "react-icons/go";
export const adminNav = [
  {
    label: "Dashboard",
    route: "/admin/dasboard",
    icon: <GoHome className="h-6 w-6" />,
  },
  {
    label: "Employees",
    route: "/admin/allemployee",
    icon: <GoPerson className="h-6 w-6" />,
  },
  
  {
    label: "Designation",
    route: "/admin/Designation",
    icon: <BsPersonVcard className="h-6 w-6" />,
  },
  {
    label: "Leaves",
    route: "/admin/Leaves",
    icon: <GoChecklist className="h-6 w-6" />,
  },
  {
    label: "Projects ",
    route: "/admin/Projects",
    icon: <GrProjects  className="h-6 w-6" />,
  },
  {
    label: "Departments",
    route: "/admin/Departments",
    icon: <LuBuilding className="h-6 w-6" />,
  },
  {
    label: "Profile",
    route: "/admin/Profile",
    icon: <ImProfile className="h-6 w-6" />,
  },
  {
    label: "Log out",
    route: "/AdminSign",
    icon: <PiSignInBold className="h-6 w-6" />,
  },
];
