// card holding a food item, price, description

import React from 'react';

const Card = ({ food }) => {
  return (
    <div className="bg-primary1 p-4 rounded-lg max-w-sm">
      <img src={food.img} className="w-full rounded-lg aspect-video" />
      <h3 className="text-primary2 font-bold text-lg mt-2">{food.name}</h3>
      <p className="text-grey1">{food.description}</p>
      <p className="text-grey1 font-bold">${food.price}</p>
    </div>
  );
};

export default Card;