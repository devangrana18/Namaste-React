const RestaurantCard = (props) => {
  const { restData } = props;
  console.log(restData);
  const { cloudinaryImageId,name, cuisines, avgRating, costForTwo,sla } =
    restData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
           cloudinaryImageId
        }
      />
      <h2 className="res-name">{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <ul className="extra">
        <li className="rating">{avgRating}⭐</li>
        <li className="eta">
          <h5>{sla?.slaString}</h5>{" "}
        </li>
        <li className="price">
          <h5>{costForTwo}</h5>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantCard;
