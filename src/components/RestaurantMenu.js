import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import MenuShimmer from "./MenuShimmer.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <MenuShimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const resturantWithCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.categories;

  const { itemCards } = resturantWithCategory
    ? resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.categories[0]
    : resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-7/12 text-center shadow-md min-w-[700px] mx-8 overflow-x-auto">
        <h1 className="font-extrabold text-3xl my-6">{name}</h1>
        <p className="font-bold text-xl mb-6">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => {
              // Toggle accordion open/close
              setShowIndex((prevIndex) => (prevIndex === index ? null : index));
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
