# gRPC Microservices Project - TODO Guide

A minimal project to practice gRPC communication between two Node.js microservices.

---

## Architecture

```
[Client] --REST--> [Order Service] --gRPC--> [Product Service]
```

---

## Phase 1: Project Setup ✅

- [x] Initialize `product-service` with TypeScript
- [x] Initialize `order-service` with TypeScript
- [x] Create shared `proto/` folder
- [x] Install gRPC dependencies

---

## Phase 2: Define gRPC Contract

- [ ] Create `proto/product.proto` with:
  - `GetProduct` - Fetch product by ID
  - `CheckStock` - Verify stock availability

---

## Phase 3: Build Product Service (gRPC Server)

- [ ] Set up gRPC server on port `50051`
- [ ] Hardcode a few products in memory
- [ ] Implement `GetProduct` handler
- [ ] Implement `CheckStock` handler

---

## Phase 4: Build Order Service (gRPC Client + REST)

- [ ] Set up Express server on port `3000`
- [ ] Create gRPC client
- [ ] `POST /orders` - Creates order, calls gRPC to validate product & stock
- [ ] That's it!

---

## Phase 5: Test It

- [ ] Start both services
- [ ] Hit `POST /orders` with curl
- [ ] See gRPC communication in action ✅

---

## Folder Structure

```
grpc-microservice/
├── proto/
│   └── product.proto
├── product-service/
│   ├── src/
│   │   ├── server.ts
│   │   └── handlers/
│   └── package.json
├── order-service/
│   ├── src/
│   │   ├── server.ts
│   │   └── grpc-client/
│   └── package.json
└── TODO.md
```

---

## Ports

| Service         | Protocol | Port  |
|-----------------|----------|-------|
| Product Service | REST     | 3001  |
| Product Service | gRPC     | 50051 |
| Order Service   | REST     | 3000  |

---

Ready when you are! 🚀
