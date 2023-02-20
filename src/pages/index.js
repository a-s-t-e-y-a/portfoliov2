import Head from "next/head";
import { motion } from "framer-motion";
import { Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav_items from "@/components/landing_page/link";
import Image from "next/image";

import { useIsMedium } from "@/hooks/customQuery";
import { useIsSmall } from "@/hooks/customQuery";
const barlow = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const barlow2 = Roboto({
  weight: "100",
  subsets: ["latin"],
});

export default function Home() {
  const medium = useIsMedium();
  const small = useIsSmall();
  return (
    <>
      <nav className="md:flex md:justify-between md:items-center xl:mx-32 mx-12 md:mx-8 my-12">
        <div className="">
          {medium ? (
            <motion.img
              whileTap={{ scale: 1.7 }}
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              src="/logo.png"
              className="h-16 w-20"
            ></motion.img>
          ) : (
            <></>
          )}
        </div>
        {!small ? (
          <div className="flex justify-center ">
            <div >
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
            <div >
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
            <div >
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
        ) : (
          <div className="flex justify-center ">
            <motion.div animate={{ x: [400, 0] }} transition={{ duration: 1 }}>
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
            </motion.div>
            <motion.div animate={{ x: [300, 0] }} transition={{ duration: 1 }}>
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
            </motion.div>
            <motion.div animate={{ x: [200, 0] }} transition={{ duration: 1 }}>
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
            </motion.div>
          </div>
        )}

       
      </nav>

      {/* 
         hero section started

      */}

      {small?(
        <div className="md:flex md:justify-between md:items-center xl:mx-64 xl:my-32 md:mx-12 md:my-12">
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: [1000, 0] }}
          transition={{ duration: 1.6 }}
          className="m-4"
        >
          <h1 className={`${barlow.className} text-4xl`}>
            Love to craft <br></br>
            scalable Web app
          </h1>
          <h1 className={`text-gray-landing md:text-lg text-md mt-4 mb-12`}>
            Hi I'm Krishna, a passionate Full stack developer.<br></br>
            Based in the India
          </h1>
          <div>
            <a href="#" className={`${styles.cta} mt-12 flex items-center`}>
              <span>See all my work</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
          <div>
            <div className="flex text-gray-landing gap-8 mt-12">
              <a>Github</a>
              <h1>/</h1>
              <a>Twitter</a>
              <h1>/</h1>
              <a>Reddit</a>
            </div>
          </div>
        </motion.div>
        <div>
          <div className="flex">
            <div>
              <motion.img
                initial={{ x: 1000 }}
                animate={{ x: [1000, 0] }}
                transition={{ duration: 1.6 }}
                className={styles.imge}
                src="/tuxpi.com.1676797479.jpg"
              ></motion.img>
            </div>
          </div>
        </div>
      </div>
      ):( <div className="md:flex md:justify-between md:items-center xl:mx-64 xl:my-32 md:mx-12 md:my-12">
      <div
        initial={{ y: 1000 }}
        animate={{ y: [1000, 0] }}
        transition={{ duration: 1.6 }}
        className="m-4"
      >
        <h1 className={`${barlow.className} text-4xl`}>
          Love to craft <br></br>
          scalable Web app
        </h1>
        <h1 className={`text-gray-landing md:text-lg text-md mt-4 mb-12`}>
          Hi I'm Krishna, a passionate Full stack developer.<br></br>
          Based in the India
        </h1>
        <div>
          <a href="#" className={`${styles.cta} mt-12 flex items-center`}>
            <span>See all my work</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        </div>
        <div>
          <div className="flex text-gray-landing gap-8 mt-12">
            <a>Github</a>
            <h1>/</h1>
            <a>Twitter</a>
            <h1>/</h1>
            <a>Reddit</a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <div>
            <img
              initial={{ x: 1000 }}
              animate={{ x: [1000, 0] }}
              transition={{ duration: 1.6 }}
              className={styles.imge}
              src="/tuxpi.com.1676797479.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>)}
      
    </>
  );
}
