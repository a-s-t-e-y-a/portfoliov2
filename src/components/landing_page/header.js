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
    <motion.header 
    class={`${barlow2.className} selection:text-black-landing selection:bg-white-landing text-7xl relative flex items-center justify-between text-white-landing h-screen  overflow-hidden`}>
      <div class=" relative z-30 p-5 text-white ml-12 rounded-xl">
       Man is still <br></br>the most <br></br>extraordinary <br></br>computer<br></br> of all
       <h1 className={`${barlow2.className} mr-12 text-lg mt-12`}>
        Jhon F kenndey
       </h1>
      </div>
      <div class="relative z-30 p-5 text-white mr-24 rounded-xl">
       Bibliophile<br></br>
       Cinephile<br></br>
       Coder<br></br>
      </div>
      <video
        autoPlay
        loop
        muted
        class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="/turntable.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </motion.header>
  );
}
