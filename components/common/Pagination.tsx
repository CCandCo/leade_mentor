"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2 justify-center mt-6">
      <Button
        size={"icon-sm"}
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        <ChevronLeft size={20} />
      </Button>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        size={"icon-sm"}
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className="text-xl"
      >
        <ChevronRight className="w-10 h-10" />
      </Button>
    </div>
  );
}
