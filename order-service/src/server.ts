import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// POST /orders - Create an order
app.post('/orders', (req: Request, res: Response) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    res.status(400).json({ error: 'productId and quantity are required' });
    return;
  }

  // TODO: Will call Product Service via gRPC in Phase 4
  // For now, return a placeholder response
  res.json({
    orderId: `order-${Date.now()}`,
    productId,
    quantity,
    status: 'pending',
    message: 'gRPC integration coming in Phase 4',
  });
});

// Start Express server
app.listen(PORT, () => {
  console.log(`Order Service - REST API running on http://localhost:${PORT}`);
});

// TODO: gRPC client will be added in Phase 4
