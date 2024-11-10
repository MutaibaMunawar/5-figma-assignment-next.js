import React from "react";
import Image from "next/image"; 
import { Libre_Bodoni } from "next/font/google";

const libreBodoni = Libre_Bodoni({
  weight: "700",
  subsets: ['latin'],
});

const Home = () => {
  return (
    <div>
      <div className="p-12 flex items-center">
        <div className="flex-1">
          <h1 className={`${libreBodoni.className} text-[40px] font-bold mt-28 text-[#000000] ml-[171px]`}>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className={`${libreBodoni.className} text-[30px] leading-8 text-[#787054] ml-[171px]`}>
            An example of intricate workmanship and detail &apos;
            elegant necklaces and long and short chains form a part of our
             desirable collection.
          </p>
          <button className={`${libreBodoni.className} bg-[#A29875] text-[#FFFFFF] text-[30px] mt-8 rounded px-8 py-2 ml-[171px]`}>
            Explore Now
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image
            src="/images/figma_img.svg"
            alt="jwellary_image"
            width={350}
            height={458}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
