import React from "react";
import { CirclePlus } from 'lucide-react';
import { shop } from "../assets";

const SearchBar = () => {
  return (
    <section className="absolute bottom-6 lg:left-8  w-full flex justify-center z-10 opacity-30 hover:opacity-100 transition duration-300 ">
      <div className="w-3/4 h-[55px] bg-[#161516] rounded-[50px] p-1.5">
        <div className="rounded-[55px] border border-[#474347] w-full h-11 flex items-center px-1 text-[#8D9191] ">
            <CirclePlus className="w-6 h-6 mr-2 ml-2"/>
            <input type="text" placeholder="Ask me something..." className="placeholder-[#8D9191] font-normal text-sm flex-1 bg-transparent outline-none placeholder:'ASk'"/>
            <button className="lg:w-28  h-9 w-9  bg-white sm:rounded-[55px] rounded-full flex items-center justify-center gap-2 text-black font-normal text-sm">
                <img src={shop} alt="" />
                <p className="sm:block hidden">Shop</p>
            </button>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
