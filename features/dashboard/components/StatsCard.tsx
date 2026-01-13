"use client";
import { FileCheck, Star, TrendingUp, Users, type LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: string;
  delay?: number;
}
const StatsCard = ({
  title,
  value,
  delay,
  icon,
  change,
  changeType = "neutral",
}: StatsCardProps) => {
  const getChangeStyles = () => {
    switch (changeType) {
      case "positive":
        return "bg-success/10 text-success";
        break;
      case "negative":
        return "bg-destructive/10 text-destructive";
        break;
      case "neutral":
        return "bg-muted text-muted-foreground";
        break;
    }
  };

  const iconMap: { [key: string]: LucideIcon } = {
    mentees: Users,
    reviews: FileCheck,
    rating: Star,
    engagement: TrendingUp,
  }

  const Icon = iconMap[icon];

  return (
    <div
      className="animate-fade-in-up hover:-translate-y-0.5 bg-card border border-border/50 hover:border-border/80 rounded-lg p-6 transition-all duration-200 ease-in-out opacity-0"
      style={{ animationDelay: `${delay || 0}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="size-5 text-primary" />
        </div>
        {change && (
          <span
            className={`${getChangeStyles()} text-xs font-medium px-2 py-0.5 rounded-full`}
          >
            {change}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-1">{title}</p>
      <p className="text-3xl font-semibold text-foreground">{value}</p>
    </div>
  );
};

export default StatsCard;
