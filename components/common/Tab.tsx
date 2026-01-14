"use client";
import type { Tab } from "@/features/dashboard/types";
import { useLayoutEffect, useRef, useState } from "react";

interface TabProps {
  tabs: Tab[];
  handleTabChange: (tabId: string) => void;
  className?: string;
}
const Tab = ({ tabs, className, handleTabChange }: TabProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const currentTab = tabRef.current?.children[activeTabIndex] as HTMLElement;
    const indicator = indicatorRef.current;

    if (!currentTab || !indicator) return;

    const { offsetLeft, offsetWidth, offsetHeight } = currentTab;
    indicator.style.width = `${offsetWidth}px`;
    indicator.style.height = `${offsetHeight}px`;
    indicator.style.transform = `translateX(${offsetLeft - 5}px)`;
  }, [activeTabIndex]);

  const handleTabClick = (index: number, id: string) => {
    setActiveTabIndex(index);
    handleTabChange(id);
  };

  return (
    <div
      className={`flex items-center gap-1 p-1 bg-secondary rounded-lg relative overflow-x-auto scrollbar-none ${className}`}
      ref={tabRef}
    >
      {tabs.map(({ label, count, id }, index) => {
        const isActive = index === activeTabIndex;
        return (
          <button
            key={label}
            onClick={() => handleTabClick(index, id)}
            className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors z-10 flex items-center gap-2 cursor-pointer ${
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
            {count && (
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}

      {/* active tab indicator */}
      <div
        className="absolute h-0 w-0 top-1 bottom-1 bg-card rounded-md border border-border/50 transition-all duration-300"
        ref={indicatorRef}
      />
    </div>
  );
};

export default Tab;
