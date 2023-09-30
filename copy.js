import RestaurantCard from "./Reastaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { resList } from "../Reslist";


const Body = () => {
  const [listofRestaurants,setlistofRestaurants ] = useState([]);
  const[filteredRestaurant, setfilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
   setlistofRestaurants (resList);
   setfilteredRestaurant(resList);

  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     //  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5085813&lng=77.02981919999999&page_type=DESKTOP_WEB_LISTING"

      
      
     
  //   );

  //   const json = await data.json();

    // console.log(json);
    // setlistofRestaurants(json.data.cards[2].data.data.cards);
    // setfilteredRestaurant(json.data.cards[2].data.data.cards);
  

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterRestrauant = listofRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setlistofRestaurants(filterRestrauant);
            }}
          >
            search🔍
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
