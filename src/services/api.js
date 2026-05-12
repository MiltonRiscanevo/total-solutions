const API_URL = import.meta.env.VITE_API_URL;

export async function getServices() {
  const response = await fetch(`${API_URL}/services`);
  return response.json();
}