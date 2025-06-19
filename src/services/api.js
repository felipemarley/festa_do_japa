const API_BASE_URL = 'http://localhost:5000';

export async function post(endpoint, data) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function get(endpoint) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  return res.json();
}
