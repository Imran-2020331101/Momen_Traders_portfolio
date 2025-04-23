import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductItem
          key={index} // Important for React to efficiently update the list
          index={index}
          imageUrl={product.imageUrl}
          title={product.title}
          description={product.desc}
          buttons={product.buttons}
        />
      ))}
    </div>
  );
}

export default ProductList;