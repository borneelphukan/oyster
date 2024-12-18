import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Button from "../component/ui/button";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="p-8 text-center dark:bg-gray-900">
      <div className="mx-auto">
        {/* first label */}
        <div className="bg-gray-400 dark:bg-gray-800 inline-block py-2 px-6 rounded-lg mb-4 text-md">
          Suitable for all skill levels 🤘
        </div>

        {/* second label */}
        <h1 className="text-5xl font-medium my-4">
          Stock Markets Today: Stay Ahead with Oyster
        </h1>
        <p className="my-6">
          A stock market platform with a score for every stock.
        </p>

        {/* Search Input with Icon and Button */}
        <div className="relative w-full max-w-md mx-auto mb-8 flex">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-300"
            />
          </div>
          <input
            type="text"
            placeholder="Search Stock, index, ETF"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 dark:bg-gray-800 dark:text-white text-gray-100 rounded-l-md"
          />
          <button
            onClick={handleSearch}
            className="bg-cyan-500 text-white px-4 py-2 rounded-r-md hover:bg-cyan-600 transition"
          >
            Search
          </button>
        </div>

        <div className="flex justify-center">
          <div className="inline-block">
            <Button
              text="Sign Up for Free"
              style="primary"
              width="large"
              onClick={() => console.log("Added to cart")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
