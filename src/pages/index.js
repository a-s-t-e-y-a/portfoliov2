import Head from "next/head";

import Navbar from "@/components/landing_page/Navbar";
import Hero from "@/components/landing_page/Hero";
import Header from "@/components/landing_page/header";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* 
         hero section started

      */}

      <Hero />
      <Header/>
    </>
  );
}
