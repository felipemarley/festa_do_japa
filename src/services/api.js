import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export default api;

export function post(url, data) {
  return api.post(url, data).then(response => response.data);
}
