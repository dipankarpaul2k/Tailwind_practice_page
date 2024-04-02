import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-center">
      <ul className="flex gap-8 font-lato text-gray-400">
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <div className="max-w-[45px] max-h-[45px] rounded-full overflow-hidden">
          <img src="img.jpg" className="object-cover" />
        </div>
        <div>
          <p className="font-playfair font-thin text-sm">Have any question?</p>
          <a href="#" className="font-lato font-semibold text-sm">
            Talk to a specialist.
          </a>
        </div>
      </div>
    </div>
  );
}
