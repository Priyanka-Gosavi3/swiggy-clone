import { useContext, useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantsList from "../utils/useRestaurantsList";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const { listOfRestaurants } = useRestaurantsList(); // base data
  const onlineStatus = useOnlineStatus();
  const { setUserName, loggedInUser } = useContext(UserContext);

  // Set filtered list when original data loads
  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  if (!onlineStatus) {
    return <h1 className="text-red-600 text-center m-6 font-bold">⚠️ You are offline!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex flex-wrap items-center gap-4 justify-center mb-6">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-[#FFE5B4] text-black px-4 py-1 rounded"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          🔍 Search
        </button>

        <button
          className="bg-[#FFE5B4] text-black px-4 py-1 rounded"
          onClick={() => {
            const topRated = listOfRestaurants.filter((res) => res.avgRating > 4.6);
            setFilteredRestaurants(topRated);
          }}
        >
          🌟 Top Rated
        </button>

        <input
          className="border p-2 rounded"
          placeholder="User Name"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
