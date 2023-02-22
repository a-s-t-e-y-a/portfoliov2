import { Roboto } from "@next/font/google";
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
      <div className="bg-white-landing md:grid md:grid-rows-2 md:grid-flow-col md:gap-12 md:gap-y-12 p-4 lg:mx-12 mb-24">
        <div className=" ease-in duration-300 hover:bg-black-landing hover:text-white-landing border-[1px] rounded-sm ">
          <div className="p-4">
            <div></div>
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
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Node js, React js , gRPC , protobuff , golang
              </h3>
            </div>
            <div className={`mt-16 flex gap-8`}>
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
        <div className=" ease-in duration-300 hover:bg-black-landing hover:text-white-landing border-[1px] rounded-sm ">
          <div className="p-4">
            <div></div>
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
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Node js, React js , gRPC , protobuff , golang
              </h3>
            </div>
            <div className={`mt-16 flex gap-8`}>
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
        <div className=" ease-in duration-300 hover:bg-black-landing hover:text-white-landing border-[1px] rounded-sm ">
          <div className="p-4">
            <div></div>
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
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Node js, React js , gRPC , protobuff , golang
              </h3>
            </div>
            <div className={`mt-16 flex gap-8`}>
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
        <div className=" ease-in duration-300 hover:bg-black-landing hover:text-white-landing border-[1px] rounded-sm ">
          <div className="p-4">
            <div></div>
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
            <div className="container max-w-xl overflow-hidden">
              <h3 className={`${barlow2.className} text-gray-600`}>
                Node js, React js , gRPC , protobuff , golang
              </h3>
            </div>
            <div className={`mt-16 flex gap-8`}>
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
