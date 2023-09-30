import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const ReastaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  
//    const resInfo = useState(null)[0]
//    const setResInfo = useState()[1]
//     const {id}= useParams();
//     console.log(id)

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5144578&lng=77.0331041&restaurantId=" + id +"&catalog_qa=undefined"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  
  return (
    <div className="restaurantMenu">
      <div className="Name-rating">
        <div className="resMenuTop">
          <h1 className="resMenuName">{resInfo?.cards[0]?.card?.card?.info.name} </h1>
          <p className="res-Cuisine">{resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")} </p>
          <p>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
        </div>
      </div>

      <p>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </p>
      <ul>
        <ul>
          { resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards.map((item) => (
            <ul key={item.card.info.id}>
              <div className="dish-Section">
                <div className="name-Img">
                  <li className="dishName">
                    <h4>{item?.card?.info?.name}</h4>
                  </li>
                  <li className="dishPrice">
                    <p>
                      ₹
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}{" "}
                      |{" "}
                    </p>
                  </li>
                  <li className="dishDiscription">
                    <p>₹{item?.card?.info?.description}</p>
                  </li>
                </div>
                <li className="dishImg">
                  <img
                    className="dishImg"
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                      item.card.info.imageId
                    }
                    alt=""
                  />
                </li>
              </div>
              <p>
                -------------------------------------------------------------------------------------------------------------------------------------------------------------
              </p>
            </ul>
          ))}
        </ul>
      </ul>
    </div>
 );
};
export default ReastaurantMenu;
