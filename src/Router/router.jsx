import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import DashboardHome from "../Components/DashboardHome/DashboardHome";
import AllEmployee from "../Pages/admin/AllEmployee";
import SingleEmployee from "../Pages/SingleEmployee";
import Signin from "../Components/Signin/Signin";
import PrivateRouter from "./PrivateRouter";
import UpdateEmployee from "../Pages/UpdateEmployee";
import Attendance from "../Pages/Attendance";
import Profile from "../Components/Profile/Profile";
import DepartmentWiseEmployee from "../Pages/DepartmentWiseEmployee";
import AdminSign from "../Components/Signin/AdminSign";
import UserPrivateRouter from "./UserPrivateRouter";
import Designation from "../Pages/admin/Designation";
import Leaves from "../Pages/admin/Leaves";
import Projects from "../Pages/admin/Projects";
import Departments from "../Pages/admin/Departments";
import ProfileEdit from "../Pages/admin/ProfileEdit";
import Create from "../Pages/employee/Create";

import UserProfile from "../Pages/employee/UserProfile";
import List from "../Pages/employee/List";
const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRouter>
            <DashboardHome />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/allemployee",
        element: (
          <PrivateRouter>
            <AllEmployee />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/Designation",
        element: (
          <PrivateRouter>
            <Designation />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/Leaves",
        element: (
          <PrivateRouter>
            <Leaves />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/Projects",
        element: (
          <PrivateRouter>
            <Projects />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/Departments",
        element: (
          <PrivateRouter>
            <Departments />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/departmentWiseEmployee",
        element: <DepartmentWiseEmployee />,
      },
      {
        path: "/admin/Profile",
        element: (
          <PrivateRouter>
            <ProfileEdit />
          </PrivateRouter>
        ),
      },
    ],
  },

  { 
    path: "/employee",
    element: (
      <UserPrivateRouter>
        <Dashboard />
      </UserPrivateRouter>
    ),
    children: [
      {
        path: "/employee/dasboard",
        element: (
          <UserPrivateRouter>
            <DashboardHome />
          </UserPrivateRouter>
        ),
      },
      // {
      //   path: "/employee/leaves",
      //   element: (
      //     <UserPrivateRouter>
      //       <CreateLeaves />
      //     </UserPrivateRouter>
      //   ),
      // },
      {
        path: "/employee/leaves/create",
        element: (
          <UserPrivateRouter>
            <Create />
          </UserPrivateRouter>
        ),
      },
      {
        path: "/employee/leaves/list",
        element: (
          <UserPrivateRouter>
            {/* <EditAndDelete /> */}
            <List />
          </UserPrivateRouter>
        ),
      },
      {
        path: "/employee/employee-profile",
        element: (
          <UserPrivateRouter>
            <UserProfile />
          </UserPrivateRouter>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/AdminSign",
    element: <AdminSign />,
  },
  // {
  //     path: '/signup',
  //     element: <Signup />
  // }
]);

export default router;
