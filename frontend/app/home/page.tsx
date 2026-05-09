import { Timer } from "../ui/home/timer"
import { DashboardLayout } from "../dashboard/layout"
import Header from "../ui/home/header";
import SessionHistory from "../ui/home/sessionHistory";

export default function HomePage() {
  return (
    <>
    <DashboardLayout>
    <div className="w-full h-full flex flex-col justify-around">
      <Header/>
          <Timer/>
          <SessionHistory/>
    </div>
    </DashboardLayout>
    </>
  );
}
