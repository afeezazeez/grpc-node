import express from 'express';
import productRoutes from './routes/productRoutes';
import { startGrpcServer } from './grpc/grpcServer';

const app = express();
const REST_PORT = 3001;

app.use(express.json());
app.use('/products', productRoutes);

app.listen(REST_PORT, () => {
  console.log(`REST API running on http://localhost:${REST_PORT}`);
});

startGrpcServer();
