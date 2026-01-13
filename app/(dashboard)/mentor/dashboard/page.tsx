import RecentActivities from "@/features/dashboard/components/RecentActivities";
import StatsCard from "@/features/dashboard/components/StatsCard";
import SubmisssionsCard from "@/features/dashboard/components/SubmisssionsCard";
import {
  RECENT_ACTIVITIES,
  stats,
  SUBMISSION_TABS,
  submissions,
} from "@/features/dashboard/db";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ change, changeType, icon, title, value }, index) => (
          <StatsCard
            key={title}
            icon={icon}
            title={title}
            value={value}
            change={change}
            changeType={changeType}
            delay={index * 100}
          />
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* submissions card */}
        <SubmisssionsCard
          submissionTabs={SUBMISSION_TABS}
          submissions={submissions}
        />
        <RecentActivities recentActivities={RECENT_ACTIVITIES} />
      </section>
    </div>
  );
};

export default Page;
