import Link from "next/link";
import { Roboto } from "@next/font/google";
const barlow2 = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export default function Nav_items({ name, href }) {
  return (
    <div>
      <Link legacyBehavior href={href}>
        <div>
          <a className={` ${barlow2.className} hover:underline hover:cursor-pointer font-semibold`}>
            {name}
          </a>
        </div>
      </Link>
    </div>
  );
}
