import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../navbar/Navbar';

const WithNavbarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box bg='orange.50' minHeight='100vh'>
      <Container maxWidth='container.xl' fontFamily='monospace'>
        <Navbar />
        {children}
      </Container>
    </Box>
  );
};
export default WithNavbarLayout;
