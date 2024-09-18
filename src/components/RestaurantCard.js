import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, areaName, cloudinaryImageId } =
    resData?.info;
  const { slaString } = resData?.info.sla;
  // console.log(resData.info);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <p className="res-name">{name}</p>

      <p className="res-remaining">
        {avgRating}* {slaString}
      </p>
      <p className="res-remaining">{cuisines.join(", ")}</p>
      <p className="res-remaining">{areaName}</p>
    </div>
  );
};
export default RestaurantCard;
