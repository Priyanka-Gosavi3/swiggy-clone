import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.card.info.id || index}>
          <div className="flex justify-between items-start p-4 my-6 border-b border-gray-300 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
            {/* Left: Text Section */}
            <div className="w-2/3 pr-4">
              <span className="text-xl">{item.card.info.isVeg === 1 ? "🟩" : "🟥"}</span>
              <h3 className="text-md font-semibold text-gray-800 mt-1">{item.card.info.name}</h3>
              <p className="text-sm font-medium text-gray-600 mb-1">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
              <p
                className={`text-sm font-semibold ${
                  item.card.info.ratings?.aggregatedRating?.rating > 3.5
                    ? "text-green-700"
                    : "text-yellow-600"
                }`}
              >
                ⭐ {item.card.info.ratings?.aggregatedRating?.rating}
                {item.card.info.ratings?.aggregatedRating?.ratingCountV2 &&
                  ` (${item.card.info.ratings.aggregatedRating.ratingCountV2})`}
              </p>
              <p className="text-sm text-gray-500 mt-2">{item.card.info.description}</p>
            </div>

            {/* Right: Image + Button */}
            <div className="w-1/3 flex flex-col items-center relative">
              <img
                className="w-28 h-24 object-cover rounded-xl border border-gray-200"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`}
                alt={item.card.info.name}
              />
              <button
                className="absolute bottom-[-12px] bg-green-600 text-white text-xs font-semibold rounded-full px-4 py-1 shadow-md hover:bg-green-700 transition"
                onClick={() => handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
