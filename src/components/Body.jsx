import React from "react";

export default function Body() {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-around lg:items-center lg:gap-16">
      {/* image container */}
      <div className="flex justify-center items-center mb-2">
        <img
          src="img.jpg"
          alt="hero image"
          className="aspect-square object-cover rounded-full max-w-64 max-h-64 md:max-w-80 md:max-h-80 lg:max-w-96 lg:max-h-96"
        />
      </div>
      {/* rest of the body */}
      <div className="lg:max-w-[450px]">
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-500 mb-3">
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages, availabe online.
        </p>
        <form className="flex flex-col gap-4 mb-3 sm:flex-row">
          <input
            type="email"
            placeholder="Enter email address"
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
          />
          <button className="rounded-md px-4 py-3 text-white bg-blue-500 hover:bg-blue-600">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2 items-center">
          <img src="check-circle-fill.svg" alt="check box" />
          <p className="font-lato text-gray-500">
            No span ever, unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
