import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.847783423740285&lng=80.99853001534939&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

  // Use of tertionary  operator to check if list is empty or not
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col my-4 p-4 items-center">
      <div className="flex mx-80 mb-6 p-2 items-center">
        <div className="mx-4 w-full">
          <input
            type="text"
            className="placeholder:italic placeholder:text-red-300 block bg-white border border-red-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-red-400 focus:ring-red-400 focus:ring-1 sm:text-sm"
            placeholder="Search for restaurants..."
            name="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <div className="mx-4">
          <button
            className="mx-4 p-2 px-5 bg-red-300 rounded-md hover:bg-red-400"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((item) =>
                item.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="mx-4 p-2 px-5 bg-red-300 rounded-md hover:bg-red-400"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (item) => item.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap w-4/5 justify-center">
        {filteredRestaurants.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            <RestaurantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
