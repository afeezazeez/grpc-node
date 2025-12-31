import { Request, Response } from 'express';
import { getProduct, checkStock } from '../grpc/productClient';

export async function createOrder(req: Request, res: Response) {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    res.status(400).json({ error: 'productId and quantity are required' });
    return;
  }

  try {
    const product = await getProduct(productId);

    const stockCheck = await checkStock(productId, quantity);

    if (!stockCheck.available) {
      res.status(400).json({
        error: 'Insufficient stock',
        requested: quantity,
        available: stockCheck.current_stock,
      });
      return;
    }

    const order = {
      orderId: `order-${Date.now()}`,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
      quantity,
      totalPrice: product.price * quantity,
      status: 'confirmed',
    };

    res.status(201).json(order);
  } catch (err: any) {
    if (err.code === 5) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.status(500).json({ error: 'Failed to create order', details: err.message });
  }
}

