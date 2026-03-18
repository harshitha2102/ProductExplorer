export const fetchProducts = async (page = 1) => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};