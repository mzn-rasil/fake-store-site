import { Box, Flex, Skeleton } from '@chakra-ui/react';
import React from 'react';

const ProductSkeleton: React.FC = () => {
  return (
    <Flex mt={12} gap={12}>
      <Skeleton height='450px' width='500px' startColor='orange.200' />

      <Box width='full'>
        <Skeleton startColor='orange.200' height='40px' />
        <Skeleton startColor='orange.200' mt={4} height='10px' width='100px' />
        <Skeleton startColor='orange.200' mt={2} height='20px' width='30px' />
        <Skeleton startColor='orange.200' mt={2} height='10px' />
        <Skeleton startColor='orange.200' mt={2} height='10px' />
        <Skeleton startColor='orange.200' mt={2} height='10px' />
        <Skeleton startColor='orange.200' mt={2} height='10px' />
      </Box>
    </Flex>
  );
};
export default ProductSkeleton;
