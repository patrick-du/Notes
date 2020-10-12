# gRPC Overview

## Introduction

- Current trend is the microservice architecture
- A popular choice for API development is REST (HTTP-JSON)
- However, this is hard as there are considerations such as:
  - Data model (JSON, XML, something binary)
  - Endpoints
  - How to invoke it and error handling
  - API efficiency, latency, scalability, load balancing, authentication, monitoring, logging
- gRPC solves these problems, at it's core, an API is a contract that takes a REQUEST (client) and returns a RESPONSE (server)

---

## What is gRPC

- At a high level, with gRPC, you only need to define messages and services using Protocol Buffers
- The rest of the gRPC code will be generated using the .proto file
- Modern, fast and efficient, build on top of HTTP/2, low latency, supports streaming, language independent, and makes it easy to plug in authentication, load balancing, logging, and monitoring
- RPC: Remote Procedure Call - In your client code, it looks like you're calling a function directly on the server
  ![RPC](https://i.gyazo.com/6b175d4f7e585929a76aacff12923ba1.png)

---

## Protocol Buffers

- Used to define the:
  - Messages: data, request and response)
  - Service: service name and RPC endpoints
- Finally, code is generated from this .proto file

```javascript
// Example of Protocol Buffer
syntax = "proto3";

// Data
message Greeting {
    string first_name = 1;
}

// Request
message GreetRequest {
    Greeting greeting = 1;
}

// Response
message GreetResponse {
    string result = 1;
}

// Service
service GreetService {
    rpc Greet(GreetRequest) returns (GreetResponse) {};
}
```

## Efficiency of Protocol Buffers over JSON

- Protocol Buffers are language agnostic
- Protocol Buffers save more network bandwidth since data is binary (less CPU intensive) and efficiently serialized (smaller payloads)
- Ultimately, with gRPC, the use of Protocol Buffers means faster and more efficient communication, friendly with mobile devices that have slower CPU
- Additionally, Protocol Buffers defines rules to make an API evolve without breaking existing clients (helpful for microservices)

## Resources

- [gRPC Introduction](https://www.youtube.com/watch?v=XRXTsQwyZSU)
- [Protocol Buffers in gRPC](https://www.youtube.com/watch?v=yfZB2_rT_Pc)
