import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 259 91"
            width="259"
            height="91"
          >
            <title>image</title>
            <defs>
              <image
                width="259"
                height="91"
                id="img1"
                href="data:image/png;base64,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"
              />
            </defs>
            <style></style>
            <use id="Background" href="#img1" x="0" y="0" />
          </svg>
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <AiFillYoutube
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link,index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Becodemy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
