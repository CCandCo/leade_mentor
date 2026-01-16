import {
  LayoutDashboard,
  Rss,
  FileCheck,
  Users,
  Megaphone,
  Calendar,
  Settings,
  User,
  BookOpen,
} from "lucide-react";

export const dashboardNavigation = [
  {
    label: "Dashboard",
    href: "/mentor/dashboard",
    icon: LayoutDashboard,
    role: "mentor",
  },
  {
    label: "Feed",
    href: "/mentor/feed",
    icon: Rss,
    role: "mentor",
  },
  {
    label: "Submissions",
    href: "/mentor/submissions",
    icon: FileCheck,
    role: "mentor",
  },
  {
    label: "Mentees",
    href: "/mentor/mentees",
    icon: Users,
    role: "mentor",
  },
  {
    label: "Announcements",
    href: "/mentor/announcements",
    icon: Megaphone,
    role: "mentor",
  },
  {
    label: "Events",
    href: "/mentor/events",
    icon: Calendar,
    role: "mentor",
  },
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    role: "admin",
  },
  {
    label: "Learning Paths",
    href: "/admin/learning-paths",
    icon: BookOpen,
    role: "admin",
  },
  {
    label: "Mentor Requests",
    href: "/admin/mentor-requests",
    icon: Users,
    role: "admin",
  },
] as const;

export const otherNavigation = [
  {
    label: "Profile",
    href: "/mentor/profile",
    icon: User,
    role: "mentor",
  },
  {
    label: "Settings",
    href: "/mentor/settings",
    icon: Settings,
    role: "mentor",
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
    role: "admin",
  },
];
