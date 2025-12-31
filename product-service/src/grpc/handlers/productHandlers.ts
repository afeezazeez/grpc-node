import * as grpc from '@grpc/grpc-js';
import { findProductById } from '../../data/products';

export function getProduct(
  call: grpc.ServerUnaryCall<any, any>,
  callback: grpc.sendUnaryData<any>
) {
  const productId = call.request.product_id;
  const product = findProductById(productId);

  if (!product) {
    callback({
      code: grpc.status.NOT_FOUND,
      message: 'Product not found',
    });
    return;
  }

  callback(null, {
    id: product.id,
    name: product.name,
    price: product.price,
    stock: product.stock,
  });
}

export function checkStock(
  call: grpc.ServerUnaryCall<any, any>,
  callback: grpc.sendUnaryData<any>
) {
  const { product_id, quantity } = call.request;
  const product = findProductById(product_id);

  if (!product) {
    callback({
      code: grpc.status.NOT_FOUND,
      message: 'Product not found',
    });
    return;
  }

  callback(null, {
    available: product.stock >= quantity,
    current_stock: product.stock,
  });
}

