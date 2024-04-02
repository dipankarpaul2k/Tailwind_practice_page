import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center gap-2">
        <img src="rocket-bold.svg" alt="logo" />
        <p className="text-sm font-bold lg:text-base">Hosterr</p>
        <p className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl px-2.5 py-1 text-xs lg:text-sm">
          Hosterr is hiring
        </p>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex justify-between items-center gap-5 text-gray-500">
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Find Domain</a>
          </li>
          <li>
            <a href="#">Why Hosterr</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex justify-between items-center gap-3">
        <a href="#" className="text-gray-500">
          Sign In
        </a>
        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-md">
          Join Waitlist
        </button>
      </div>
      <div className="flex lg:hidden">
        <img src="list-bold.svg" alt="menu icon" />
      </div>
    </div>
  );
}
