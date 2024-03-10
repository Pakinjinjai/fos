import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Things are better<br/> 
          when there is convenience&nbsp; <br/>
          <span className="text-primary">
          in ordering food.
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Food is the missing piece that makes every day pleasurable. It's a
          simple happiness.
        </p>
        <div className="flex gap-4 text-sm">
          <button className=" flex items-center gap-2 bg-primary uppercase text-white px-4 py-2 rounded-full">
            Order now
            <Right/>
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right/>
            </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/food2.png"}
          alt={"food2"}
          layout={"fill"}
          objectFit={"contain"}
        />
      </div>
    </section>
  );
}
