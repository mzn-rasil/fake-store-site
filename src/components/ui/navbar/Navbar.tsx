import {
  Badge,
  Box,
  Button,
  Circle,
  HStack,
  Heading,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  StackDivider,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { CartContext } from '../../../context/cart/cartContext';
import CartItem from '../../cart/CartItem';
import NavbarItem from './NavbarItem';
import { AuthContext } from '../../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const navItems = [
  { id: 1, name: 'All Products', pathname: '/' },
  { id: 2, name: 'Categories', pathname: '/categories' },
];

const Navbar: React.FC = () => {
  const { cart, getNumberOfItems, getTotalPrice } = useContext(CartContext);
  const { authUser, onLogout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as='nav'
      py={8}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      borderBottom='1px solid'
      borderColor='gray.300'
    >
      <Heading fontFamily='fantasy'>FakeStoreAPI</Heading>

      <UnorderedList
        listStyleType='none'
        display='flex'
        alignItems='center'
        gap={8}
        fontSize={16}
      >
        {navItems.map((item) => (
          <NavbarItem key={item.id} item={item} />
        ))}
        <ListItem
          onClick={onOpen}
          cursor='pointer'
          _hover={{ color: 'orange' }}
        >
          Cart
          <Badge colorScheme='orange' mt={-4}>
            {getNumberOfItems()}
          </Badge>
        </ListItem>

        {authUser ? (
          <ListItem>
            <HStack>
              <Circle size={8} bg='orange.200'>
                {authUser?.username[0].toUpperCase()}
              </Circle>
              <VStack spacing={0}>
                <Text>{authUser?.username}</Text>
                <Button variant='link' onClick={onLogout}>
                  Logout
                </Button>
              </VStack>
            </HStack>
          </ListItem>
        ) : (
          <Button
            colorScheme='orange'
            variant='outline'
            _hover={{ bg: 'orange.400', color: 'white' }}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        )}
      </UnorderedList>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            {getNumberOfItems() > 0 ? (
              <VStack divider={<StackDivider borderColor='orange.700' />}>
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} item={cartItem} />
                ))}
                <VStack width='full' spacing={8}>
                  <Box
                    display='flex'
                    justifyContent='space-between'
                    width='full'
                  >
                    <Text fontSize={24} fontWeight='black'>
                      Total
                    </Text>
                    <Text fontSize={22} fontWeight='bold'>
                      ${getTotalPrice()}
                    </Text>
                  </Box>
                  <Button width='full' colorScheme='orange' py={6}>
                    Proceed to checkout
                  </Button>
                </VStack>
              </VStack>
            ) : (
              <Text>This cart is empty.</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default Navbar;
