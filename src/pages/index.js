import Head from "next/head";

import Navbar from "@/components/landing_page/Navbar";
import Hero from "@/components/landing_page/Hero";
import Header from "@/components/landing_page/header";
import Showcase from "@/components/landing_page/ShowCase";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 
         hero section started

      */}

      <Hero />
      <Header/>
      <Showcase/>
    </>
  );
}
