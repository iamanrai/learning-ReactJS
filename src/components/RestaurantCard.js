import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, areaName, cloudinaryImageId } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  // console.log(resData.info);
  return (
    <div className="w-80 p-2 m-6 flex flex-col hover:scale-90">
      <img
        className="w-full h-56 rounded-xl aspect-[4/3] object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
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
export default RestaurantCard;
