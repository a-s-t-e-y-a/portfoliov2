import Head from "next/head";
import { motion } from "framer-motion";

import styles from "@/styles/Home.module.css";
import Nav_items from "@/components/landing_page/Navbar";
import Image from "next/image";


import { useIsSmall } from "@/hooks/customQuery";
import Navbar from "@/components/landing_page/Navbar";
import Hero from "@/components/landing_page/Hero";


export default function Home() {

  const small = useIsSmall();
  return (
    <>
      <Navbar/>

      {/* 
         hero section started

      */}

     <Hero/>
    </>
  );
}
