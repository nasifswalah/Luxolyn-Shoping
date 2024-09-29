import React from "react";
import { suggestions } from "../constatnts/constants";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  return (
    <div className="relative xl:h-[97vh] h-screen xl:w-[95vw] w-screen xl:border border-[rgba(255,255,255,0.2)] xl:rounded-lg bg-[#141414] backdrop-blur-md p-7 ">
      <div className="absolute top-100 w-full h-screen leading-[60.75px] bg-[radial-gradient(ellipse_at_bottom,rgba(121,12,105,0.129)_0%,rgba(13,5,28,0)_85%)]" />
      <p className="font-themeFont bg-clip-text text-transparent bg-gradient-to-b from-[#833991] to-[#CE5ED5] lg:text-5xl text-3xl leading-[60.75px] tracking-[-0.02em] font-medium">
        Hello, Username
      </p>
      <p className="font-themeFont text-[#828282] lg:text-5xl text-3xl leading-[60.75px] tracking-[-0.02em] font-medium mt-4">
        How can i help you today?
      </p>
      <div className="mt-8 flex gap-3 flex-wrap sm:justify-normal justify-center">
        {suggestions.map((suggestion) => (
          <div className="sm:w-[306px] w-[95%] h-48 rounded-3xl bg-[#292929] p-5 relative" key={suggestion.text}>
            <h3 className="font-themeFont text-[#EDEDED] text-2xl font-medium">{suggestion.text}</h3>
            <img src={suggestion.icon} alt="icons" className="text-white w-8 h-8 p-2 bg-black rounded-full absolute bottom-4  right-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
