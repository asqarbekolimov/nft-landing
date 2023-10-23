import { useState } from "react";
import Logo from "./logo.svg?react";
import { AiOutlineClose, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <header>
      <div className="flex items-center justify-between px-5 md:px-20 py-5">
        <div>
          <Logo className="w-10 cursor-pointer" />
        </div>
        <div
          className={` ${
            mobileNav
              ? "w-full flex flex-col fixed top-0 bottom-0 left-0 gap-5 py-5 px-5 bg-black z-50 transition-all duration-200 ease-linear"
              : "fixed -left-full md:relative md:left-0 md:flex items-center gap-10"
          }`}
        >
          <AiOutlineClose
            onClick={() => setMobileNav(false)}
            className="block md:hidden absolute right-5 top-5 cursor-pointer"
          />
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Collection</a>
          </div>
          <div>
            <a href="#">FAQs</a>
          </div>
          <button className="inline-block py-1 px-3 bg-[#63859678] text-[#C4EBFF] rounded-2xl">
            Connect wallet
          </button>
          <div className="flex items-center gap-5">
            <AiOutlineTwitter className="w-6 h-6 cursor-pointer" />
            <BiLogoDiscordAlt className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <FiMenu
          className="block md:hidden w-6 h-6 cursor-pointer"
          onClick={() => setMobileNav(true)}
        />
      </div>
    </header>
  );
};

export default Header;
