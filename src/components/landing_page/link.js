import Link from "next/link";

export default function Nav_items({ name, href }) {
  return (
    <div>
      <Link legacyBehavior href={href}>
        <div>
          <a className="hover:underline hover:cursor-pointer  font-light">
            {name}
          </a>
        </div>
      </Link>
    </div>
  );
}
