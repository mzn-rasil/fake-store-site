import {
  Button,
  Flex,
  Text,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { loginUser } from '../api/authApi';
import { AuthContext } from '../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  username: yup
    .string()
    .required('This field is required')
    .min(3, 'Must be greater than 3 characters')
    .max(15, 'Must be less than 15 characters'),
  password: yup.string().required('This field is required'),
});

interface ILoginUser {
  username: string;
  password: string;
}

const initialValues: ILoginUser = {
  username: '',
  password: '',
};

const LoginPage: React.FC = () => {
  const { authUser, onLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (user: ILoginUser) => {
    try {
      setIsLoading(true);
      const data = await loginUser(user);
      onLogin({
        token: data.token,
        username: user.username,
      });
    } catch (error: any) {
      setError('root', { message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      navigate('/');
    }
  }, []);

  return (
    <Flex
      as='main'
      height='100vh'
      width='full'
      bg='orange.50'
      justify='center'
      align='center'
    >
      <Flex
        minWidth='400px'
        bg='orange.100'
        px={16}
        py={12}
        borderRadius={10}
        boxShadow='2xl'
      >
        <Stack
          as='form'
          onSubmit={handleSubmit(onSubmit)}
          width='full'
          spacing={10}
        >
          <Heading as='h1' textAlign='center' color='gray.800'>
            Login
          </Heading>
          {errors?.root && (
            <Text color='red' textTransform='capitalize'>
              {errors?.root?.message}
            </Text>
          )}

          <FormControl isInvalid={!!errors?.username}>
            <FormLabel>Username</FormLabel>
            <Input
              bg='orange.50'
              fontSize={14}
              type='text'
              focusBorderColor='orange.500'
              {...register('username')}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors?.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                bg='orange.50'
                fontSize={14}
                type={showPassword ? 'text' : 'password'}
                focusBorderColor='orange.500'
                {...register('password')}
              />
              <InputRightElement mr={3}>
                <Button
                  colorScheme='orange'
                  height='fit-content'
                  py={1}
                  px={6}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type='submit'
            colorScheme='orange'
            variant='outline'
            _hover={{ bg: 'orange.500', color: 'white' }}
            isLoading={isLoading}
          >
            Submit
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
export default LoginPage;
