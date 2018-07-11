Chapter 6  - GraphQL Clients
==================
With your GraphQL server built, it's now time to set up GraphQL on the client side. Very broadly, a client is just an application that communicates with a server. Due to the flexibility of GraphQL, there's no prescription for how to build a client. All you really need to send queries and mutations is the ability to send an HTTP request. Once the service responds with some data, you can use it in your client no matter what that client is.

Simple Clients
---------------
The following samples are in [CodeSandbox](https://codesandbox.io). You will find the code in the `src/index.js` file for each sample. Be sure to expand the CodeSandbox `console` to see the results. Also, be sure to 

1. [Fetch Client - console](https://codesandbox.io/s/lyw3vvxmrz)
2. [Fetch Client - browser](https://codesandbox.io/s/62679kz69k)
3. [GraphQL Request - query](https://codesandbox.io/s/j2976vxwx5)
4. [GraphQL Request - mutation](https://codesandbox.io/s/4rn8l12mj4)
5. [GraphQL Request - app](https://codesandbox.io/s/0o8nz79nv)

PhotoShare App
-----
This folder contains the server and the client for Chapter 6. Run the server then either run the [client project](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-06/photo-share-client) or view it on [CodeSandbox](https://codesandbox.io/s/github/MoonHighway/learning-graphql/tree/master/chapter-06/photo-share-client).

Be sure to add your GitHub CLIENT_ID to the `.env` file:

```
REACT_APP_CLIENT_ID=<YOUR_ID_HERE>
```

Resources
-----
* [Apollo Client Docs](https://www.apollographql.com/docs/react/): The GraphQL client developed by Meteor Development Group
* [create-react-app](https://github.com/facebook/create-react-app): A tool to create React applications with no build configuration