import React from "react";
import {
  House,
  LogOut,
  Search,
  LibraryBig,
  LogIn,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/luxolyn-logo.png";

const Navbar = () => {
  const user = "";

  return (
    <>
    <div className="relative backdrop-blur-[920px] xl:h-[97vh] h-[80px] xl:w-[5vw] w-[100vw] xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] flex xl:flex-col flex-row justify-center xl:justify-normal items-center xl:gap-5 gap-[10%] xl:pt-5 z-10 ">
      <Link>
        <img src={logo} alt="logo" className="w-9 h-9 lg:mb-3" />
      </Link>

      <Link to="/">
        <House className="text-[#464646] w-6 h-6" />
      </Link>
      <Link to="/">
        <Search className="text-[#464646] w-6 h-6" />
      </Link>
      {user.role === "seller" && (
        <Link to="/">
          <LibraryBig className="text-[#464646] w-6 h-6" />
        </Link>
      )}
      <Link to="/">
        <ShoppingCart className="text-[#464646] w-6 h-6" />
      </Link>
      {user ? (
        <Link to="/">
          <LogOut className="text-[#464646] w-6 h-6" />
        </Link>
      ) : (
        <Link to="/">
          <LogIn className="text-[#464646] w-6 h-6" />
        </Link>
      )}
    </div>
    </>
  );
};

export default Navbar;
