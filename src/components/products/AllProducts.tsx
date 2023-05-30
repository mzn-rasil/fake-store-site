import React from 'react';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/productsApi';
import ProductsLayout from './ProductsLayout';

const AllProducts: React.FC = () => {
  const { isError, data: products } = useQuery('products', getProducts, {
    suspense: true,
  });

  if (isError) {
    return <p>Error</p>;
  } else {
    return <ProductsLayout products={products} />;
  }
};
export default AllProducts;
