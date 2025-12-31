import express from 'express';
import orderRoutes from './routes/orderRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});
