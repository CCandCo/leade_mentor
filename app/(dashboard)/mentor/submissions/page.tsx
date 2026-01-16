import { SUBMISSION_TABS } from "@/features/dashboard/consts";
import SubmissionsClient from "./client";
import { submissions } from "@/features/dashboard/db";

interface PageProps {
  searchParams: Promise<{ page: string }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { page } = await searchParams;
  return (
    <div>
      <SubmissionsClient
        submissionTabs={SUBMISSION_TABS}
        submissions={submissions}
        pageParam={page}
      />
    </div>
  );
};

export default Page;
