import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showBody, setShowBody] = useState(false);

  const handleClick = () => {
    setShowBody(!showBody);
  };

  return (
    <div className="w-full md:w-10/12 max-w-3xl mx-auto my-4 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <div
        className="flex justify-between items-center px-6 py-4 cursor-pointer bg-gradient-to-r from-blue-50 to-blue-50 rounded-t-xl"
        onClick={handleClick}
      >
        <span className="text-lg font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">{showBody ? "🔼" : "⬇️"}</span>
      </div>

      {showBody && (
        <div className="px-6 py-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
