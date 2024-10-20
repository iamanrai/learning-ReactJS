import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // setShowItems(!showItems); //toggle feature
    setShowIndex();
  };

  return (
    <div className="flex w-full p-4 my-4 shadow-md flex-col">
      {/* Header */}
      <div
        className="flex w-full justify-between font-semibold text-lg cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {" "}
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion Body */}
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
