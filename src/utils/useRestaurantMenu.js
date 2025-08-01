import { useEffect,useState } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        resid
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
