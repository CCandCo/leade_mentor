"use client";
import { LucideIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function SectionHeader({
  title,
  subtitle,
  icon: Icon,
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 animate-fade-in">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
      {/* {action && (
        <Button variant="ghost" size="sm" onClick={action.onClick}>
          {action.label}
        </Button>
      )} */}
    </div>
  );
}
