# REST API Authentication
## Authentication vs Authorization
* Authentication refers to an entity proving an identity
* Authorization refers to an entity proving a right to access (permissions)
* An API can authenticate you but not authorize you to make a certain request
    * For example, a student user can be authenticated but not authorized to adjust grades

---

## Common Authentication Methods

###  1. HTTP Authentication Schemes (Basic & Bearer)
* Basic Authetication
    * Most straightforward method - does not require cookies, session IDs, login pages (rarely recommended due to inherent security vulnerabilities)
    * Username and password are encoded with Base64 and stored in request header Authorization
    * Base64 is an encoding technique converting a username and password into a set of 64 characters
    * Example of Basic Auth in a request header: `Authorization: Basic <user:password>`
* Bearer Authetication
    * Utilizes security tokens called bearer tokens
    * Bearer tokens grants access to certain resources
    * Token is stored in the Authorization header when making requests to protected resources
    * Example of Bearer Auth in a request header: `Authorization: Bearer <token>`

###  2. API Keys
* Created as a fix to early authentication issues of HTTP Basic Authentication
* Using API keys authenticates the applicaton to access the API without referencing an actual user
* API key is sent on every request and the API uses the key to identify the application and authorize the request
* Keys are stored differently depending on the API:
    * Authorization header (proposed standard): `Authorization: Apikey <apikey>`
    * Body parameter
    * Query string
    * Custom header
    ```bash
        curl -X POST https://language.googleapis.com/v1/documents:analyzeEntities?key=API_KEY
        
        Cloudflare requires the API key to be sent in a custom header:
        
        curl https://api.cloudflare.com/client/v4/zones/cd7d0123e301230df9514d \
            -H "Content-Type:application/json" \
            -H "X-Auth-Key:1234567893feefc5f0q5000bfo0c38d90bbeb" \
            -H "X-`Auth-Email:example@example.com"
    ```
* API keys can be adequate solutions when an API is limited to the "read" functionality
* However, they serve as a security vulnerability when there are edit, modify, and delete functionalites as the key is transmitted in the request which can easily be picked up at any point where the network is insecure

###  3. Token-based Authentication Using OAuth 2.0