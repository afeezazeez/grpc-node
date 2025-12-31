import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../../proto/product.proto');
const PRODUCT_GRPC_URL = process.env.PRODUCT_GRPC_URL || 'localhost:50051';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const productProto = grpc.loadPackageDefinition(packageDefinition) as any;

const client = new productProto.product.ProductService(
  PRODUCT_GRPC_URL,
  grpc.credentials.createInsecure()
);

interface ProductResponse {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface StockResponse {
  available: boolean;
  current_stock: number;
}

export function getProduct(productId: string): Promise<ProductResponse> {
  return new Promise((resolve, reject) => {
    client.GetProduct({ product_id: productId }, (err: any, response: ProductResponse) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(response);
    });
  });
}

export function checkStock(productId: string, quantity: number): Promise<StockResponse> {
  return new Promise((resolve, reject) => {
    client.CheckStock({ product_id: productId, quantity }, (err: any, response: StockResponse) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(response);
    });
  });
}

