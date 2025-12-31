import { Request, Response } from 'express';
import { products, findProductById } from '../data/products';

export function getAllProducts(req: Request, res: Response) {
  res.json(products);
}

export function getProductById(req: Request, res: Response) {
  const product = findProductById(req.params.id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
    return;
  }
  res.json(product);
}

