import axios from 'axios';
import { getToken } from '@/utils/getToken';

const token = getToken();

const instance = axios.create({
  baseURL: 'http://localhost:5001/',
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default instance;
