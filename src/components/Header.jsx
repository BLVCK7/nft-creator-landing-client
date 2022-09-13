import React from 'react';
import { links } from '../links';
import logo from '../assets/NFTGo svg.png';
import menu from '../assets/menu.svg';

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <nav>
      <ul className="md:flex hidden justify-evenly items-center py-10 px-10">
        {links.map((el, index) =>
          index !== 3 ? (
            <li
              key={el.id}
              className="cursor-pointer hover:underline font-poppins font-normal text-white">
              <a href={`#${el.id}`}>{el.title}</a>
            </li>
          ) : (
            <>
              <img src={logo} alt="nft_logo" className="w-[241px] h-[59px]" />
              <li key={el.id} className="cursor-pointer text-white hover:underline">
                <a href={`#${el.id}`}>{el.title}</a>
              </li>
            </>
          ),
        )}
      </ul>

      <div className="flex justify-between px-5 py-5">
        <img src={logo} alt="nft_logo" className="w-[241px] h-[59px] md:hidden flex" />
        <img
          src={menu}
          alt="menu"
          className="md:hidden flex"
          onClick={() => setOpenMenu((prev) => !prev)}
        />
        <div
          className={
            openMenu
              ? 'md:hidden flex bg-[#FEC200] absolute right-8 top-[90px] rounded-lg shadow-md'
              : 'hidden'
          }>
          <ul className=" justify-evenly items-center py-3 px-5 text-center">
            {links.map((el) => (
              <li key={el.id} className="cursor-pointer text-white hover:underline">
                <a href={`#${el.id}`}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
