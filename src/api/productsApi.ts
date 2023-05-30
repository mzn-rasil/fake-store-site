import axios from 'axios';

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image?: string;
}

const productsApi = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
});

export const getProducts = async () => {
  try {
    const { data } = await productsApi.get('');
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getProduct = async (id: IProduct['id']) => {
  try {
    const { data } = await productsApi.get(`/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getCategories = async () => {
  try {
    const { data } = await productsApi.get('/categories');
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getProductsByCategory = async (category: IProduct['category']) => {
  try {
    const { data } = await productsApi.get(`/category/${category}`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
