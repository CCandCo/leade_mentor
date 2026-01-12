"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(true);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const update = () => {
      setCollapsed(true);
    };

    update();
  }, [pathname]);

  return (
    <div className="flex overflow-hidden">
      <Sidebar collapsed={collapsed} handlCloseSidebar={toggleSidebar} />
      <div className="transition-all duration-200 w-screen min-h-screen flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="animate-fade-in-up p-4 md:p-6" key={pathname}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
