import React  from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestroMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  const { name, cuisines, sla, avgRating, costForTwo } =
    resInfo?.cards?.[2]?.card?.card?.info || {};


  if (!resInfo) return <Shimmer />;

  const category =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const dummy = "Dummy Data";

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-extrabold text-gray-500 text-center mb-2">{name}</h2>
      <h3 className="text-lg text-gray-600 text-center font-medium">
        Cuisines: <span className="text-gray-800">{cuisines?.join(", ")}</span>
      </h3>
      <h4 className="text-center text-green-700 text-lg font-semibold mt-2">
        ⭐ {avgRating} • {sla?.deliveryTime} mins • {costForTwo}
      </h4>

      <hr className="my-6 border-t-2 border-gray-200" />

      {category.map((e, key) => (
        <div key={e.categoryId || key} className="mb-6">
          <RestaurantCategory
            data={e?.card?.card}
            key={e?.card?.card.title}
            dummy={dummy}
          />
        </div>
      ))}
    </div>
  );
};

export default RestroMenu;
