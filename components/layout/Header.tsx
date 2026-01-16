"use client";
import { headerConfig } from "@/lib/utils";
import { Bell, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";
import { USER_NAME, USER_ROLE } from "@/features/dashboard/db";
import SearchInput from "../common/SearchInput";

interface HeaderProps {
  toggleSidebar?: () => void;
}
const Header = ({ toggleSidebar }: HeaderProps) => {
  const pathname = usePathname();
  const { title, subtitle } = headerConfig(pathname);

  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full min-h-14 md:min-h-16 border-b border-border bg-background/50 z-10 backdrop-blur-sm flex items-center justify-between px-4 md:px-6">
      {/* left side menu/title */}
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-md hover:bg-gray-100/10 transition-colors duration-300 lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="size-5" />
        </button>

        <div key={pathname} className="animate-fade-in-down">
          <h1 className="text-lg md:text-xl font-semibold text-foreground truncate ">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xs md:text-sm text-muted-foreground truncate hidden sm:block">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* right side- */}
      <div className="flex items-center gap-2 md:gap-3 shrink-0">
        {/* search */}
        <SearchInput className="hidden lg:block" />

        <Button variant="ghost" size="icon-sm" className="lg:hidden">
          <Search className="w-5 h-5" />
        </Button>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon-sm"
            className="relative"
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </Button>
          {/* <NotificationPanel 
              open={notificationsOpen} 
              onClose={() => setNotificationsOpen(false)} 
            /> */}
        </div>

        <button className="flex items-center gap-2 md:gap-3 md:pl-3 md:pr-4 py-1.5 rounded-lg hover:bg-secondary transition-colors">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary/80 to-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-semibold">
              JD
            </span>
          </div>
          <div className="hidden md:block text-left">
            <p className="text-sm font-medium text-foreground">{USER_NAME}</p>
            <p className="text-xs capitalize text-muted-foreground">
              {USER_ROLE}
            </p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
