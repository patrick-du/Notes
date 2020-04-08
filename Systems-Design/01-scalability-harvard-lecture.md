# Scalability Lecture at Harvard Notes [(Link)](https://www.youtube.com/watch?v=-W9F__D3oY4)

### Vertical Scaling
- How do you go about scaling site so it can handle more users? 
    - One approach is vertical scaling
    - If you're running low on RAM or disk space or CPU cycles, the easiest solution is simply get more - throw money at the problem
- Why is vertical scaling not a full solution?
    - You can only upgrade one machine so much
    - Either result in exhausting own finance or reach the ceiling (state of the art technology)

### Horizontal Scaling
- Architect system so that we do not hit ceiling but rather disperse it out - rather than get one really good machine, get multiple decent machines
- How do we handle a request over multiple web servers?
    - Load balancer handles traffic and distributes request across the several backend servers
    ![Markdown Logo](https://lh4.ggpht.com/_p2ZBNGf_7w8/TYKFbJLVPZI/AAAAAAAAGUk/e47krYV3W54/image_thumb%5B15%5D.png?imgmax=800) 
    - All the servers have unique IP addresses, instead of returning a single server IP address, the load balancer's public IP address is returned - now this means servers can use private IP addresses (cannot be contacted directly)
- How does the load balancer get data to one of the backend servers?
    - Decision can be made on multiple factors
    - One approach is based on the load of a server - send request to server that is the least busy
        - Load balancer sends particular request to server 1 (TCP/IP) and then server receives the packet and sends the response back to the load balancer which, in turn, responds to the client
        - In this case, all servers are identical and you pay the price of wasting disk space for this redudancy 
    - Another approach is to have dedicated servers
        - One server containing all the HTML
        - Another server containing all the images
        - Can be done simply by having different host names such as images.site.com or videos.site.com or html.site.com
    - A simple approach to balance load across an arbitrary number of servers
        - Round robin load balancer 
        ![Markdown Logo](https://www.cisco.com/en/US/i/200001-300000/220001-230000/224001-225000/224609.jpg)
        - If it is so simple to implement, what is the catch? 
            - Server 1 could get unlucky with more heavy weight users but by the nature of round robin, more users are still going to be sent to server 1
        - What else can potentially break?
            - There is no reason for Chrome to send the same DNS request every time you click a link - that would be a waste of time
            - Instead, OS and browser will typically cache these responses
            - Therefore, next user will probably be sent to server 2 and the power user will continue to be on server 1 
        - Another thing that could break?
            - Different servers will have different sessions 
            - Sessions tend to be specific to a server meaning your session could be sitting on server 1 and by chance if you are sent to server 2 on a subsequent request, you will be prompted to log in again
            - In the example of an e-commerce site, you will have a session cookie on all the servers and each time you add an item to your cart it is placed in a different session, therefore when you head to checkout, you cannot checkout the aggregates
            - This is the problem of shared session state
        - What if dedicated servers were utilized with round robin load balancing?
            - This solves the shared session state issue but no redundancy meaning if one server breaks, issues arise
            - Additionally, if you get too popular, there is too much load for a single PHP server
- Introducing RAID (Redundant Array of Inexpensive Disks/Drives)
    - Multiple variants: RAID0, RAID1, RAID5, RAID6, RAID10
    - All variants assume you have multiple hard drives in computer
    - In RAID0, you have two hard drives of identical sizes and you stripe data across them - whereby everytime the OS wants to save a file (especially big files), it will write data in an alternating fashion to each hard drive - effectively doubling the speed at which data is written, RAID0 is nice for performance
    - However RAID1, data is mirrored whereby each time you write a file, you store it in both places simultaneously - there is a bit of performance overhead but the upside is that either drive can die and data is still intact
    - RAID10 is a combination of RAID0 and RAID1 - 4 drives where you have both striping and redundancy but it costs more
    - RAID5 and RAID6 are variants of RAID1 whereby RAID1 is kinda pricy rather than buy 1 hard drive, you have to spend twice as much and get two hard drives
    - In RAID5, you typically have 3/4/5 drives but only one is used for redundancy
        - If you have 5 1TB drives, there is 4 TB of usable space, you sacrifice 1/5 of available disk capacity while in RAID1, you sacrifice 1/2
    - RAID6 is even better since you will have 2 hard drives used for redundancy 

### Load Balancer Tech
- Relatively easy with software such as Amazon's ELB (elastic load balancer), LVS (Linux virtual server)
- Also hardware solutions such as Barracuda, Cisco, Citrix, F5 - however, they are very overpriced

### Sticky Sessions and Session Affinity
- Sticky session refers to the feature of load balancing solutions to route the requests for a particular session to the same server that serviced the first request for that session - used to ensure that an in-proc session is not lost as a result of requests for a session being routed to different servers
- However, sticky sessions can cause uneven load distribution across servers
![Sticky Sessions](https://www.imperva.com/learn/wp-content/uploads/sites/13/2019/01/session-stickiness-diagram.jpg)
- Despite this, there is still a need for sticky sessions meaning when you visit a website multiple times, your session is somehow preserved
- One approach was shared storage but there wasn't a perfect solution yet since even though we put everyone's cookies on the same server, there is still a need for some redundancy
- Another approach is cookies themselves can offer a solution to sticky sessions
    - Storing everything in cookies is a bad idea since it violates privacy - instead, store the ID of the server into the cookie
    - Downsides to this is that IP addresses can change and world does not need to know your IP address
    - Rather, why don't we take the PHP approach of storing a big random number and have the load balancer remember that that big random number belongs to server 1 or 2

### Data Replication
- Replication feature is about making automatic copies of something
![Master DB](https://dev.mysql.com/doc/refman/5.7/en/images/redundancy-before.png)
- Generally have a master DB where you read and write data to
    - Master DB has one or more slave DBs attached to it 
    - Purpose is to get a copy of every row that's in the master DB - so anytime a query is executed on the master that same query is copied down to one or more slaves
    - In theory, master and slaves are identical to each other
- What is the upside?
    - If DB 1 dies, you have 3 backups that are identical
    - Load balancing isn't specific to HTTP requests - we can utilize this for queries
    - Slaves can be used either for redundancy or to balance READ requests across them
- What is a fault in this layout?
    - Single point of failure for WRITES if a server dies
    - Facebook could be kept alive by allowing profile browsing and reading but status updates could be offline until we promote a slave to a master
- Our probability would be better of uptime if we threw more hardware at the problem
    - Have a master-master setup whereby this time you can write to server 1 or server 2 and that query is replicated on the other server
    - Therefore, if one goes down, you still have another master up and running
- Load Balancing and Replication
    - Similar to master-master mode but in the context of load balancers, it is called active-active mode where the pair of load balancers are constantly listening for connections and either one of which can receive packets from the outside world to relay them to backend servers
    ![](https://lh3.googleusercontent.com/proxy/dAZU4JcCEGCCl5N1oAi3BDpxlXb_WLiwP4D9ZLGo4OE-WUsCWNfPkQCoklEm07E0sijgEIcWirBWtO8tNor5h4-tl7jRdjTTlFY7E7JAjfxcsQD25g1zEEKJ-S3LcAGCdNULQqOoY7rWtHyCfR1UmOKIqQ5L)

### Partitioning 
- Example: Facebook used to have a different server for each school because it didn't have a big enough server to handle Harvard and MIT
- Early on, it is pretty clean since it leverages partioning where Harvard users go to one server while MIT goes to another server
- The downside is if you are trying to break between the Harvard-MIT boundary
- Can be used more simply
    - Users with last name A-L can be on servers 1 and 2
    - Users with last name M-Z can be on servers 3 and 4
    ![](https://docs.oracle.com/cd/E22289_01/html/821-1272/figures/Distribution_with_load_balancing.png)
- In general, partioning is not a bad idea and is very common in DB since you can have redundancy yet still balance load based on high-level user information - take into account what someone's name is and send them to specific server
- High availibility refers to some kind of relationship between a pair or more of servers that is somehow checking each other's "heartbeats" so that if one dies, the other takes on the entire burden of the service being provided 