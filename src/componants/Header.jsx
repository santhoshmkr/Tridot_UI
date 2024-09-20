import React from "react";
import Logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="">
      <div class="px-12 flex justify-between items-center mt-10">
        <div class="flex justify-center items-center text-[#B0B0B0] gap-2 font-[Roboto] text-[14px] border p-2 rounded-md">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            id="search"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
              ></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search here"
            class="border-none outline-none"
            name=""
            id=""
          />
        </div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div class="text-[10px] font-bold flex gap-2">
          <button class="bg-red-600 text-white px-3 py-2">SUBSCRIBE</button>
          <button class="border-gray-200 px-3 py-2 border">SIGN IN</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
