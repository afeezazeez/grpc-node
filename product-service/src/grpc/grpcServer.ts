import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { getProduct, checkStock } from './handlers/productHandlers';

const GRPC_PORT = 50051;
const PROTO_PATH = path.join(__dirname, '../../proto/product.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const productProto = grpc.loadPackageDefinition(packageDefinition) as any;

export function startGrpcServer() {
  const server = new grpc.Server();

  server.addService(productProto.product.ProductService.service, {
    GetProduct: getProduct,
    CheckStock: checkStock,
  });

  server.bindAsync(
    `0.0.0.0:${GRPC_PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error('gRPC server failed to start:', err);
        return;
      }
      console.log(`gRPC server running on port ${port}`);
    }
  );
}

