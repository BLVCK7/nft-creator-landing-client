import React from 'react';

import glass from '../assets/009_W -  1.png';

import kot from '../assets/Kot.png';
import SectionTwo from './SectionTwo';

const SectionOne = () => {
  return (
    <section id="" className="p-7 flex lg:flex-row flex-col pb-0">
      <div className="sm:w-[70%] w-full flex flex-col lg:items-end items-center justify-center">
        <div className="flex flex-col items-end">
          <h1 className="text-[#9DFE00] font-bold sm:text-9xl text-5xl drop-shadow-md">
            - NFT МАРКЕТ
          </h1>

          <div className="flex items-center">
            {/* <img src={glass} alt="glass" className="relative bottom-[90px] right-[30px]" /> */}
            <p className="text-white font-bold italic sm:text-5xl md:text-8xl text-3xl drop-shadow-md">
              co СКИДКАМИ
            </p>

            <button className="bg-[#FEC200] sm:w-[200px] sm:h-[100px] w-[50px] h-[25px] rounded-[50px] drop-shadow-xl text-white sm:text-[48px] text-[14px] ml-2 mt-1">
              -50%
            </button>
          </div>
        </div>

        <SectionTwo />
      </div>
      <div className="sm:w-[30%] w-full">
        <img src={kot} alt={kot} className="w-[338px] h-[400px] m-auto" />
      </div>
    </section>
  );
};

export default SectionOne;
