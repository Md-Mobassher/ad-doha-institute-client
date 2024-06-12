import { USER_ROLE } from "@/constant/role";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import UserIcon from "@mui/icons-material/Person2";
import KeyIcon from "@mui/icons-material/Key";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import { DrawerItem, UserRole } from "@/type";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.super_admin:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Admin Management",
          path: `${role}/admin-management`,
          icon: DashboardIcon,
        },

        {
          title: "Faculty Management",
          path: `${role}/faculty-management`,
          icon: UserIcon,
        },

        {
          title: "Student Management",
          path: `${role}/student-management`,
          icon: GroupIcon,
        },
        {
          title: "Course Management",
          path: `${role}/course-management`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.admin:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Admin Management",
          path: `${role}/admin-management`,
          icon: DashboardIcon,
        },

        {
          title: "Faculty Management",
          path: `${role}/faculty-management`,
          icon: UserIcon,
        },

        {
          title: "Student Management",
          path: `${role}/student-management`,
          icon: GroupIcon,
        },
        {
          title: "Course Management",
          path: `${role}/course-management`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.faculty:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Student",
          path: `${role}/student`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Courses",
          path: `${role}/courses`,
          icon: CalendarMonthIcon,
        }
      );
      break;

    case USER_ROLE.student:
      roleMenus.push({
        title: "Dashboard",
        path: `${role}/appointments`,
        icon: BookOnlineIcon,
      });
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
