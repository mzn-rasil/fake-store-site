import React, { Suspense } from 'react';
import WithNavbarLayout from '../components/ui/layout/WithNavbarLayout';
import AllProducts from '../components/products/AllProducts';
import Loader from '../components/ui/loader/Loader';

const HomePage: React.FC = () => {
  return (
    <WithNavbarLayout>
      <Suspense fallback={<Loader />}>
        <AllProducts />
      </Suspense>
    </WithNavbarLayout>
  );
};
export default HomePage;
