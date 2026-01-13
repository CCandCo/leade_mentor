"use client";
import { USER_ROLE } from "@/features/dashboard/db";
import { dashboardNavigation } from "@/features/dashboard/menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";

interface MobileNavProps {
  toggleMoreMenu: () => void;
  pathname?: string;
}

const MobileNav = ({ toggleMoreMenu, pathname }: MobileNavProps) => {
  const [active, setActive] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const dashboardNavRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = dashboardNavRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const activeButton = container.children[active] as HTMLElement;
    const { offsetLeft, offsetWidth } = activeButton;

    indicator.style.transform = `translateX(${offsetLeft}px)`;
    indicator.style.width = `${offsetWidth}px`;
  }, [active]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-fit bg-background/95 backdrop-blur-lg border-t border-border p-4 z-50 md:hidden">
      <div className="grid grid-cols-5 gap-1 relative" ref={dashboardNavRef}>
        {dashboardNavigation
          .slice(0, 4)
          .map(({ label, href, icon: Icon, role }, index) => {
            const isVisible = role === USER_ROLE;
            const isActive = pathname === href;
            if (isVisible)
              return (
                <Link
                  key={label}
                  href={href}
                  className={`flex flex-col items-center justify-center gap-1 px-3 py-2 text-muted-foreground h-full w-full text-sm  hover:text-foreground rounded-xl hover:bg-gray-100/10 transition-colors duration-300 relative ${
                    isActive ? " text-yellow-300" : "text-muted-foreground"
                  }`}
                  onClick={() => setActive(index)}
                >
                  <Icon className="size-5 mb-1" />
                  <span className="text-[10px]">{label}</span>
                </Link>
              );
          })}
        <button
          className="flex flex-col items-center justify-center gap-1 px-3 py-2 h-full w-full text-sm text-muted-foreground hover:text-foreground"
          onClick={toggleMoreMenu}
        >
          <MoreHorizontal className="size-5 mb-1" />
          <span>More</span>
        </button>

        {/* active indicator */}
        {/* <div className="indicator" ref={indicatorRef}></div> */}

        <div
          className="absolute top-0 left-0 h-1 bg-yellow-300 rounded-t-md transition-all duration-300"
          ref={indicatorRef}
        ></div>
      </div>
    </div>
  );
};

export default MobileNav;
