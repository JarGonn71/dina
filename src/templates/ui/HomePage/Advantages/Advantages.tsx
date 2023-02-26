import { AdvantagesItems } from "./const";
import Image from "next/image";
import Link from "next/link";

export const Advantages = () => {
  return (
    <div className="flex justify-center mt-[50px] w-full h-[600px]">
      <div className="w-[1200px]">
        <h2 className="text-3xl font-semibold text-white">Наши Преймущества</h2>
        <div className="grid grid-cols-3 justify-items-center gap-4 mt-10">
          {AdvantagesItems.map(item => (
            <Link className="w-full h-full" key={item.text} href={item.link}>
              <div className="mt-50px w-full h-full">
                <div className="inline-flex p-2 rounded-lg flex-col items-center bg-[#cceafd] items-center w-full h-full">
                  <Image
                    src={item.pathIcon}
                    alt={item.alt}
                    width={100}
                    height={100}
                  />
                  <div className="text-center">
                    {item.text}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};