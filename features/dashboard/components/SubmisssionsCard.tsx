"use client";
import Tab from "@/components/common/Tab";
import Card from "@/components/ui/card";
import { FileCheck } from "lucide-react";
import SubmissionItem from "./SubmissionItem";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Submission } from "../types";
import { useRouter } from "next/navigation";

interface SubmisssionsContainerProps {
  submissions: Submission[];
  submissionTabs: { id: string; label: string; count?: number }[];
}

const SubmisssionsCard = ({
  submissions,
  submissionTabs,
}: SubmisssionsContainerProps) => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleViewAll = () => {
    router.push("/mentor/submissions");
  };

  const filteredSubmissions =
    activeTab === "all"
      ? submissions
      : submissions.filter((submission) => submission.status === activeTab);
  return (
    <Card className="lg:col-span-2 flex flex-col gap-6">
      {/* submissions card header */}
      <div className="flex items-center justify-between gap-5 overflow-hidden">
        <div className="flex items-center gap-2">
          <FileCheck className="size-5 text-primary" />
          <h2 className="font-semibold text-foreground leading-none">
            Submissions
          </h2>
        </div>
        <Tab
          tabs={submissionTabs}
          className="max-w-xs md:min-w-fit"
          handleTabChange={handleTabChange}
        />
      </div>
      {/* submissions card body */}
      <div className="space-y-3">
        {filteredSubmissions.slice(0, 5).map((submission, index) => (
          <SubmissionItem
            key={submission.id}
            delay={index * 100}
            assignmentTitle={submission.assignmentTitle}
            studentName={submission.studentName}
            submittedAt={submission.submittedAt}
            status={submission.status}
            activeTab={activeTab}
          />
        ))}
        <div className="animate-fade-in pt-2">
          <Button
            variant="ghost"
            className="w-full text-muted-foreground"
            onClick={handleViewAll}
          >
            View all submissions
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SubmisssionsCard;
