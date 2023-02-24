import Image from "next/image";

export const Advantages = () => {
  return (
    <div className="flex justify-center mt-[50px] w-full h-[600px]">
	    <div className="w-[1200px]">
		    <h2 className="text-3xl font-semibold text-white">Наши Преймущества</h2>
		    <div className="mt-50px">
			    <div className="inline-flex p-2 rounded-lg flex-col items-center bg-[#cceafd]">
				    <Image
					    src={"/images/tsvety-kruglosutochno-316x350.png"}
					    alt={"Круглосуточное сопровождение"}
					    width={100}
					    height={100}
				    />
				    <div>
					    Круглосуточное сопровождение
				    </div>
			    </div>
		    </div>
		    <div className="inline-flex p-2 rounded-lg flex-col items-center bg-[#cceafd]">
			    <Image
				    src={"/images/1660349091_32-kartinkin-net-p-fon-dlya-prezentatsii-globus-krasivo-33.png"}
				    alt={"Круглосуточное сопровождение"}
				    width={100}
				    height={100}
			    />

			    <div>
				    Круглосуточное сопровождение
			    </div>
	    </div>
	    </div>
    </div>
  );
};