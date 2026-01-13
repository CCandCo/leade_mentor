"use client";
import Header from "@/components/layout/Header";
import MobileNav from "@/components/layout/MobileNav";
import Sidebar from "@/components/layout/Sidebar";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(true);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileSidebar = () => {
    setMobileCollapsed(!mobileCollapsed);
  };

  useEffect(() => {
    const handleCloseSidebar = () => {
      setMobileCollapsed(true);
    };
    handleCloseSidebar();
  }, [pathname]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        collapsed={collapsed}
        mobileCollapsed={mobileCollapsed}
        handlToggleSidebar={toggleSidebar}
        handleToggleMobileSidebar={toggleMobileSidebar}
      />
      <div className="transition-all duration-200 w-screen flex-1 flex flex-col">
        <Header toggleSidebar={toggleMobileSidebar} />
        <main
          className="animate-fade-in-up p-4 md:p-6 pb-30 md:pb-0 overflow-y-auto scrollbar-none"
          key={pathname}
        >
          {children}
        </main>
        <MobileNav toggleMoreMenu={toggleMobileSidebar} pathname={pathname} />
      </div>
    </div>
  );
};

export default Layout;
