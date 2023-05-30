import { Spinner, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <Stack
      height='300px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='orange.500'
        size='xl'
      />
      <Text fontSize={20}>Loading</Text>
    </Stack>
  );
};
export default Loader;
