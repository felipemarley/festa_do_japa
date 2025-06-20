
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});


export async function post(url, payload) {
  const response = await api.post(url, payload);
  return response.data; 
}

export default api;
