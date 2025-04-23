import React from 'react';

function ProductItem({ imageUrl, title, description, index, buttons }) {
  const isEven = index % 2 === 0;

  return (
    <section className={`flex items-center px-10 py-10  ${isEven ? 'bg-white rounded-2xl' : 'flex-row-reverse'}`}>
      <div className={`w-1/2 ${isEven ? 'pr-8' : 'pl-8'}`}>
        <img
          src={imageUrl}
          alt={title}
          className="rounded-md w-150 block"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {
          buttons.map((btn)=>
            <button className='m-3 bg-[#0f1a20] text-white font-semibold py-2 px-4 rounded-md shadow-md'>
              {btn}
            </button>
          )
        }
      </div>
    </section>
  );
}

export default ProductItem;