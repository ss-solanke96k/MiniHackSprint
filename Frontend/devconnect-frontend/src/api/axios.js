import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.devconnect.local/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;