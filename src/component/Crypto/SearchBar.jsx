import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearchClicked }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="relative w-[70%] mx-auto">
      <input
        className="w-full py-2 px-4 border border-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        onClick={() => {
          onSearchClicked(searchText);
        }}
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-[#FFD700] border border-black rounded-r-md focus:outline-none"
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
