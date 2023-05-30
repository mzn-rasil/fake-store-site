import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../components/products/Product';
import ProductsByCategory from '../components/products/ProductsByCategory';
import WithNavbarLayout from '../components/ui/layout/WithNavbarLayout';
import ProductSkeleton from '../components/ui/skeleton/ProductSkeleton';
import Loader from '../components/ui/loader/Loader';

const ProductPage: React.FC = () => {
  const { id } = useParams();

  return (
    <WithNavbarLayout>
      <Suspense fallback={<ProductSkeleton />}>
        <Product id={Number(id)} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ProductsByCategory />
      </Suspense>
    </WithNavbarLayout>
  );
};
export default ProductPage;
