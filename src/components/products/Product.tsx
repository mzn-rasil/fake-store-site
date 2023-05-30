import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useRef } from 'react';
import { IProduct, getProduct } from '../../api/productsApi';
import { CartContext } from '../../context/cart/cartContext';
import { useQuery } from 'react-query';

type ProductProps = {
  id: IProduct['id'] | undefined;
};

const Product: React.FC<ProductProps> = ({ id }) => {
  const { data: product } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(Number(id)),
    suspense: true,
  });
  const productCountRef = useRef<HTMLInputElement | null>(null);
  const { onAddToCart } = useContext(CartContext);

  const onIncrement = () => {
    if (productCountRef.current) {
      productCountRef.current.value = String(
        +productCountRef?.current?.value + 1
      );
    }
  };

  const onDecrement = () => {
    if (productCountRef.current) {
      if (productCountRef.current?.value == '0') return;
      productCountRef.current.value = String(
        +productCountRef?.current?.value - 1
      );
    }
  };

  const addToCartHandler = () => {
    const productCount = Number(productCountRef?.current?.value);

    if (productCount <= 0) return;

    const item = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: productCount,
    };

    onAddToCart(item);

    productCountRef!.current!.value = '0';
  };

  return (
    <Flex mt={12} gap={12}>
      <Box
        p={6}
        border='1px groove'
        borderRadius={8}
        _hover={{
          boxShadow: '2xl',
        }}
        transition='0.4s all ease-in-out'
        bg='orange.100'
      >
        <Image
          src={product.image}
          alt={product.title}
          loading='lazy'
          mixBlendMode='darken'
          objectFit='contain'
          maxWidth='300px'
          height='450px'
        />
      </Box>

      <Box flex={1}>
        <Heading fontFamily='fantasy'>{product.title}</Heading>
        <Badge mt={2} colorScheme='orange' py={1} px={3}>
          {product.category}
        </Badge>
        <Text mt={4} fontSize={24} fontWeight='black' fontFamily='fantasy'>
          ${product.price}
        </Text>
        <Text
          mt={2}
          fontSize={12}
          fontFamily='cursive'
          color='gray.500'
          textTransform='capitalize'
          letterSpacing={2}
        >
          {product.description}
        </Text>

        <HStack mt={6} maxWidth='250px'>
          <Button
            colorScheme='orange'
            variant='outline'
            _hover={{ bg: 'orange.300', color: 'white' }}
            onClick={onDecrement}
          >
            -
          </Button>
          <Input
            type='number'
            name='productCount'
            ref={productCountRef}
            min={0}
            defaultValue={0}
            borderColor='ornage.300'
            textAlign='center'
            color='orange.800'
            fontWeight='bold'
            _focus={{
              borderColor: 'orange.400',
            }}
          />
          <Button
            colorScheme='orange'
            variant='outline'
            _hover={{ bg: 'orange.300', color: 'white' }}
            onClick={onIncrement}
          >
            +
          </Button>
        </HStack>

        <Button
          mt={4}
          width='250px'
          colorScheme='orange'
          onClick={addToCartHandler}
        >
          Add to cart
        </Button>
      </Box>
    </Flex>
  );
};
export default Product;
