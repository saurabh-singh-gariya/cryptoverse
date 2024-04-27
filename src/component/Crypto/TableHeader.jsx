import React from "react";

const TableHeader = () => {
  return (
    <div className="bg-[#14161a] w-full flex justify-between py-4 px-4 rounded-md text-white items-center cursor-pointer text-lg sticky font-bold -z-10">
      <div className="w-[30%] sm:w-[15%] md:w-[10%]">Asset</div>
      <div className="w-[35%] sm:w-[25%] md:w-[20%] flex flex-col uppercase justify-center items-start">
        Coin
      </div>
      <div className="hidden md:block w-[20%]">24H</div>
      <div className="w-[35%] sm:w-[20%] md:w-[25%]">Price</div>
      <div className="hidden sm:flex w-[35%] md:w-[25%]">Market Cap</div>
    </div>
  );
};

export default TableHeader;
