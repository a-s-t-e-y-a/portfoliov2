import { Roboto } from "@next/font/google";
import Image from "next/image";
const barlow2 = Roboto({
  weight: "100",
  subsets: ["latin"],
});
const barlow = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const barlow3 = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export default function Showcase() {
  return (
    <>
      <div className="mt-32 mb-32 p-4 lg:mx-12">
        <h1
          className={`${barlow3.className} text-5xl md:text-7xl lg:text-9xl  `}
        >
          My projects
        </h1>
        <div className="flex text-gray-landing gap-4 md:text-xl lg:text-2xl lg:mt-4">
          {" "}
          <a>Github</a>
        </div>
      </div>
      <div className="mb-12">
        <div className="flex justify-between items-center mx-32 py-12 hover:bg-black-landing hover:text-white-landing px-4 ease-in duration-300 border-b-2">
          <div>00</div>
          <div className="text-5xl">Project 1</div>
          <div className="text-2xl">Blog</div>
          <div className="text-2xl">Link</div>
          <div className="text-2xl">Github</div>
        </div>
        <div className="flex justify-between items-center mx-32 py-12 hover:bg-black-landing hover:text-white-landing px-4 ease-in duration-300 border-b-2">
          <div>00</div>
          <div className="text-5xl">Project 1</div>
          <div className="text-2xl">Blog</div>
          <div className="text-2xl">Link</div>
          <div className="text-2xl">Github</div>
        </div>
      </div>
    </>
  );
}
