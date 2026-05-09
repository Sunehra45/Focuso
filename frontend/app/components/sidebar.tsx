"use client";
import { Clock, BarChart2, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }: any) {
  const menuItems = [
    { name: "Timer", icon: Clock, link: "/home" },
    { name: "Analytics", icon: BarChart2, link: "/analytics" },
    { name: "Profile", icon: User, link: "/profile" },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="w-full h-12 gap-8 md:gap-3  bg-card   md:bg-transparent  flex fixed bottom-0 md:w-20 md:h-screen  md:flex-col items-center justify-center md:py-4 md:space-y-4 z-50 ">
        {menuItems.map((item) => {
          const isActive = pathname === item.link;
          return (
            <Link
              key={item.name}
              href={item.link}
              className={`w-8 h-8  relative group flex items-center justify-center md:w-12 md:h-12 z-50 rounded transition-colors
              ${isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}
            `}
            >
              <item.icon className="text-white w-6 h-6" />

              <span className="absolute left-full ml-3 px-2 py-1 rounded bg-card text-white text-sm opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div style={{}}>{children}</div>
    </>
  );
}
