import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt"
                height="300.000000pt"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <g
                  transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M481 1683 c0 -37 1 -37 12 -13 14 30 26 40 50 40 15 0 17 -11 17
-100 0 -95 -1 -101 -22 -110 -18 -7 -10 -9 32 -8 30 0 47 2 38 5 -16 4 -18 18
-18 109 0 98 1 104 20 104 14 0 26 -11 35 -32 l14 -33 1 33 c0 22 4 32 13 30
8 -3 13 -36 15 -106 2 -89 1 -101 -15 -105 -10 -3 5 -5 32 -5 28 0 42 2 33 5
-14 3 -18 15 -18 54 l0 49 50 0 50 0 0 -49 c0 -30 -5 -51 -12 -54 -7 -3 7 -6
31 -6 39 -1 42 1 28 12 -15 10 -17 27 -15 107 3 94 3 95 28 95 25 0 25 -1 28
-99 2 -73 -1 -102 -10 -108 -7 -4 23 -8 70 -8 l82 0 0 38 -1 37 -14 -32 c-13
-29 -18 -33 -55 -33 l-40 0 0 50 c0 44 3 50 20 50 12 0 24 -10 30 -22 7 -18 9
-13 9 27 0 43 -2 47 -11 28 -6 -13 -20 -23 -30 -23 -17 0 -19 6 -16 48 3 46 3
47 38 47 27 0 37 -6 47 -25 l13 -25 0 33 0 32 -122 -1 c-68 0 -117 -3 -110 -6
7 -3 12 -24 12 -54 l0 -49 -50 0 -50 0 0 45 c0 31 5 47 18 54 12 7 -22 10
-120 11 l-138 0 1 -37z"
                  />
                  <path
                    d="M1128 1713 c8 -3 12 -35 12 -108 0 -73 -4 -105 -12 -108 -7 -3 17 -6
55 -6 54 -1 71 3 87 19 27 27 25 56 -5 84 -22 21 -23 25 -10 36 8 7 15 23 15
36 0 35 -36 54 -100 53 -30 0 -49 -3 -42 -6z m100 -15 c7 -7 12 -25 12 -40 0
-21 -7 -32 -27 -41 l-27 -12 29 -5 c41 -7 57 -51 30 -80 -12 -13 -28 -20 -44
-18 -25 3 -26 5 -28 83 -2 44 -1 90 2 103 6 24 33 30 53 10z"
                  />
                  <path
                    d="M1308 1713 c8 -3 12 -35 12 -108 0 -73 -4 -105 -12 -108 -7 -3 7 -6
32 -6 35 0 41 2 28 10 -13 7 -18 23 -18 54 l0 45 55 0 55 0 0 -45 c0 -31 -5
-47 -17 -54 -14 -8 0 -10 52 -11 43 0 65 4 56 9 -9 6 -11 18 -6 40 6 26 11 31
38 32 l32 1 -26 11 -26 12 17 39 16 40 27 -73 c30 -81 32 -97 15 -104 -7 -3
22 -6 65 -6 69 -1 77 1 64 14 -8 8 -15 33 -15 55 -1 39 1 41 26 38 23 -3 30
-11 43 -53 l16 -50 49 -3 c37 -1 45 0 32 8 -26 16 -5 68 30 73 26 4 26 5 5 12
-19 6 -20 10 -11 38 6 18 14 35 17 40 4 4 20 -30 35 -74 23 -67 26 -83 15 -90
-9 -6 2 -9 31 -9 31 0 40 3 31 9 -8 5 -34 58 -57 118 -41 106 -42 107 -54 78
-43 -114 -77 -189 -87 -192 -7 -3 -15 11 -19 32 -3 20 -13 43 -22 51 -13 14
-12 17 7 30 29 20 28 68 -1 88 -14 10 -44 16 -83 16 -41 0 -55 -3 -45 -10 10
-6 16 -32 18 -84 9 -162 -20 -168 -78 -16 -24 61 -44 110 -45 110 -2 0 -20
-44 -41 -97 -62 -159 -74 -162 -74 -19 0 74 4 106 13 109 6 3 -8 6 -33 6 -35
0 -41 -2 -27 -10 12 -7 17 -23 17 -54 l0 -45 -55 0 -55 0 0 45 c0 31 5 47 18
54 13 8 7 10 -28 10 -25 0 -39 -3 -32 -6z m503 -13 c22 -12 26 -59 7 -78 -7
-7 -24 -12 -39 -12 -26 0 -28 2 -24 38 1 20 3 43 4 50 1 15 25 16 52 2z"
                  />
                  <path
                    d="M2060 1685 c0 -19 5 -35 10 -35 6 0 10 11 10 24 0 23 16 36 46 36 11
0 14 -20 14 -100 0 -95 -1 -101 -22 -110 -18 -7 -10 -9 32 -8 30 0 47 2 38 5
-16 4 -18 18 -18 109 0 95 2 104 19 104 21 0 37 -16 44 -45 3 -12 5 -4 6 18
l1 37 -90 0 -90 0 0 -35z"
                  />
                  <path
                    d="M838 1463 c17 -6 17 -194 0 -211 -9 -9 1 -12 46 -12 31 0 66 5 76 10
27 14 42 47 35 70 -7 22 -54 50 -82 50 -11 -1 -6 -6 14 -15 35 -15 49 -45 34
-73 -11 -21 -55 -37 -71 -27 -6 4 -10 49 -10 101 0 78 3 96 16 101 28 11 49
-11 48 -51 -1 -20 2 -36 5 -36 14 0 31 25 31 45 0 38 -31 55 -96 54 -32 0 -53
-3 -46 -6z"
                  />
                  <path
                    d="M1086 1461 c-4 -5 -22 -51 -42 -103 -20 -51 -41 -99 -46 -105 -8 -10
-3 -13 23 -13 29 0 31 2 16 13 -15 10 -16 17 -6 45 10 28 15 32 48 32 31 0 40
-5 49 -25 15 -33 15 -52 0 -58 -7 -3 51 -6 130 -6 127 -1 142 1 129 14 -13 12
-13 20 -4 45 11 28 15 31 52 28 35 -3 40 -7 49 -36 7 -26 6 -36 -5 -43 -9 -6
7 -9 46 -9 38 0 55 3 46 9 -10 6 -12 19 -7 45 7 36 8 37 49 34 37 -3 42 -6 51
-36 7 -26 6 -36 -5 -43 -9 -5 15 -9 66 -9 59 1 75 3 63 11 -13 7 -18 23 -18
55 0 44 1 45 28 42 23 -3 29 -11 43 -53 16 -51 40 -68 63 -45 8 9 7 11 -3 8
-10 -2 -20 11 -28 37 -8 22 -21 46 -30 53 -9 6 -12 12 -6 12 20 0 43 30 43 55
0 37 -36 55 -105 54 -33 0 -54 -3 -47 -6 8 -3 12 -35 12 -109 0 -144 -18 -138
-80 29 -18 48 -36 84 -40 80 -5 -4 -25 -52 -46 -105 -20 -54 -40 -98 -43 -98
-3 0 -24 47 -45 105 -22 58 -43 102 -47 98 -4 -4 -24 -52 -45 -105 -38 -100
-53 -119 -55 -70 -2 23 -2 24 -6 4 -6 -29 -35 -44 -78 -40 l-34 3 38 60 c21
33 50 81 65 108 l28 47 -81 0 -81 0 1 -37 1 -38 14 33 c13 29 18 32 60 32 25
0 43 -3 41 -7 -51 -94 -122 -202 -127 -196 -4 4 -24 54 -45 111 -21 56 -40
102 -41 102 -2 0 -5 -4 -8 -9z m758 -23 c7 -11 7 -26 0 -45 -7 -22 -17 -29
-42 -31 -32 -3 -32 -3 -32 41 0 24 3 47 7 51 12 12 55 2 67 -16z m-734 -89 c0
-5 -13 -9 -30 -9 -35 0 -35 -1 -14 48 l15 37 15 -34 c8 -18 14 -37 14 -42z
m350 0 c0 -5 -13 -9 -30 -9 -35 0 -34 -3 -14 46 l16 38 14 -33 c8 -18 14 -37
14 -42z m180 4 c0 -8 -12 -13 -30 -13 -35 0 -34 -3 -14 46 l17 39 13 -30 c7
-16 13 -36 14 -42z"
                  />
                </g>
              </svg>            </Link>
          </div>
          {/* search box */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData &&
                  searchData.map((i, index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className={`${styles.button}`}>
            <Link to={`${isSeller ? "/dashboard" : "/shop-create"}`}>
              <h1 className="text-[#fff] flex items-center">
                {isSeller ? "Go Dashboard" : "Become Seller"}{" "}
                <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
              >
                All Categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
            </div>
          </div>
          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[35px] h-[35px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
