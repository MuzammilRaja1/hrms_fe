import { PiSignInBold } from "react-icons/pi";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCreate } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoChecklist } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { FaRegListAlt } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
export const employeeNav = [
  {
    label: "Leaves",
    route: "/employee/leaves",
    icon: <TbChecklist className="h-7 w-7" />,
    subMenu: [
      {
        label: "Create",
        route: "/employee/leaves/create",
        icon: <FiEdit className="h-5 w-5" />,
      },
      {
        label: "List",
        route: "/employee/leaves/list",
        icon: <FaRegListAlt className="h-5 w-5" />,
      },
    ],
  },
  {
    label: "Employee Profile",
    route: "/employee/employee-profile",
    icon: <CgProfile className="h-6 w-6" />,
  },
  {
    label: "Log out",
    route: "/",
    icon: <PiSignInBold className="h-6 w-6" />,
  },
];
