import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="w-full min-w-[700px] flex justify-between items-center shadow-md p-4 overflow-hidden">
      {/* Logo Section */}
      <div className="flex-shrink-0">
        <Link to={"/"}>
          <img className="w-36" src={LOGO_URL} alt="Logo" />
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex-grow flex justify-end items-center space-x-4 whitespace-nowrap">
        <li className="mx-4 px-4 hover:text-red-500 list-none">
          Online Status {onlineStatus ? "🟢" : "🔴"}{" "}
        </li>
        <li className="mx-4 px-4 hover:text-red-500 list-none">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="mx-4 px-4 hover:text-red-500 list-none">
          <Link to={"/about"}>About Us</Link>
        </li>
        <li className="mx-4 px-4 hover:text-red-500 list-none">
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li className="mx-4 px-4 hover:text-red-500 list-none">
          <Link to={"/grocery"}>Grocery</Link>
        </li>
        <li className="mx-4 px-4 hover:text-red-500 list-none">
          <Link to={"/cart"}>Cart ({cartItems.length})</Link>
        </li>

        <button
          className="mx-4 p-2 px-5 bg-red-300 rounded-md hover:bg-red-400"
          onClick={() => {
            setBtnName(btnName === "Login" ? "Logout" : "Login");
          }}
        >
          {btnName}
        </button>

        <li className="mx-4 px-4 hover:text-red-500 list-none">
          {loggedInUser}
        </li>
      </div>
    </div>
  );
};

export default Header;
