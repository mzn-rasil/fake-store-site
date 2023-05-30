import { Box, Divider, Heading } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { IProduct, getProductsByCategory } from '../../api/productsApi';
import ProductsLayout from './ProductsLayout';

type CategoryProductsProps = {
  category: IProduct['category'];
};

const CategoryProducts: React.FC<CategoryProductsProps> = ({ category }) => {
  const { isError, data: products } = useQuery(
    ['products', 'category', category],
    () => getProductsByCategory(category),
    {
      suspense: true,
    }
  );

  let content;
  if (isError) {
    content = <p>Error</p>;
  } else {
    content = <ProductsLayout products={products} />;
  }

  return (
    <Box>
      <Heading as='h3' textTransform='uppercase' fontSize={24}>
        {category}
      </Heading>
      <Divider mt={4} borderWidth='2px' borderColor='orange.800' />
      {content}
    </Box>
  );
};

export default CategoryProducts;
