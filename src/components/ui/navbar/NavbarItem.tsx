import { ListItem } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

type NavbarItemProps = {
  item: {
    name: string;
    pathname: string;
  };
};

const NavbarItem: React.FC<NavbarItemProps> = ({ item }) => {
  return (
    <>
      <ListItem cursor='pointer' _hover={{ color: 'orange' }}>
        <NavLink to={item.pathname}>{item.name}</NavLink>
      </ListItem>
    </>
  );
};
export default NavbarItem;
