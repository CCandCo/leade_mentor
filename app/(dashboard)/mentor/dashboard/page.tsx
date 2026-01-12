import Card from "@/components/ui/card";
import StatsCard from "@/features/dashboard/components/StatsCard";
import { stats } from "@/features/dashboard/db";
import { FileCheck } from "lucide-react";
import React from "react";

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
        {/* submissions */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCheck className="size-5 text-primary" />
              <h2 className="font-semibold">Submissions</h2>
            </div>

            
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Page;
