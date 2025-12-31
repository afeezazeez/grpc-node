export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export const products: Product[] = [
  { id: '1', name: 'Laptop', price: 999.99, stock: 10 },
  { id: '2', name: 'Keyboard', price: 79.99, stock: 25 },
  { id: '3', name: 'Mouse', price: 29.99, stock: 50 },
];

export function findProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

