import { Submission } from "@/features/dashboard/types";
import { getInitials } from "@/lib/utils";
import { ChevronRight, Clock } from "lucide-react";

interface SubmissionCardProps {
  submission: Submission;
  delay: number;
  activeTab: string;
  pagination: number;
}
const SubmissionCard = ({
  submission,
  delay,
  activeTab,
  pagination,
}: SubmissionCardProps) => {
  const {
    assignmentTitle,
    status,
    studentName,
    submittedAt,
    lesson,
    description,
  } = submission;

  const studentInitials = getInitials(studentName);

  const statusStyles = {
    pending: "bg-warning/10 text-warning border-warning/20",
    reviewed: "bg-success/10 text-success border-success/20",
  };

  const statusLabels = {
    pending: "Pending",
    reviewed: "Reviewed",
  };
  return (
    <div
      className="animate-fade-in-left opacity-0 group flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-border/80 hover:shadow-md hover:translate-x-1 transition-all duration-200 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      key={activeTab || pagination}
    >
      {/* avatar */}
      <div className="w-10 h-10 rounded-full bg-linear-to-br from-secondary to-muted hidden md:flex items-center justify-center shrink-0">
        <span className="text-sm font-medium text-foreground">
          {studentInitials}
        </span>
      </div>
      {/*  */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center mb-1">
          <h4 className="font-medium text-foreground truncate">
            {assignmentTitle}
          </h4>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
          <span className="truncate">{studentName}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="truncate">{lesson}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="flex items-center gap-0.5 md:gap-1 truncate">
            <Clock className="w-3.5 h-3.5" />
            {submittedAt}
          </span>
        </div>
        <p className="truncate text-sm text-muted-foreground max-w-7/10">
          {description}
        </p>
      </div>
      {/*  */}
      <span
        className={`
          px-3 py-1 text-xs font-medium rounded-full border shrink-0 ${statusStyles[status]}
        `}
      >
        {statusLabels[status]}
      </span>

      <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block" />
    </div>
  );
};

export default SubmissionCard;
