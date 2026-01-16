import { Calendar, FileCheck, Megaphone, Users } from "lucide-react";
import { submissions } from "./db";

export const QUICK_ACTIONS = [
  {
    label: "Create Announcement",
    href: "/mentor/announcements",
    icon: Megaphone,
  },
  {
    label: "Schedule Event",
    href: "/mentor/events",
    icon: Calendar,
  },
  {
    label: "Review Submissions",
    href: "/mentor/submissions",
    icon: FileCheck,
  },
  {
    label: "Add Mentee",
    href: "/mentor/mentees",
    icon: Users,
  },
];

const allSubmissionsCount = submissions.length;
const pendingSubmissionsCount = submissions.filter(
  (sub) => sub.status === "pending"
).length;
const reviewedSubmissionsCount = submissions.filter(
  (sub) => sub.status === "reviewed"
).length;

export const SUBMISSION_TABS = [
  { id: "all", label: "All", count: allSubmissionsCount },
  { id: "pending", label: "Pending", count: pendingSubmissionsCount },
  { id: "reviewed", label: "Reviewed", count: reviewedSubmissionsCount },
];

export const FEEDS_TABS = [
  { id: "all", label: "All Posts" },
  { id: "mentees", label: "Mentees" },
  { id: "saved", label: "Saved" },
];
