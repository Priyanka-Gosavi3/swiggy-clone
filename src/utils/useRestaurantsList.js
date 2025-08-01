import { useEffect , useState} from "react";

const useRestaurantsList = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();


    const restaurantList =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map(
        (e) => e.info
      );

    const latestlist = restaurantList.map((r) => r);
    setlistOfRestaurants(latestlist);
    setfilteredRestaurant(restaurantList);
  };
  return {listOfRestaurants, filteredRestaurant};
};

export default useRestaurantsList;
