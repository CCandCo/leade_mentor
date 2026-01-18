import { USER_NAME } from "@/features/dashboard/db";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function headerConfig(slug: string) {
  const firstname = USER_NAME.split(" ")[0];

  switch (slug) {
    case "dashboard":
    case "dashboard":
      return { title: "Dashboard", subtitle: `Welcome back, ${firstname}` };
    case "feed":
      return { title: "Feed", subtitle: "Stay connected with your community" };
    case "submissions":
      return {
        title: "Submissions",
        subtitle: "Review and provide feedback on mentee work",
      };
    case "mentees":
      return {
        title: "Mentees",
        subtitle: "Manage and track your mentee progress",
      };
    case "announcements":
      return {
        title: "Announcements",
        subtitle: "Share updates with your mentees",
      };
    case "events":
      return {
        title: "Events",
        subtitle: "Schedule and manage mentoring sessions",
      };
    case "profile":
      return { title: "Profile", subtitle: "Manage your profile settings" };
    case "settings":
    case "settings":
      return { title: "Settings", subtitle: "Configure your preferences" };
    case "learning-paths":
      return {
        title: "Learning Paths",
        subtitle: "Create and manage learning paths",
      };
    case "mentor-requests":
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
