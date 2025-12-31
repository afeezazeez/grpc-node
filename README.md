# gRPC Microservices Demo

Two Node.js microservices communicating via gRPC.

```
[Client] ──REST:3000──► [Order Service] ──gRPC:50051──► [Product Service]
```

## Structure

```
grpc-microservice/
├── grpc-proto/           ← Shared proto package (separate repo in production)
├── product-service/      ← REST API + gRPC server
└── order-service/        ← REST API + gRPC client
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
curl -X POST http://localhost:3000/orders \
  -H "Content-Type: application/json" \
  -d '{"productId": "1", "quantity": 2}'
```

## Proto Package

Both services install `@grpc-demo/proto` as a dependency:

```json
"@grpc-demo/proto": "file:../grpc-proto"
```

**In production**, replace with git URL:
```json
"@grpc-demo/proto": "git+https://github.com/your-org/grpc-proto.git"
```

## Tech Stack

- TypeScript
- Express
- gRPC (`@grpc/grpc-js`)
- Protocol Buffers
