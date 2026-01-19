export interface Tab {
  id: string;
  label: string;
  count?: number;
}

export interface Submission {
  id: string;
  studentName: string;
  lesson?: string;
  assignmentTitle: string;
  description?: string;
  submittedAt: string;
  status: "pending" | "reviewed";
}

export interface RecentActivity {
  id: string;
  title: string;
  description: string;
  time: string;
  activityType: "message" | "submission" | "announcement" | "event";
}
