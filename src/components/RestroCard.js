const RestroCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    locality,
    sla,
    isOpen,
  } = resData;

  const deliveryTime = sla?.deliveryTime;

  return (
    <div className="m-4 p-4 w-64 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-100">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`}
        alt="restaurant"
      />

      <div className="mt-3 space-y-1">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>

        <div className="flex items-center text-sm text-gray-600 space-x-2">
          <span>⭐ {avgRating}</span>
          <span>• {deliveryTime} mins</span>
        </div>

        <p className="text-sm text-gray-700">{costForTwo}</p>

        <p className="text-xs text-gray-500 truncate">{cuisines.join(", ")}</p>

        <p className="text-xs text-gray-500">{locality}</p>

        {isOpen !== undefined && (
          <p className={`text-xs font-semibold ${isOpen ? "text-green-400" : "text-red-500"}`}>
            {isOpen ? "Open Now" : "Closed"}
          </p>
        )}
      </div>
    </div>
  );
};

export default RestroCard;
