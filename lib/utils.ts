import { USER_NAME } from "@/features/dashboard/db";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function headerConfig(path: string) {
  const firstname = USER_NAME.split(" ")[0];

  switch (path) {
    case "/mentor/dashboard":
    case "/admin/dashboard":
      return { title: "Dashboard", subtitle: `Welcome back, ${firstname}` };
    case "/mentor/feed":
      return { title: "Feed", subtitle: "Stay connected with your community" };
    case "/mentor/submissions":
      return {
        title: "Submissions",
        subtitle: "Review and provide feedback on mentee work",
      };
    case "/mentor/mentees":
      return {
        title: "Mentees",
        subtitle: "Manage and track your mentee progress",
      };
    case "/mentor/announcements":
      return {
        title: "Announcements",
        subtitle: "Share updates with your mentees",
      };
    case "/mentor/events":
      return {
        title: "Events",
        subtitle: "Schedule and manage mentoring sessions",
      };
    case "/mentor/profile":
      return { title: "Profile", subtitle: "Manage your profile settings" };
    case "/mentor/settings":
    case "/admin/settings":
      return { title: "Settings", subtitle: "Configure your preferences" };
    case "/admin/learning-paths":
      return {
        title: "Learning Paths",
        subtitle: "Create and manage learning paths",
      };
    case "/admin/mentor-requests":
      return {
        title: "Mentor Requests",
        subtitle: "Review and approve mentor applications",
      };
    default:
      return { title: "Dashboard", subtitle: "" };
  }
}

export const getInitials = (name: string) => {
  const namesArray = name.split(" ");
  const initials =
    namesArray.length === 1
      ? namesArray[0].charAt(0)
      : namesArray[0].charAt(0) + namesArray[1].charAt(0);
  return initials.toUpperCase();
};
