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
        
        Cloudflare requires the API key to be sent via a custom header:
        
        curl https://api.cloudflare.com/client/v4/zones/cd7d0123e301230df9514d 
            -H "Content-Type:application/json" 
            -H "X-Auth-Key:1234567893feefc5f0q5000bfo0c38d90bbeb" 
            -H "X-`Auth-Email:example@example.com"
    ```
* API keys can be adequate solutions when an API is limited to the "read" functionality
* However, they serve as a security vulnerability when there are edit, modify, and delete functionalites as the key is transmitted in the request which can easily be picked up at any point where the network is insecure

###  3. Token-based Authentication Using OAuth 2.0
* Token-based architecture relies on all services receiving a token as proof that the application is allowed to call the service
* 3rd party issued token must be trusted by application and service - most popular protocol: OAuth 2.0
* Access tokens are used for authentication and authorization toget access to resources from the resource server
* Refresh tokens are used to get a new access token when the old one expires
> The OAuth 2.0 authorization framework enables a third-party application to obtain limited access to an HTTP service, either on behalf of a resource owner by orchestrating an approval interaction between the resource owner and the HTTP service, or by allowing the third-party application to obtain access on its own behalf.
* Roles
    * Resource Owner: User
        * User who authorizes an application to access their account
        * Application's access to user account is limited to the scope of authorization granted
    * Resource/Authorization Server: API
        * Resource server hosts the protected user accounts
        * Authorization server verifies user identity and issues access tokens to the application
        * Generally, a service's API fulfills both of these roles
    * Client: Application
        * Application that wants access to the user's account
        * Before doing so, it must be authorized by the user and authorization must be validated by the API
* Abstract Protocol Flow
    1. Application requests authorization to access service resources from the user
    2. User authorizes the request and the applicaion receives an authorization grant
    3. Application requests an access token from the authorization server by presenting authentication of its identity and the authorization grant
    4. If application identity is authenticated and authorization grant is valid, authorization server issues an access token to the application and authorization is complete
    5. Application requests the resource server and presents the access token for authentication
    6. If access token is valid, resource server serves the resource to the application

    ![Abstract Protocol Flow](https://assets.digitalocean.com/articles/oauth/abstract_flow.png)

---

## JSON Web Tokens (JWT)
* A self-contained method to securely transmit information between parties as a JSON object
* JWTs are digitally signed using a secret or a public/private key pair
* Signed tokens verify the integrity of the claims contained within it whereas encrypted tokens hide those claims from other parties
* Utilized for authorization and secure information exchange
> JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties.  The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.
* Structure can be represented as `xxxxx.yyyyy.zzzzz`
    * Header
        * Consist of two parts: token type (JWT) and the signing algorithm being used (HMAC, SHA256, RSA)
        ```json
            Example Header

            {
                "alg": "HS256",
                "typ": "JWT
            }
        ```
        * Header is Base64Url encoded to form the first part of the JWT
    * Payload
        * Contains the claims which are statements about an entity (typically user) and additional data
        * Registered claims
            * Set of recommended predefined claims
            * Includes iss(issuer), exp(expiration time), sub(subject), aud(audience), etc
        * Public claims
            * Defined by those using JWTs in IANA JWT Registry or as a URI to avoid collisions
        * Private claims:
            * Custom claims created to share information between parties that agree on using them
        ```json
        Example Payload

        {
            "sub": "1234567890",
            "name": "John Doe",
            "admin": true
        }   
        ```
        * Payload is Base64Url encoded to form the second part of the JWT
    * Signature
        * Used to verify message was not modified and verifies sender of the JWT
        * Signs the encoded header, encoded payload, a secret, and the algorithm specified in the header
        ```js
        HMACSHA256(
            base64UrlEncode(header) + "." +
            base64UrlEncode(payload),
            secret)
        ```
    * Output is three Base64-URL strings separated by dots

---

## Resources
* [RFC 6749 - The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
* [An Introduction to OAuth 2.0](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
* [RFC 7519 - JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519)
* [JWT](https://jwt.io/)
* [IANA JSON Web Token Registry](https://www.iana.org/assignments/jwt/jwt.xhtml)
