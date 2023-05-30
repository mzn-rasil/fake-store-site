import React from 'react';
import { IProduct } from '../../api/productsApi';
import { Card, Text, Image, Box, Heading, Spacer } from '@chakra-ui/react';

type ProductItemProps = {
  product: IProduct;
  onClick: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({ product, onClick }) => {
  return (
    <Card
      boxShadow='lg'
      borderColor='gray.200'
      width='300px'
      py={6}
      px={8}
      bg='orange.50'
      cursor='pointer'
      _hover={{ boxShadow: '2xl', transform: 'translateY(-10px)' }}
      transition='0.3s all ease-in-out'
      onClick={onClick}
    >
      <Box
        display='flex'
        justifyContent='center'
        py={4}
        borderBottom='6px'
        borderStyle='groove'
      >
        <Image
          src={product.image}
          alt={product.title}
          boxSize='300px'
          objectFit='contain'
          mixBlendMode='darken'
        />
      </Box>
      <Heading mt={4} fontSize={16} fontWeight='bold' lineHeight={6}>
        {product.title}
      </Heading>
      <Text
        fontFamily='fantasy'
        color='orange.700'
        letterSpacing='widest'
        mt={2}
      >
        ${product.price}
      </Text>
      <Spacer />
      <Text
        mt={2}
        border='1px solid'
        borderColor='orange.600'
        borderRadius={8}
        width='fit-content'
        py={1}
        px={3}
        textTransform='uppercase'
        fontSize='small'
        fontWeight='bold'
        justifySelf='end'
      >
        {product.category}
      </Text>
    </Card>
  );
};
export default ProductItem;
