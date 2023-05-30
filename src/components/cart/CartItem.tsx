import {
  Button,
  ButtonGroup,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import {
  CartContext,
  ECartOperation,
  ICartItem,
} from '../../context/cart/cartContext';

type CartItemProps = {
  item: ICartItem;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateProductCount } = useContext(CartContext);

  return (
    <Flex my={6} gap={4} width='full'>
      <Image src={item.image} alt={item.title} height='60px' />

      <VStack flex={1}>
        <Text alignSelf='start' fontFamily='fantasy'>
          {item.title}
        </Text>
        <Text alignSelf='start'>
          ${item.price} x{item.quantity}
        </Text>
      </VStack>

      <VStack>
        <Text fontWeight='bold'>${item.quantity * parseFloat(item.price)}</Text>
        <ButtonGroup colorScheme='orange'>
          <Button
            onClick={() => updateProductCount(ECartOperation.dec, item.id)}
          >
            -
          </Button>
          <Button
            onClick={() => updateProductCount(ECartOperation.inc, item.id)}
          >
            +
          </Button>
        </ButtonGroup>
      </VStack>
    </Flex>
  );
};
export default CartItem;
