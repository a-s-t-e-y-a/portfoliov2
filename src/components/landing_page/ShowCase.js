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
      <div className="mt-8 mb-4 p-4 lg:mx-12">
        <h1
          className={`${barlow3.className} text-5xl md:text-7xl lg:text-9xl  `}
        >
          About projects
        </h1>
        <div className="flex text-gray-landing gap-4 md:text-xl lg:text-2xl lg:mt-4">
          {" "}
          <a>Latest</a>
          <h1>/</h1>
          <a>Special mention</a>
          <h1>/</h1>
          <a>Github</a>
        </div>
      </div>
      <div className="bg-white-landing md:grid md:grid-cols-2 md:grid-flow-row md:gap-12 md:gap-y-12 p-4 lg:mx-12 mb-24">
        <div className=" ease-in duration-300 hover:bg-black-landing  hover:rounded-lg hover:text-white-landing  rounded-sm ">
          <div className="p-4 ">
            <div className="mb-12">
                <Image width={1200} height={800} className="rounded-lg" src="/konstantin-kozyrkov-7.jpg"></Image >
            </div>
            <h1
              className={`${barlow3.className} text-4xl  selection:bg-white-landing selection:text-black-landing`}
            >
              The anecdotes and narratives of Krishna's life a
            </h1>
            <h2 className="mt-8 text-lg font-bold">Description</h2>
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Krishna's childhood illustrates the Hindu concept of Lila,
                playing for fun and enjoyment and not for sport or gain. His
                interaction with the gopis at the rasa dance
              </h3>
            </div>
            <h2 className="mt-8 text-lg font-bold">Techstack</h2>
            <div className="grid grid-cols-5 grid-flow-row max-w-lg gap-4">
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
            </div>
            <div className={`mt-16 flex gap-8 mb-12`}>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Live demo
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Blog
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Video demo
              </button>
            </div>
          </div>
        </div>
        <div className=" ease-in duration-300 hover:bg-black-landing hover:rounded-lg hover:text-white-landing  rounded-sm ">
          <div className="p-4 ">
            <div className="mb-12">
                <Image width={1200} height={800} className="rounded-lg" src="/konstantin-kozyrkov-6.jpg"></Image>
            </div>
            <h1
              className={`${barlow3.className} text-4xl  selection:bg-white-landing selection:text-black-landing`}
            >
              The anecdotes and narratives of Krishna's life a
            </h1>
            <h2 className="mt-8 text-lg font-bold">Description</h2>
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Krishna's childhood illustrates the Hindu concept of Lila,
                playing for fun and enjoyment and not for sport or gain. His
                interaction with the gopis at the rasa dance
              </h3>
            </div>
            <h2 className="mt-8 text-lg font-bold">Techstack</h2>
            <div className="grid grid-cols-5 grid-flow-row max-w-lg gap-4">
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
            </div>
            <div className={`mt-16 flex gap-8 mb-12`}>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Live demo
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Blog
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Video demo
              </button>
            </div>
          </div>
        </div>
        <div className=" ease-in duration-300 hover:bg-black-landing hover:rounded-lg hover:text-white-landing  rounded-sm ">    
          <div className="p-4 ">
            <div className="mb-12">
                <Image width={1200} height={800} className="rounded-lg" src="/konstantin-kozyrkov-1.jpg"></Image>
            </div>
            <h1
              className={`${barlow3.className} text-4xl  selection:bg-white-landing selection:text-black-landing`}
            >
              The anecdotes and narratives of Krishna's life a
            </h1>
            <h2 className="mt-8 text-lg font-bold">Description</h2>
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Krishna's childhood illustrates the Hindu concept of Lila,
                playing for fun and enjoyment and not for sport or gain. His
                interaction with the gopis at the rasa dance
              </h3>
            </div>
            <h2 className="mt-8 text-lg font-bold">Techstack</h2>
            <div className="grid grid-cols-5 grid-flow-row max-w-lg gap-4">
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
            </div>
            <div className={`mt-16 flex gap-8 mb-12`}>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Live demo
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Blog
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Video demo
              </button>
            </div>
          </div>
        </div>
        <div className=" ease-in duration-300 hover:bg-black-landing hover:rounded-lg hover:text-white-landing  rounded-sm ">
          <div className="p-4 ">
            <div className="mb-12">
                <Image width={1200} height={800} className="rounded-lg" src="/konstantin-kozyrkov-8.jpg"></Image>
            </div>
            <h1
              className={`${barlow3.className} text-4xl  selection:bg-white-landing selection:text-black-landing`}
            >
              The anecdotes and narratives of Krishna's life a
            </h1>
            <h2 className="mt-8 text-lg font-bold">Description</h2>
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Krishna's childhood illustrates the Hindu concept of Lila,
                playing for fun and enjoyment and not for sport or gain. His
                interaction with the gopis at the rasa dance
              </h3>
            </div>
            <h2 className="mt-8 text-lg font-bold">Techstack</h2>
            <div className="grid grid-cols-5 grid-flow-row max-w-lg gap-4">
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
              <h3 className={`${barlow3.className} text-gray-600 bg-yellow-landing rounded-xl px-4 py-2 hover:text-black-landing`}>
                Node js
              </h3>
            </div>
            <div className={`mt-16 flex gap-8 mb-12`}>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Live demo
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Blog
              </button>
              <button
                className={`${barlow2.className} ease-in duration-300 hover:bg-yellow-landing hover:text-black-landing text-2xl rounded-full border-2 px-8 py-2 `}
              >
                Video demo
              </button>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
}
