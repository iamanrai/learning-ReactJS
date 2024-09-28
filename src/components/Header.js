import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between items-center shadow-md">
      <div className="">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex p-4 m-4 items-center">
          <li className="mx-4 px-4 hover:text-red-500">
            Online Status {onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="mx-4 px-4 hover:text-red-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-4 px-4 hover:text-red-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="mx-4 px-4 hover:text-red-500">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="mx-4 px-4 hover:text-red-500">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="mx-4 px-4 hover:text-red-500">Cart</li>
          <button
            className="mx-4 p-2 px-5 bg-red-300 rounded-md hover:bg-red-400"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
