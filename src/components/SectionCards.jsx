import React from 'react';
import Card from './Card';

import kaban from '../assets/Kaban.png';
import chel from '../assets/Чел.png';
import monkey from '../assets/Обезьяна.png';
import arrow from '../assets/down.svg';

const SectionCards = () => {
  return (
    <section className="flex sm:flex-row flex-col mt-8">
      <h1 className="text-white text-[48px] text-center mb-5 sm:hidden">Explore Collection</h1>
      <Card img={kaban} />
      <Card img={chel} />
      <Card img={monkey} />
      <div className="flex sm:flex-col flex-row justify-center sm:align-middle sm:items-center">
        <span className="text-yellow-500 relative top-5 font-smooch italic -rotate-[25deg] text-3xl cursor-default">
          MORE
        </span>
        <button className="border-solid border-2 border-green-300 rounded-[50px] sm:h-[168px] sm:w-[80px] w-[168px] h-[80px] ">
          <img src={arrow} alt={arrow} />
        </button>
      </div>
    </section>
  );
};

export default SectionCards;
