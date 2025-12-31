import express, { Request, Response } from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

// Hardcoded products (in-memory)
const products = [
  { id: '1', name: 'Laptop', price: 999.99, stock: 10 },
  { id: '2', name: 'Keyboard', price: 79.99, stock: 25 },
  { id: '3', name: 'Mouse', price: 29.99, stock: 50 },
];

// GET /products - List all products
app.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

// GET /products/:id - Get product by ID
app.get('/products/:id', (req: Request, res: Response) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  res.json(product);
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Product Service - REST API running on http://localhost:${PORT}`);
});

// TODO: gRPC server will be added in Phase 3
