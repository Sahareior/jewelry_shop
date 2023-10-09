import React from 'react';
import './Card.css';

const Card = ({name,image,price}) => {

  return (
    <div className='container'>
      <section className="mx-auto w-fit p-12">
        <div className="w-72 h-fit group">
          <div className="relative overflow-hidden">
            <img
              className="h-96 w-full object-cover"
              src={image}
              alt=""
            />
            <div className="absolute h-full w-full bg-black/50 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </div>
          <button className="bg-gray-500 text-white py-2 mt-3 px-5">Add to cart</button>
        </div>
        <h2 className="mt-3 mr-32 text-bold  text-xl capitalize">{name}</h2>
       <div className='-mt-5'>
       <del className="text-red-700 text-lg">$49</del>
        <p className="text-xl mb- ml-1 inline-block">$ {price}</p>
       </div>
      </section>
    </div>
  );
};

export default Card;
