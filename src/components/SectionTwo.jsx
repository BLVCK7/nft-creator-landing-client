import React from 'react';
import Buttons from './Buttons';

const SectionTwo = () => {
  return (
    <section className="w-[80%] flex md:flex-row flex-col mt-9 gap-5">
      <div className="flex gap-5 mt-2 ">
        <Buttons text={'Купить NFT'} />
        <Buttons text={'Галлерея'} />
      </div>

      <div className="flex sm:text-end text-center">
        <p className="text-[#14D9E5]">
          NFT, или невзаимозаменяемый токен, — это единица учета, с помощью которой создается
          цифровой слепок для любого уникального предмета. Среди них могут быть: картины,
          фотографии, видео, музыка, гифки.
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
