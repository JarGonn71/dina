import { FC } from "react";
import Image from "next/image";

export interface PropsItem {
	pathIcon: string;
	text: string;
	alt: string;
}

export const Item:FC<PropsItem> = ({pathIcon, text, alt}) => {
  return (
    <div className="p-[15px] inline-flex space-x-3.5 bg-[#7cc8f8] text-white rounded-xl cursor-pointer items-center">
      <Image
        src={pathIcon}
        width={50}
        height={50}
        alt={alt}
      />
      <div dangerouslySetInnerHTML={{__html: text}} />
    </div>
  );
};