import axios from 'axios';

export interface ILoginUser {
  username: string;
  password: string;
}

const authApi = axios.create({
  baseURL: 'https://fakestoreapi.com/auth',
});

export const loginUser = async (user: ILoginUser) => {
  try {
    const { data } = await authApi.post('/login', user);
    return data;
  } catch (error: any) {
    // console.error('from auth api', error);
    throw new Error(error.response.data);
  }
};
