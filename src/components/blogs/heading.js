import Link from "next/link";

export default function Heading() {
  return (
    <>
      <div className="my-24">
        <div className="flex justify-center text-gray-landing mb-4">
          <Link href="/">Home</Link>
        </div>
        <div className=" text-7xl flex justify-center font-medium mb-12">
          Blogs
        </div>
        <div className="flex justify-center gap-4 text-gray-landing">
          <div>
            <a href="https://github.com/a-s-t-e-y-a">Github</a>
          </div>
          <div>
            <a href="https://reddit.com/krishnoit">Reddit</a>
          </div>
          <div>
            <a href="https://instagram.com/krishnoit">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}
