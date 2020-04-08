# Scalability Articles [(Link)](https://www.lecloud.net/tagged/scalability/chrono)

### Clones [(Link)](https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones)
- Public servers of a scalable web service are hidden behind a load balancer
- Load balancer evenly distributes load (requests from users) onto application servers 
- For example, user Steve interacts with your service and at first request, he may be served by server 2, then with second request by server 9
- Point is regardless of server landed on, Steve should receive same results 
- **First Golden Rule of Scalability** 
    - Every server contains exactly the same codebase and does not store any user-related data, like sessions or profile pictures, on local disc or memory
- Sessions should be stored in a centralized data store accessible to all application servers
- This can be an external DB or an external persistent cache, like Redix - note that an external persistent cache will have better performance
- After outsourcing sessions and serving the same codebase from all servers, an image file can be created from one of these supers - in AWS, this is called Amazon Machine Image (AMI)
- AMI is used as a "superclone" which all new instances are based upon

### Databases [(Link)](https://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database)
- With clones, servers can now horizontally scale and thousands of concurrent requests can be served - however, down the road the application becomes slower and slower until it finally breaks down, the reason: your DB
- Path 1 is stick with MySQL and have a database administrator (DBA) that does master-slave replication (read from slaves, write to master) and upgrade your master server by vertically scaling (adding more RAM)
- Path 2 is to denormalize right from the start and stay with MySQL using it like a NoSQL DB OR switch to a NoSQL DB like MongoDB - note that eventually DB requests will become slower and slower and then a cache must be introduced

### Caches [(Link)](https://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache)
- Now you have a scalable DB solution - however users suffer from slow page requests when lots of data is fetched from the DB, the solution: in-memory cache implementation
- A cache is a simple key-value store and it should reside as a buffering layer between your application and your data storage
- When the application needs to read data, it should first try to retrieve it from the cache because it holds every dataset in RAM and requests are handled fast
- There are 2 data caching patterns:
    - Cached Database Queries
        - Most commonly used caching pattern
        - Whenever you do a query to DB, you store the result dataset in cache and a hashed version of your query is the cache key
        - Subsequent queries will check if it exists in the cache already 
        - Main issue with this approach is expiration
        - When one piece of data changes (ex. table cell), you need to delete all cached queries who include that table cell
    - Cached Objects
        - See data as an object
        - Let your class assemble a dataset from your database and then store the complete instance of the class or assembled dataset in the cache
        - This allows you to easily get rid of the object whenever something changes
        - Makes asynchronous processing possible - worker servers that assemble objects and application simply consumes latest cached object and rarely touches the DB
        - Examples: user sessions, fully rendered blog articles, activity streams, user-friend relationships
        
### Asynchronism [(Link)](https://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism)
- In general, there are two paradigms asynchronism 
- Async #1 
    - First way of async processing is the "bake the breads at night and sell them in the morning" way - in terms of a web app, this means doing the time-consuming work in advance and serving the finished work with a low request time
    - Often this paradigm is used to turn dynamic content into static content
        - Pages are pre-rendered and locally stored as static HTML files on every change
        - These computing tasks are done on a regular basis by a script called every hour by a cronjob - essentially script would upload pre-rendered HTML pages to AWS S3 or Cloudfront or another Content Delivery Network (CDN)
        - This pre-computing of general data makes them very scalable and performant
- Async #2
    - In this case, the customer has special requests like a birthday cake with "Happy Birthday, Steve!" - referring to a web service, that means to handle tasks asynchronously
    - Typical workflow
        - User comes to website and starts a very computing intensive task which takes several minutes to finish
        - Frontend of website sends a job onto a job queue and immediately signals back to the user: your job is in work
        - Job queue is constantly checked by workers for new jobs
        - If there is a new job, then worker does the job and after some minutes sends a signal that the job was done
        - Frontend sees that the job was done and informs user about it
    - Basic idea is to have a queue of tasks that a worker can process
- With asynchronism, backends become nearly infinitely scalable and frontends become snappy