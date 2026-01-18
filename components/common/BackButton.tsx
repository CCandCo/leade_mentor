"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <Button
      variant={"ghost"}
      size={"icon"}
      aria-label="Back"
      onClick={handleClick}
    >
      <ArrowLeft />
    </Button>
  );
};

export default BackButton;
