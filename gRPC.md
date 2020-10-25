# gRPC Overview

## Introduction

- Current trend is the microservice architecture
- A popular choice for API development is REST (HTTP-JSON)
- However, this is hard as there are considerations such as:
  - Data model (JSON, XML, something binary)
  - Endpoints
  - How to invoke it and error handling
  - API efficiency, latency, scalability, load balancing, authentication, monitoring, logging
- At it's core, an API is a contract that takes a REQUEST (client) and returns a RESPONSE (server) and gRPC takes this idea to provide a solution

---

## What is gRPC

- An open source RPC (remote procedure call) framework that can run in any environment
- Efficiently connects polyglot services in a microservices styled architecture with support for load balancing, tracing, health checking, and authentication
- gRPC uses Protocol Buffers as the Interface Definition Language (IDL) for describing the service interface and payload message structure
- At a high level, gRPC is based around defining a service (specifying methods to be called remotely with their parameters and return types), making it easier to create distributed services

  - Server implements this interface and runs a gRPC server to handle client calls
  - Client has a stub that provides the same methods as the server

  ![gRPC](https://grpc.io/img/landing-2.svg)

---

## Protocol Buffers

- gRPC uses Protocol Buffers to serialize structured data
- A Protocol Buffer (.proto) file contains:
  - Messages: data for request & response
  - Service: service name and RPC endpoints
- A Protocol Buffer compiler (protoc) is used with a gRPC plugin to generate client & server code as well as regular protocol buffer code for populating, serializing, and retrieving message types from your proto file

```protobuf
// Example of Protocol Buffer (.proto) File
syntax = "proto3";

// Service
service GreetService {
    rpc Greet(GreetRequest) returns (GreetResponse) {};
}

// Request
message GreetRequest {
    string name = 1;
}

// Response
message GreetResponse {
  string message = 1;
}
```

- Efficiency of Protocol Buffers compared to JSON
  - Language agnostic
  - Save network bandwidth since data is binary meaning it is less CPU intensive and can be efficiently serialized

---

## gRPC Service Methods

- Unary RPC
  - Client sends a single request to server and gets a single response
- Server Streaming RPC
  - Server returns a stream of messages in response to a client's request
- Client Streaming RPC
  - Client sends a stream of messages to the server and waits for server to respond with a single message
- Bidirectional Streaming RPC
  - Call is initiated by client invoking the method
  - Client & server stream processing is application specific
  - Both streams are independent so read and write messages can operate in any order
  - Example: server waits until it receives all client messages before sending responses
  - Example: server and client play ping-pong - client sends a request, server sends back a response, and cycle continues

```protobuf
  // Unary RPC
  rpc SayHello(HelloRequest) returns (HelloResponse);

  // Server Streaming RPC
  rpc LotsOfReplies(HelloRequest) returns (stream HelloResponse);

  // Client Streaming RPC
  rpc LotsOfGreetings(stream HelloRequest) returns (HelloResponse);

  // Bidirectional Streaming RPC
  rpc BidiHello(stream HelloRequest) returns (stream HelloResponse);
```

---

## gRPC Channels

- Used when creating a client stub to provide a connection to a gRPC server
- Clients specify channel arguments to modify gRPC default behaviour
- Handling closing a channel is dependent on the language

---

## Resources

- [gRPC Introduction](https://www.youtube.com/watch?v=XRXTsQwyZSU)
- [Protocol Buffers in gRPC](https://www.youtube.com/watch?v=yfZB2_rT_Pc)
- [gRPC Documentation](https://grpc.io/docs/)
