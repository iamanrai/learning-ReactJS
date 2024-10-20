import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, areaName, cloudinaryImageId } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  // console.log(resData);
  return (
    <div
      data-testid="resCard"
      className="w-80 p-2 m-6 flex flex-col hover:scale-90 relative"
    >
      <img
        className="w-full h-56 rounded-xl aspect-[4/3] object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="w-[95%] rounded-xl absolute h-56 bg-gradient-to-t from-black from 0% to-* to-40% ... "></div>
      {withPromotedLabel(resData)}
      <p className="pt-4 px-2 text-black font-bold text-lg text-nowrap overflow-clip">
        {name}
      </p>

      <p className="px-2 font-semibold">
        {" "}
        ⭐{avgRating} ▪️ {slaString}
      </p>
      <p className="px-2 text-gray-500 text-nowrap overflow-hidden">
        {cuisines.join(", ")}
      </p>
      <p className="px-2 text-gray-500">{areaName}</p>
    </div>
  );
};

const withPromotedLabel = (resData) => {
  return (
    <div>
      {/* <RestaurantCard {...props} /> */}
      <label className="absolute text-white font-extrabold text-xl top-48 px-4 ">
        {resData?.info?.aggregatedDiscountInfoV3?.header
          ? resData?.info?.aggregatedDiscountInfoV3?.header +
            " " +
            resData?.info?.aggregatedDiscountInfoV3?.subHeader
          : " "}
      </label>
    </div>
  );
};

export default RestaurantCard;
