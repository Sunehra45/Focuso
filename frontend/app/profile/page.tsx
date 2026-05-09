"use client";
import { DashboardLayout } from "../dashboard/layout";
import { isAuthenticated } from "../utils/auth";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import ProfileCard from "../ui/cards/profilecard";
import Weekcard from "../ui/cards/weekcard";

export default function ProfilePage() {

  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect("/auth/login");
    }
  }, []);

  return (
    <DashboardLayout>
      <main className="min-h-screen  flex  items-center md:px-4  ">
        <section className="mx-auto w-[95vw]  h-screen py-2 px-4 flex flex-col items-center justify-center md:flex-row gap-4 md:h-[60vh] md:w-[60vw] ">
      <ProfileCard/>
        <Weekcard/>
        </section>
      </main>
    </DashboardLayout>
  );
}
