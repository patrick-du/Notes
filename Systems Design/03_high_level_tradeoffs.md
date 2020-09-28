# High-level Trade-offs

## Performance vs Scalability [(Link)]()
- A service is scalable if it results in increased performance in a manner proportional to resources added
    - Increasing performance means serving more units of work OR handling larger units of work (growing dataset)
- If you have a performance problem: system is slow for a single user
- If you have a scalability problem: system is fast for a single user but slow under heavy load

## Latency vs Throughput
- Latency is the time to perform some action or to produce some result
- Throughput is the number of such actions or results per unit of time
- Generally, aim for maximal throughput with acceptable latency

## Availability vs Consistency 
![CAP Theorem](https://camo.githubusercontent.com/13719354da7dcd34cd79ff5f8b6306a67bc18261/687474703a2f2f692e696d6775722e636f6d2f62674c4d4932752e706e67)
### CAP theorem
- In a distributed computer system, you can only support two of the following guarantees:
    - Consistency: every read receives the most recent write or an error
    - Availability: every request receives a response, without guarantee that it contains the most recent version of the information
    - Partition Tolerance: the system continues to operate despite arbitrary partioning due to network failures
- Networks aren't reliable, therefore, you'll need to support partition tolerance - the remaining guarantee is a tradeoff between consistency and availability

### CP - Consistency and Partition Tolerance
- Waiting for a response from the partitioned node might result in a timeout error
- CP is a good choice if your business needs require atomic reads and writes
### AP - Availability and Partition Tolerance
- Responses return the most recent version of the data available on node, which might not be the latest
- Writes might take some time to propagate when the partition is resolved
- AP is a good choice if your business needs allow for eventual consistency or when the system needs to continue working despite external errors