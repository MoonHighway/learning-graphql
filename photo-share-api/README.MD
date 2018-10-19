Photo Share API
===============
The finished version of the photo-share-api!

Installation
-------------
From this folder, run `yarn` or `npm install` to install the dependencies. Next, open your [.env file](.env) and values for the `DB_HOST`, GitHub Authorization, and Apollo Engine.

```
DB_HOST=<YOUR_MONGODB_HOST>
CLIENT_ID=<YOUR_GITHUB_CLIENT_ID>
CLIENT_SECRET=<YOUR_GITHUB_CLIENT_SECRET>
ENGINE_API_KEY=<YOUR_ENGINE_API_KEY>
```

Finally you can start this service by running `yarn start` or `npm start`. Once started the service will be running on port `4000`, and you can access the playground at [http://localhost:4000/playground](http://localhost:4000/playground). Send your service a test query to make sure it works:

```graphql
query {
    totalUsers
    totalPhotos
}
```

Want to see the project running on Glitch instead? 

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!#!/remix/photo-share-api-ch07)

Note: You'll still need to replace the values of the `.env` file with your unique variables.
 
