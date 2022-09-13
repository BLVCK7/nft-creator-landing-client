import React from 'react';

const Buttons = ({ text }) => {
  return (
    <button className="border-solid border-2 border-[#14D9E5] rounded-2xl text-[#14D9E5] p-3 drop-shadow-md w-[170px] h-[58px] hover:bg-[#9DFE00] hover:text-white hover:border-none">
      {text}
    </button>
  );
};

export default Buttons;
