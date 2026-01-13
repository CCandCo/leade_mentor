"use client";
import { USER_ROLE } from "@/features/dashboard/db";
import {
  dashboardNavigation,
  otherNavigation,
} from "@/features/dashboard/menu";
import { ChevronLeft, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarProps {
  collapsed?: boolean;
  mobileCollapsed?: boolean;
  handlToggleSidebar?: () => void;
  handleToggleMobileSidebar?: () => void;
}

const Sidebar = ({
  collapsed,
  mobileCollapsed,
  handlToggleSidebar,
  handleToggleMobileSidebar,
}: SidebarProps) => {
  const pathname = usePathname();

  return (
    <>
      {/* DESKTOP VIEW */}
      <aside
        className={`h-screen border-r border-muted hidden lg:flex flex-col relative
         bg-background ${
           collapsed ? "w-20" : "w-60"
         } transition-all duration-300`}
      >
        {/* header */}
        <div className="h-14 md:h-16 border-b flex items-center">
          <Link href="/dashboard" className={`p-2  flex items-center`}>
            <Image
              src="/logo.png"
              alt="LeaDe Logo"
              width={70}
              height={0}
              className="min-w-17.5 h-auto object-contain"
            />
            <h1
              className={`text-md font-semibold -ml-4 ${
                collapsed
                  ? "opacity-0 pointer-events-auto"
                  : "opacity-100 pointer-events-auto"
              } transition-opacity duration-300`}
            >
              LeaDe
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex-1 px-4 py-6">
          {dashboardNavigation.map(({ label, href, icon: Icon, role }) => {
            const isVisible = role === USER_ROLE;
            if (isVisible)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md text-foreground hover:bg-gray-100/10 mb-2 hover:translate-x-0.5 active:scale-90 transition-all duration-300 ${
                    pathname === href ? "bg-gray-100/10 text-yellow-300" : ""
                  }`}
                >
                  <Icon className="size-5 min-w-5" />
                  <span
                    className={`${
                      collapsed
                        ? "opacity-0 pointer-events-auto"
                        : "opacity-100 pointer-events-auto"
                    } transition-opacity duration-300`}
                  >
                    {label}
                  </span>
                </Link>
              );
          })}
        </nav>

        {/* footer */}
        <div className="px-4 py-6 border-t">
          {otherNavigation.map(({ label, href, icon: Icon, role }) => {
            const isVisible = role === USER_ROLE;
            if (isVisible)
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md text-foreground hover:bg-gray-100/10 mb-2 hover:translate-x-0.5 active:scale-90 transition-all duration-300 ${
                    pathname === href ? "bg-gray-100/10 text-yellow-300" : ""
                  }`}
                >
                  <Icon className="size-5 min-w-5" />
                  <span
                    className={`${
                      collapsed
                        ? "opacity-0 pointer-events-auto"
                        : "opacity-100 pointer-events-auto"
                    } transition-opacity duration-300`}
                  >
                    {label}
                  </span>
                </Link>
              );
          })}
          {/* logout btn */}
          <button className="text-destructive flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100/10 w-full mt-2 cursor-pointer active:scale-90 hover:translate-x-0.5 transition-all">
            <LogOut className="size-5 min-w-5 min-h-5" />
            <span
              className={`${
                collapsed ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
            >
              Logout
            </span>
          </button>
        </div>

        {/* collapse btn */}
        <button
          className="w-8 h-8 p-1 border border-border rounded-full absolute -right-4 top-30 flex items-center justify-center bg-background cursor-pointer"
          onClick={handlToggleSidebar}
        >
          <ChevronLeft
            className={` ${
              collapsed ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          />
        </button>
      </aside>

      {/* MOBILE VIEW */}
      <div
        className={`absolute inset-0 w-full h-full z-50 transition-all overflow-hidden lg:hidden ${
          !mobileCollapsed ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed w-full h-screen inset-0 bg-black/10 backdrop-blur-md transition-opacity duration-300 ${
            mobileCollapsed ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleToggleMobileSidebar}
        />
        <aside
          className={`h-screen border-r border-muted flex flex-col relative w-60
         bg-background transition-all duration-300 rounded-r-lg ${
           mobileCollapsed ? "-translate-x-full" : "translate-x-0"
         }`}
        >
          {/* header */}
          <Link
            href="/dashboard"
            className="px-6 py-4 border-b flex items-center"
          >
            <h1 className="text-2xl font-bold text-foreground">LeaDe</h1>
          </Link>

          {/* nav */}
          <nav className="flex-1 px-4 py-6">
            {dashboardNavigation.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-foreground hover:bg-gray-100/10 mb-2 hover:translate-x-0.5 active:scale-90 transition-all duration-300  ${
                  pathname === href ? "bg-gray-100/10 text-yellow-300" : ""
                }`}
              >
                <Icon />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* footer */}
          <div className="px-6 py-4 border-t">
            {otherNavigation.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-foreground hover:bg-gray-100/10 mb-2 hover:translate-x-0.5 active:scale-90 transition-all duration-300 ${
                  pathname === href ? "bg-gray-100/10 text-yellow-300" : ""
                }`}
              >
                <Icon className="size-5" />
                <span>{label}</span>
              </Link>
            ))}
            {/* logout btn */}
            <button className="text-destructive flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100/10 w-full mt-2 cursor-pointer active:scale-90 hover:translate-x-0.5 transition-all">
              <LogOut />
              <span>Logout</span>
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
