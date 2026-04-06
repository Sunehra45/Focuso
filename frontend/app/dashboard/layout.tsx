import Sidebar from "../components/sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-screen h-screen flex items-center justify-center ">
        {children}
      </main>
    </div>
  );
};