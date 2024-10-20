import React from "react";

const MenuShimmer = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-7/12 text-center shadow-md min-w-[700px] mx-8">
        <div className="animate-pulse">
          {/* Title shimmer */}
          <div className="h-8 bg-gray-300 rounded w-48 my-6 mx-auto"></div>

          {/* Cuisines shimmer */}
          <div className="h-6 bg-gray-300 rounded w-64 my-4 mx-auto"></div>

          {/* Categories shimmer (repeated 4 times for visual effect) */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="my-6">
              {/* Category Title */}
              <div className="h-6 bg-gray-300 rounded w-36 mx-auto mb-4"></div>

              {/* Item Placeholder */}
              <div className="flex flex-col space-y-4">
                {/* Item 1 */}
                <div className="flex justify-between items-center px-4">
                  <div className="w-9/12">
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="w-3/12 h-20 bg-gray-300 rounded"></div>
                </div>

                {/* Item 2 */}
                <div className="flex justify-between items-center px-4">
                  <div className="w-9/12">
                    <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                  <div className="w-3/12 h-20 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
