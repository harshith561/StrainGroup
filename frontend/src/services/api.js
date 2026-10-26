import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const submitContact = async (data) => {
  try {
    const res = await apiClient.post('/contact', data);
    return res.data;
  } catch (error) {
    console.error('API Error in submitContact:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

export const subscribeNewsletter = async (email) => {
  try {
    const res = await apiClient.post('/newsletter', { email });
    return res.data;
  } catch (error) {
    console.error('API Error in subscribeNewsletter:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

export const getProjects = async () => {
  try {
    const res = await apiClient.get('/projects');
    return res.data;
  } catch (error) {
    console.error('API Error in getProjects:', error.message);
    return null;
  }
};

export const getServices = async () => {
  try {
    const res = await apiClient.get('/services');
    return res.data;
  } catch (error) {
    console.error('API Error in getServices:', error.message);
    return null;
  }
};

export const getTestimonials = async () => {
  try {
    const res = await apiClient.get('/testimonials');
    return res.data;
  } catch (error) {
    console.error('API Error in getTestimonials:', error.message);
    return null;
  }
};

export const getProducts = async () => {
  try {
    const res = await apiClient.get('/products');
    return res.data;
  } catch (error) {
    console.error('API Error in getProducts:', error.message);
    return null;
  }
};

export default apiClient;
