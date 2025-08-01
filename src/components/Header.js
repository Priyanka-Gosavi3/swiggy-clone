import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-[#FFE5B4] shadow-lg px-6 py-3 sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img src={LOGO_URL} alt="Logo" className="w-16 h-16 full shadow-md" />
        <span className="text-xl font-extrabold text-orange-500 tracking-wide italic">
          Swiggy
        </span>
      </div>
      <ul className="flex items-center space-x-6 text-md font-medium text-gray-700">
        <li className="hover:text-orange-600 transition">
          Online: {onlineStatus ? "✅" : "🔴"}
        </li>
        <li>
          <Link to="/" className="hover:text-orange-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-600 transition">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-600 transition">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/grocery" className="hover:text-orange-600 transition">
            Grocery
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="hover:text-orange-600 transition font-semibold"
          >
            Cart 🛒 ({cartItems.length})
          </Link>
        </li>
        <li>
          <button
            className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition"
            onClick={() =>
              setBtnName(btnName === "Log In" ? "Log out" : "Log In")
            }
          >
            {btnName}
          </button>
        </li>
        <li className="text-orange-800 font-semibold">{data.loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
