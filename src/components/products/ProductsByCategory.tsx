import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import { IProduct, getCategories } from '../../api/productsApi';
import CategoryProducts from './CategoryProducts';
import { Box } from '@chakra-ui/react';
import Loader from '../ui/loader/Loader';

const ProductsByCategory: React.FC = () => {
  const { isError, data: categories } = useQuery({
    queryKey: ['products', 'categories'],
    queryFn: getCategories,
    suspense: true,
  });

  if (isError) {
    return <p>Error</p>;
  } else {
    return (
      <Box mt={12}>
        <Suspense fallback={<Loader />}>
          {categories.map((category: IProduct['category']) => (
            <CategoryProducts key={category} category={category} />
          ))}
        </Suspense>
      </Box>
    );
  }
};
export default ProductsByCategory;
