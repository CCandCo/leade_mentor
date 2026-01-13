import Card from "@/components/ui/card";
import { Clock } from "lucide-react";
import { RecentActivity } from "../types";
import { ActivityItem } from "./ActivityItem";

interface RecentActivitiesProps {
  recentActivities: RecentActivity[];
}

const RecentActivities = ({ recentActivities }: RecentActivitiesProps) => {
  return (
    <Card className="">
      <div className="flex items-center justify-between gap-5 overflow-hidden mt-1">
        <div className="flex items-center gap-2">
          <Clock className="size-5 text-primary" />
          <h2 className="font-semibold text-foreground leading-none">
            Recent Activities
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-1 divide-y divide-border/50 mt-5">
        {recentActivities.slice(0, 5).map((activity, index) => (
          <ActivityItem
            key={index}
            description={activity.description}
            time={activity.time}
            title={activity.title}
            delay={index * 100}
            activityType={activity.activityType}
          />
        ))}
      </div>
    </Card>
  );
};

export default RecentActivities;
