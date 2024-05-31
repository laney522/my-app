// featured section for 3 foods, use the Card component

import React from 'react';
import Card from './Card';

const foods = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Pepperoni, cheese, and tomato sauce on a thin crust. A classic favorite!',
    price: 10,
    img: 'pizza.png'
  },
  {
    id: 2,
    name: 'Burger',
    description: 'Juicy beef patty with lettuce, tomato, and cheese on a sesame seed bun. Served with fries.',
    price: 12,
    img: 'burger.png'
  },
  {
    id: 3,
    name: 'Pasta',
    description: 'Spaghetti noodles with marinara sauce and meatballs. A hearty and delicious meal!',
    price: 8,
    img: 'pasta.png'
  }
]

const Featured = () => {
  return (
    <div id="featured" className="mx-auto max-w-6xl p-8 my-10">
      <h2 className="text-3xl font-serif font-bold text-primary1 my-4">Featured Foods</h2>
      <div className="grid grid-cols-3 gap-4">
        {foods.map((food) => (
          <Card key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Featured;