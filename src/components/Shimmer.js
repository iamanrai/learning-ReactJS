import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-col my-4 p-4 items-center">
      <div className="flex mx-80 mb-6 p-2 items-center">
        {/* Search Input Shimmer */}
        <div className="mx-4 w-full">
          <div className="h-10 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
        {/* Search Button Shimmer */}
        <div className="mx-4">
          <div className="h-10 w-24 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
        {/* Top Rated Button Shimmer */}
        <div className="mx-4">
          <div className="h-10 w-40 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* Shimmer Cards Container */}
      <div className="flex flex-wrap w-4/5 justify-center">
        {/* Simulate Multiple Shimmer Cards */}
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-80 p-2 m-6 flex flex-col hover:scale-90 relative animate-pulse"
            >
              {/* Image Shimmer */}
              <div className="w-full h-56 bg-gray-300 rounded-xl aspect-[4/3]"></div>

              {/* Gradient Overlay Placeholder */}
              <div className="w-[95%] rounded-xl absolute h-56 bg-gradient-to-t from-gray-400 to-gray-200"></div>

              {/* Text Placeholder for Restaurant Name */}
              <div className="pt-4 px-2 bg-gray-300 h-6 w-3/4 rounded mt-4"></div>

              {/* Rating & SLA Placeholder */}
              <div className="px-2 bg-gray-300 h-4 w-1/2 rounded mt-2"></div>

              {/* Cuisines Placeholder */}
              <div className="px-2 bg-gray-300 h-4 w-full rounded mt-2"></div>

              {/* Area Placeholder */}
              <div className="px-2 bg-gray-300 h-4 w-1/2 rounded mt-2"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
