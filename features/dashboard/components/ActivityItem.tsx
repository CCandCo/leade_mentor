"use client";
import {
  Calendar,
  CheckCircle,
  LucideIcon,
  Megaphone,
  MessageSquare,
} from "lucide-react";

interface ActivityItemProps {
  activityType: string;
  title: string;
  description: string;
  time: string;
  delay?: number;
}

export function ActivityItem({
  title,
  description,
  time,
  delay,
  activityType,
}: ActivityItemProps) {
  const iconMap: { [key: string]: LucideIcon } = {
    submission: CheckCircle,
    message: MessageSquare,
    announcement: Megaphone,
    event: Calendar,
  };

  const activityTypeStyles: { [key: string]: string } = {
    submission: "bg-success/10 text-success",
    message: "bg-primary/10 text-primary",
    announcement: "bg-warning/10 text-warning",
    event: "bg-primary/10 text-primary",
  };

  const Icon = iconMap[activityType];
  const iconStyle = activityTypeStyles[activityType];
  return (
    <div
      className="animate-fade-in-up opacity-0 flex items-start gap-4 py-4 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${iconStyle}`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground text-sm truncate">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5 truncate">
          {description}
        </p>
      </div>
      <span className="text-xs text-muted-foreground shrink-0">{time}</span>
    </div>
  );
}
