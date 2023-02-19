import Head from "next/head";
import { motion } from "framer-motion";
import { Roboto } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Nav_items from "@/components/landing_page/link";
import Image from "next/image";
const barlow = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const barlow2 = Roboto({
  weight: "100",
  subsets: ["latin"],
});
export const config = {
  unstable_runtimeJS: false,
};
export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center mx-24 my-12">
        <div>
          <motion.img
          whileTap={{scale:1.7}}
            animate={{ x: 100 }}
            transition={{ duration: 1 }}
            height={100}
            width={100}
            src="/logo.png"
          ></motion.img>
        </div>
        <div className="flex justify-center gap-12">
          <motion.div animate={{ x: [300, 0] }} transition={{ duration: 1 }}>
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
          <motion.div animate={{ x: [200, 0] }} transition={{ duration: 1 }}>
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
          <motion.div animate={{ x: [100, 0] }} transition={{ duration: 1 }}>
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
        </div>
      </nav>

      {/* 
         hero section started

      */}
      <div className="flex justify-between items-center mx-64 mt-32">
        <div>
          <h1 className={`${barlow.className} text-4xl`}>
            Love to craft <br></br>
            scalable Web app
          </h1>
          <h1 className={`text-gray-landing text-lg mt-4 mb-12`}>
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
    </>
  );
}
