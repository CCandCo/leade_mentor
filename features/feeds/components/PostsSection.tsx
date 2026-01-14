"use client";
import Tab from "@/components/common/Tab";
import { FEEDS_TABS } from "@/features/dashboard/consts";
import { useState } from "react";
import { Post } from "../types";
import PostCard from "./PostCard";

interface PostsSectionProps {
  posts: Post[];
}

const PostsSection = ({ posts }: PostsSectionProps) => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  return (
    <section className="w-full">
      <div className="flex justify-center">
        <Tab tabs={FEEDS_TABS} handleTabChange={handleTabChange} />
      </div>

      <div className="space-y-4 mb-4 mt-4">
        {posts.map((post, index) => (
          <PostCard
            post={post}
            key={index}
            activeTab={activeTab}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default PostsSection;
