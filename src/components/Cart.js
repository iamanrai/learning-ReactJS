import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(clearCart());
  };

  return (
    // main container
    <div data-testid="cartItems" className="flex justify-center">
      <div className="flex flex-col w-6/12 shadow-lg m-4 p-4 px-16">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold"> Cart</h1>

          <button
            className="mx-4 p-2 px-5 bg-red-300 rounded-md hover:bg-red-400"
            onClick={handleCart}
          >
            Clear Cart
          </button>
        </div>

        <div className="w-full m-auto">
          <div>
            {cartItems.length === 0 && (
              <h1 className="my-3 text-center">
                Cart is empty. Add items to the cart.
              </h1>
            )}

            <div>
              {cartItems.map((cartItems) => (
                <div
                  key={cartItems.card.info.id}
                  className="w-full p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center"
                >
                  <div className="w-9/12">
                    <div className="p-2 flex">
                      <span>{cartItems.card.info.name}</span>
                      <span>
                        - ₹
                        {cartItems.card.info.price
                          ? cartItems.card.info.price / 100
                          : cartItems.card.info.defaultPrice / 100}
                      </span>
                    </div>
                    {/* <p className="text-sm text-gray-600 p-2">
                      {cartItems.card.info.description}
                    </p> */}
                    {/* <span className="p-2 text-xs text-green-700">
                      {" "}
                      ⭐️ {
                        cartItems.card.info.ratings.aggregatedRating.rating
                      }{" "}
                      (
                      {
                        cartItems.card.info.ratings.aggregatedRating
                          .ratingCountV2
                      }
                      )
                    </span> */}
                  </div>
                  <div className="w-3/12 p-4 relative">
                    <img
                      src={CDN_URL + cartItems.card.info.imageId}
                      className="w-full aspect-[1/1] object-cover rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* <ItemList items={cartItems} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
