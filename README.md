# gRPC Microservices Demo

Two Node.js microservices communicating via gRPC.

```
[Client] ──REST:3000──► [Order Service] ──gRPC:50051──► [Product Service]
```

## Services

| Service | REST Port | gRPC Port |
|---------|-----------|-----------|
| Product Service | 3001 | 50051 |
| Order Service | 3000 | — |

## Quick Start

```bash
# Terminal 1 - Product Service
cd product-service
npm install
npm run dev

# Terminal 2 - Order Service
cd order-service
npm install
npm run dev
```

## Test

```bash
# Create an order (calls Product Service via gRPC)
curl -X POST http://localhost:3000/orders \
  -H "Content-Type: application/json" \
  -d '{"productId": "1", "quantity": 2}'
```

## Tech Stack

- TypeScript
- Express
- gRPC (`@grpc/grpc-js`)
- Protocol Buffers

