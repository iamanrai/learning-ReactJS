import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="w-full p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="p-2 flex">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600 p-2">
              {item.card.info.description}
            </p>
            <span className="p-2 text-xs text-green-700">
              {" "}
              ⭐️ {item.card.info.ratings.aggregatedRating.rating} (
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </span>
          </div>
          <div className="w-3/12 p-4 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full aspect-[1/1] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 w-full flex justify-center">
              <button
                className="p-2 px-8 rounded-lg bg-white shadow-lg cursor-pointer font-bold text-green-700 hover:bg-gray-200"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
