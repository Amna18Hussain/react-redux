
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "./fontAwesome";
import Cart from "../common/Cart";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Icons = () => {
  const { totalItems } = useSelector((state) => state.cart);

  const [showSidebar, setShowSidebar] = useState(false);

  const showRightBar = () => {
    setShowSidebar(true);
  };

  const hideRightBar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <div className="flex">
        <div>
          
          <FaHeart
            className="hover:text-red-500 text-3xl size-14"
          />
        </div>
        <div className="relative">
         
          < FaCartShopping
            
            className="hover:text-red-500 text-3xl cursor-pointer size-14"
            onClick={showRightBar}
          />
          {showSidebar && (
            <div className="fixed top-15 right-0 w-80">
              <Cart />
              <span
                className="absolute top-2 right-2 cursor-pointer text-gray-600"
                onClick={hideRightBar}
              >
                <FontAwesomeIcon icon="fa fa-close" />
              </span>
            </div>
          )}
          <span className="absolute -top-1 text-white -right-2 bg-red-600 rounded-full p-1">
            {totalItems}
          </span>
        </div>
      </div>
    </>
  );
};

export default Icons;
