Chapter 5 - Creating a GraphQL API
==================
We've explored the history. We've written some queries. We've created a schema. Now you're ready to create a fully functioning GraphQL service. In this chapter, we'll use Apollo Server 2.0, an open source solution from Meteor Development Group, to stand up a GraphQL server for the PhotoShare project. Along the way, we'll solidify a schema, write resolvers, incorporate a database, and add GitHub authorization to the project.

In this chapter, we'll build the PhotoShare API. The completed files for this chapter can be found at [photo-share-api](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-05/photo-share-api).

PhotoShare API
----
To run these files, simply:

1. Go to the [photo-share-api](https://github.com/eveporcello/photo-share-api-ch05) folder.
2. Run `npm install` on the folder.
3. Replace the values of the `.env` file with your unique variables. 

```
DB_HOST=<YOUR_MONGODB_HOST>
CLIENT_ID=<YOUR_GITHUB_CLIENT_ID>
CLIENT_SECRET=<YOUR_GITHUB_CLIENT_SECRET>
```
4. Run `npm start` and open your browser to `http://localhost:4000/playground`.

Want to see the project running on Glitch instead? 

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!#!/remix/photo-share-api-ch05)

Note: You'll still need to replace the values of the `.env` file with your unique variables, as shown in step 3.

Resource Links
----
* [Apollo Server 2.0 Documentation](https://www.apollographql.com/docs/apollo-server/v2/)
* [Other GraphQL Server Implementations](http://graphql.org/code/)

### Database Integration
* [Mongo Installation for Mac](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
* [Mongo Installation for PC](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
* [mLab](https://mlab.com/)
* [Local Instructions for Mongo & mLab](https://gist.github.com/eveporcello/98f9e37a65f05b9d0866137d80ed9653)

### GitHub Authorization
* [GitHub](https://github.com)
