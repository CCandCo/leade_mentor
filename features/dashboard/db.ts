import { Submission } from "./types";

export const USER_ROLE = "mentor";
export const USER_NAME = "Jane Smith";

export const stats = [
  {
    title: "Active Mentees",
    value: 24,
    change: "+3 this week",
    changeType: "positive" as const,
    icon: "mentees",
  },
  {
    title: "Pending Reviews",
    value: 8,
    change: "5 urgent",
    changeType: "neutral" as const,
    icon: "reviews",
  },
  {
    title: "Avg. Rating",
    value: "4.9",
    change: "+0.2",
    changeType: "positive" as const,
    icon: "rating",
  },
  {
    title: "Engagement Rate",
    value: "94%",
    change: "+5%",
    changeType: "positive" as const,
    icon: "engagement",
  },
];

export const submissions: Submission[] = [
  {
    id: "1",
    assignmentTitle: "Brand Identity Redesign",
    studentName: "Sarah Chen",
    submittedAt: "2 hours ago",
    status: "pending" as const,
    lesson: "UX Design",
    description:
      "Complete brand redesign including logo, color palette, and guidelines Low-fidelity wireframes for a fitness tracking mobile application",
  },
  {
    id: "2",
    assignmentTitle: "Mobile App Wireframes",
    studentName: "Alex Rivera",
    submittedAt: "5 hours ago",
    status: "pending" as const,
    lesson: "UI Design",
    description:
      "Low-fidelity wireframes for a fitness tracking mobile application",
  },
  {
    id: "3",
    assignmentTitle: "Portfolio Website V2",
    studentName: "Maya Johnson",
    submittedAt: "1 day ago",
    status: "reviewed" as const,
    lesson: "Web Design",
    description:
      "High-converting landing page design for an online fashion store",
  },
  {
    id: "4",
    assignmentTitle: "UI Component Library",
    studentName: "James Wilson",
    submittedAt: "2 days ago",
    status: "pending" as const,
    lesson: "UI Design",
    description:
      "Comprehensive dashboard components with dark and light themes",
  },
  {
    id: "5",
    assignmentTitle: "E-commerce Platform Design",
    studentName: "Lina Patel",
    submittedAt: "3 days ago",
    status: "reviewed" as const,
    lesson: "UI Design",
    description:
      "Complete brand redesign including logo, color palette, and guidelines Low-fidelity wireframes for a fitness tracking mobile application",
  },
  {
    id: "6",
    assignmentTitle: "Social Media Campaign",
    studentName: "Tom Nguyen",
    submittedAt: "4 days ago",
    status: "reviewed" as const,
    lesson: "UX Design",
    description:
      "Low-fidelity wireframes for a fitness tracking mobile application",
  },
  {
    id: "7",
    assignmentTitle: "Landing Page Optimization",
    studentName: "Emily Davis",
    submittedAt: "5 days ago",
    status: "pending" as const,
    lesson: "UX Design",
    description:
      "High-converting landing page design for an online fashion store",
  },
  {
    id: "8",
    assignmentTitle: "Blog Redesign",
    studentName: "Michael Brown",
    submittedAt: "1 week ago",
    status: "pending" as const,
    lesson: "UI Design",
    description:
      "Comprehensive dashboard components with dark and light themes",
  },
];

export const RECENT_ACTIVITIES = [
  {
    id: "1",
    title: "New Submission Received",
    description: "John Doe submitted 'UX Case Study'.",
    time: "10 minutes ago",
    activityType: "submission" as const,
  },
  {
    id: "2",
    title: "Message from Sarah Chen",
    description: "Sarah sent you a message regarding her project.",
    time: "30 minutes ago",
    activityType: "message" as const,
  },
  {
    id: "3",
    title: "Announcement Posted",
    description: "You posted a new announcement for your mentees.",
    time: "1 hour ago",
    activityType: "announcement" as const,
  },
  {
    id: "4",
    title: "Event Scheduled",
    description: "Mentoring session with Alex Rivera scheduled.",
    time: "2 hours ago",
    activityType: "event" as const,
  },
  {
    id: "5",
    title: "New Submission Received",
    description: "Maya Johnson submitted 'Portfolio Website V2'.",
    time: "3 hours ago",
    activityType: "submission" as const,
  },
  {
    id: "6",
    title: "Message from James Wilson",
    description: "James sent you a message about his wireframes.",
    time: "5 hours ago",
    activityType: "message" as const,
  },
  {
    id: "7",
    title: "Event Reminder",
    description: "Don't forget your mentoring session with Lina Patel.",
    time: "1 day ago",
    activityType: "event" as const,
  },
];

export const MOCK_POSTS = [
  {
    id: 1,
    author: { name: "John Doe", role: "Design Mentor" },
    content:
      "Just published a comprehensive guide on typography hierarchy in UI design. Check it out and let me know your thoughts! 🎨",
    timeAgo: "2 hours ago",
    likes: 24,
    comments: 8,
    liked: false,
    saved: false,
    image: null,
  },
  {
    id: 2,
    author: { name: "Sarah Chen", role: "Mentee" },
    content:
      "Excited to share my latest project! Thanks to @John Doe for the amazing feedback on the color palette. This mentorship has been incredible 🙌",
    timeAgo: "5 hours ago",
    likes: 42,
    comments: 15,
    liked: true,
    saved: true,
    image: "gradient",
  },
  {
    id: 3,
    author: { name: "Alex Rivera", role: "Mentee" },
    content:
      "Just completed the UX research module. The insights about user interviews were game-changing for my approach to design problems.",
    timeAgo: "1 day ago",
    likes: 18,
    comments: 4,
    liked: false,
    saved: false,
    image: null,
  },
];
