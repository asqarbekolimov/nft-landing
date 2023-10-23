import Logo from "./logo.svg?react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-5 md:px-20 py-5">
        <div>
          <Logo className="w-10 cursor-pointer" />
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Collection</a>
          </div>
          <div>
            <a href="#">FAQs</a>
          </div>
          <button className="py-1 px-3 bg-[#63859678] text-[#C4EBFF] rounded-2xl">
            Connect wallet
          </button>
          <div className="flex items-center gap-5">
            <AiOutlineTwitter className="w-6 h-6 cursor-pointer" />
            <BiLogoDiscordAlt className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
        <FiMenu className="block md:hidden w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
