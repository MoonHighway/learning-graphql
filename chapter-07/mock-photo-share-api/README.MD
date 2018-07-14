Mock GraphQL Photo Share Service
======================
This is a service that takes advantage of Apollo Server's mocking tools to generate values based on the schema. 

Installation
-------------
From this folder, run `yarn` or `npm install` to install the dependencies. 

Then, start this service by running `yarn start` or `npm start`. Once started the service will be running on port `4000`, and you can access the playground at [http://localhost:4000/playground](http://localhost:4000/playground). Send your service a test query to make sure it works:

```graphql
query {
    totalPhotos
    allPhotos {
        name
    }
}
```
All of the data for the available queries will be supplied by mocks.
