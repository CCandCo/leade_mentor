import { SectionHeader } from "@/components/common/SectionHeader";
import RecentActivities from "@/features/dashboard/components/RecentActivities";
import StatsCard from "@/features/dashboard/components/StatsCard";
import SubmisssionsCard from "@/features/dashboard/components/SubmisssionsCard";
import { QUICK_ACTIONS, SUBMISSION_TABS } from "@/features/dashboard/consts";
import { RECENT_ACTIVITIES, stats, submissions } from "@/features/dashboard/db";
import Link from "next/link";

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

      {/* quick actions */}
      <section>
        <SectionHeader
          title="Quick Actions"
          subtitle="Common tasks at your fingertips"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_ACTIONS.map(({ href, icon: Icon, label }) => (
            <Link
              href={href}
              key={label}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{label}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
