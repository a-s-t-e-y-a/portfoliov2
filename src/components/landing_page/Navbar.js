import { useIsMedium } from "@/hooks/customQuery";
import { Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Link from 'next/link'
const barlow = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const barlow2 = Roboto({
  weight: "100",
  subsets: ["latin"],
});

export default function Navbar() {
  const medium = useIsMedium();
  return (
    <nav className="md:flex md:justify-between md:items-center xl:mx-32 mx-12 md:mx-8 my-12">
        <div className="">
          {medium ? (
            <img
              src="/logo.png"
              className="h-16 w-20"
            ></img>
          ) : (
            <></>
          )}
        </div>
        {medium ? (
          <div className="flex justify-center ">
            <zdiv animate={{ x: [400, 0] }} transition={{ duration: 1 }}>
              <div>
                <Link
                  href="/blogs"
                  className={`${styles.cta2} mt-12 flex text-xs items-center`}
                >
                  <span>Blogs</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
              </div>
            </zdiv>
            <zdiv animate={{ x: [300, 0] }} transition={{ duration: 1 }}>
              <div>
                <a
                  href="#"
                  className={`${styles.cta2} mt-12 flex text-xs items-center`}
                >
                  <span>About</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </zdiv>
            <zdiv animate={{ x: [200, 0] }} transition={{ duration: 1 }}>
              <div>
                <a
                  href="#"
                  className={`${styles.cta2} mt-12 flex text-xs items-center`}
                >
                  <span>Contact</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </zdiv>
          </div>
        ) : (
          <div className="flex justify-center ">
            <div>
              <div>
                <a
                  href="#"
                  className={`${styles.cta2} mt-12 flex text-xs items-center`}
                >
                  <span>Blogs</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div>
                <a
                  href="#"
                  className={`${styles.cta2} mt-12 flex text-xs items-center`}
                >
                  <span>About</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div>
                <a
                  href="#"
                  className={`${styles.cta2} mt-12 flex text-xs items-center`}
                >
                  <span>Contact</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}
