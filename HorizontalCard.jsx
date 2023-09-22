// HorizontalCard.js

import React from "react";

const HorizontalCard = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="grid grid-cols-6 w-full">
        <div
          className="col-span-2 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          {/* this div displays image of the card */}
        </div>
        <div className="col-span-4 flex flex-col p-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-full">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
