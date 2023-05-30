import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../api/productsApi';
import ProductItem from './ProductItem';

type ProductsProps = {
  products: IProduct[];
};

const ProductsLayout: React.FC<ProductsProps> = ({ products }) => {
  const navigate = useNavigate();

  return (
    <SimpleGrid
      minChildWidth='350px'
      rowGap={12}
      p={{ base: 0, sm: 8 }}
      justifyItems='center'
    >
      {products.map((product: IProduct) => (
        <ProductItem
          key={product.id}
          product={product}
          onClick={() => navigate(`/products/${product.id}`)}
        />
      ))}
    </SimpleGrid>
  );
};
export default ProductsLayout;
