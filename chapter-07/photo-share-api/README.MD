Photo Share API
===============
A copy of the Photo Share API that was built in Chapter 5. Use this API to test your clients.

Installation
-------------
From this folder run `yarn` or `npm install` to install the dependencies. Next, open your [.env file](.env) and values for the `DB_HOST` and Github Authorization:

```
DB_HOST=<YOUR_MONGODB_HOST>
CLIENT_ID=<YOUR_GITHUB_CLIENT_ID>
CLIENT_SECRET=<YOUR_GITHUB_CLIENT_SECRET>
```

Finally you can start this service by running `yarn start` or `npm start`. Once started the service will be running on port `4000`, and you can access the playground at [http://localhost:4000/playground](http://localhost:4000/playground). Send your service a test query to make sure it works:

```graphql
query {
    totalUsers
    totalPhotos
}
```