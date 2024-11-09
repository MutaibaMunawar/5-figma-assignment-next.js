import React from 'react';
import { Rye } from 'next/font/google';

const rye = Rye({
  subsets: ['latin'],
  weight: '400',
});

const Header = () => {
  return (
    <div>
      <div className='w-full h-[80px] bg-[#A29875] flex items-center justify-between px-3 py-2'>
        <h1 className={`${rye.className} text-[75px]sm:text-[60px] md:text-[50px] lg:text-[75px] text-[#FFFFFF] px-2`}>
          MANZZARI
        </h1>
      </div>
    </div>
  );
}

export default Header;
