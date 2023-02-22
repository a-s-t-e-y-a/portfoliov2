import {motion } from "framer-motion"
import { Roboto } from "@next/font/google";
const barlow = Roboto({
    weight: "700",
    subsets: ["latin"],
  });
  const barlow2 = Roboto({
    weight: "100",
    subsets: ["latin"],
  });
export default function Header() {
  return (
    <header 
    className={`${barlow2.className} object-contain selection:text-black-landing selection:bg-white-landing text-6xl flex justify-between items-center  text-white-landing h-screen  overflow-hidden`}>
      <div className=" relative z-30 p-2 text-white md:ml-12 rounded-xl">
       Man is still <br></br>the most <br></br>extraordinary <br></br>computer<br></br> of all
       <h1 className={`${barlow2.className} md:mr-12 text-lg mt-12`}>
        Jhon F kenndey
       </h1>
      </div>
      <div className="hidden md:block relative z-30 p-5 text-white mr-24 rounded-xl">
       Bibliophile<br></br>
       Cinephile<br></br>
       Coder<br></br>
      </div>
      <video
        autoPlay
        loop
        muted
        className="opacity-90 object-cover absolute z-10 w-full h-full"
      >
        <source
          src="/turntable.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  );
}
