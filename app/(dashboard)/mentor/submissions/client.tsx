"use client";
import Tab from "@/components/common/Tab";
import { useMemo, useState } from "react";
import { Submission } from "@/features/dashboard/types";
import SearchInput from "@/components/common/SearchInput";
import Pagination from "@/components/common/Pagination";
import SubmissionCard from "@/features/submissions/components/SubmissionCard";

interface SubmisssionsContainerProps {
  submissions: Submission[];
  submissionTabs: { id: string; label: string; count?: number }[];
  pageParam?: string;
}

const VIEW_LIMIT = 5;

const SubmissionsClient = ({
  submissions,
  submissionTabs,
  pageParam,
}: SubmisssionsContainerProps) => {
  const totalPages = Math.ceil(submissions.length / VIEW_LIMIT);
  const pageNum = Number(pageParam ?? 1);

  const currentPage = Math.min(Math.max(pageNum, 1), totalPages);

  const startIndex = (currentPage - 1) * VIEW_LIMIT;
  const endIndex = startIndex + VIEW_LIMIT;

  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const filterSubmissions = (submissions: Submission[], activeTab: string) => {
    const filteredSubmissions =
      activeTab === "all"
        ? submissions
        : submissions.filter((submission) => submission.status === activeTab);

    return filteredSubmissions;
  };

  const visibleSubmissions = useMemo(
    () => filterSubmissions(submissions, activeTab),
    [activeTab, submissions],
  );

  return (
    <div className="max-w-6xl flex flex-col gap-5 mx-auto space-y-6">
      {/* submissions card header */}
      <div className="flex flex-col sm:flex-row md:items-center md:justify-between gap-4">
        <Tab
          tabs={submissionTabs}
          className="max-w-xs md:min-w-fit"
          handleTabChange={handleTabChange}
        />
        <SearchInput
          placeholder="Search submissions..."
          className="ml-1 md:ml-0 md:mr-1"
        />
      </div>
      {/* submissions card body */}
      <div className="space-y-3">
        {visibleSubmissions
          .slice(startIndex, endIndex)
          .map((submission, index) => (
            <SubmissionCard
              key={submission.id}
              submission={submission}
              delay={index * 100}
              activeTab={activeTab}
              pagination={currentPage}
            />
          ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default SubmissionsClient;
