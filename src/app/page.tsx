"use client";

import { Header } from "@/components/header";
import FirstSection from "@/pages/home/sections/first-section";
import SecondSection from "@/pages/home/sections/second-section";

export default function Home() {
  return (
    <div className="bg-main-wallpaper bg-top bg-no-repeat bg-contain">
      <Header />
      <main className="py-16 flex flex-col gap-28">
        <FirstSection />
        <SecondSection />
      </main>
    </div>
  );
}
