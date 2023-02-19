import Head from "next/head";
import Image from "next/image";
import { Barlow, Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav_items from "@/components/landing_page/link";
const barlow = Barlow({
  weight: "500",
  subsets: ["latin"],
});

console.log(barlow);
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav>
        <div className="flex justify-between gap-8 w-full">
          <div>
            <div className="flex justify-between">
              <Nav_items href="#" name="Project[12]" />
              <Nav_items href="#" name="Blogs[12]" />
            </div>
            <div className="mt-28 ml-24 w-full flex gap-96 border-b-2 pb-12">
              <div>
                <h1
                  className={`${barlow.className} text-black-landing font-bold mb-4 text-3xl`}
                >
                  Fullstack Developer
                </h1>
                <h1 className="text-sm font-light">
                  Designing and developing <br></br>
                  end-to-end web applications<br></br>
                  that are efficient, scalable,<br></br>
                  and user-friendly.
                </h1>
              </div>
              <div>
                <h1
                  className={`${barlow.className} text-black-landing font-bold mb-4 text-3xl`}
                >
                  Krishna seth
                </h1>
                <h1 className="text-sm font-light">
                  Coder , Bibliophile , Cinephile<br></br>
                  <a
                    className="text-pruple-landing"
                    href="https://letterboxd.com/krishnoit/films/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Checkout my letterboxd list
                  </a>
                  <br></br>
                  <a
                    className="text-red-landing"
                    href="https://letterboxd.com/krishnoit/films/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Checkout my Goodreads list
                  </a>
                  <br></br>
                </h1>
              </div>
            </div>
            <div className="mt-24 ml-24">
              <div>
                <h1
                  className={`${barlow.className} text-black-landing font-light mb-4 text-3xl`}
                >
                  Experienced full stack web developer with<br></br>
                  expertise in{" "}
                  <span
                    className={`${barlow.className} bg-black-landing p-1 rounded-lg text-yellow-landing`}
                  >
                    Node.js
                  </span>{" "}
                  ,{" "}
                  <span
                    className={`${barlow.className} bg-black-landing p-1 rounded-lg text-yellow-landing`}
                  >
                    JavaScript
                  </span>
                  ,{" "}
                  <span
                    className={`${barlow.className} bg-black-landing p-1 rounded-lg text-yellow-landing`}
                  >
                    React
                  </span>
                  , and{" "}
                  <span
                    className={`${barlow.className} bg-black-landing p-1 rounded-lg text-yellow-landing`}
                  >
                    AWS
                  </span>
                  .<br></br>
                  Passionate about building high-quality,<br></br>
                  scalable applications and delivering exceptional <br></br>
                  user experiences.<br></br>
                </h1>
              </div>
            </div>

            <div>
              <img src="/6729326-removebg-preview.png" className="mt-[16rem]"></img>
            </div>
          </div>

          <div className="bg-black-landing h-screen w-1/3">
            <div className="text-yellow-landing flex  items-center gap-8">
              <Nav_items href="#" name="instagram" />
              <Nav_items href="#" name="Github" />
              <Nav_items href="#" name="reddit" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
