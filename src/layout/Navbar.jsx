import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { navlinks } from "../routes/routes";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {BiSolidShoppingBagAlt} from "react-icons/bi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const toggleIcons = () => {
    setShowCloseIcon((prevState) => !prevState);
  };

  const cartProducts = useSelector((state) => state.cart);

  return (
    <header className="bg-main lg:px-20 lg:py-0 sm:mt-2 p-2 w-full z-10 ">
      <div className=" mx-auto flex  flex-row items-center justify-between  w-full p-2">
        <Link to="/login" className="sm:hidden block">
          <BiSolidShoppingBagAlt size={25} />
        </Link>
        <div className="sm:block hidden">
          <div className="flex flex-row gap-32">
            <nav className=" flex  items-center text-base  flex-row justify-evenly gap-16">
              <BiSolidShoppingBagAlt size={25} />
              {navlinks.map((link, index) => (
                <div key={index} className="cursor-pointer">
                  <Link
                    className="cursor-pointer hover:text-gray-800"
                    path={link.value}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
        <Link to="/cart" className="hidden sm:block">
          <div className="flex gap-2 items-center">
            <AiOutlineShoppingCart size={25} />
            <span className="text-base font-semibold">
              {cartProducts.length}
            </span>
          </div>
        </Link>

        <div className="block sm:hidden">
          <div className="flex flex-col gap-3 items-center">
            <div onClick={toggleIcons}>
              {showCloseIcon ? (
                <AiOutlineClose
                  className="cursor-pointer sm:hidden block"
                  size={25}
                />
              ) : (
                <AiOutlineMenu
                  className=" cursor-pointer sm:hidden block"
                  size={25}
                />
              )}
            </div>
            <Link to="/cart" className="sm:hidden block">
              <div className="flex gap-2 items-center">
                <AiOutlineShoppingCart size={25} />
                <span className="text-base font-semibold">
                  {cartProducts.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {showCloseIcon && (
        <div className=" h-full w-full bg-gray-200 py-5 flex flex-col justify-center items-center gap-9 z-10">
          <nav className=" flex  items-center text-base flex-col justify-evenly gap-9 ">
            {navlinks.map((link, index) => (
              <div key={index}>
                <Link
                  className="cursor-pointer"
                  path={link.value}
                  to={link.path}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
