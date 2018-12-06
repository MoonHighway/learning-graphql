# Welcome
This project contains minor tweaks I've made to the excellent examples provided by the Learning GraphQL book below.

# Getting started
The easiest way to use this repo is to have [Docker](https://www.docker.com) installed and configured on your development machine. 

Please go to [GitHub Developer Settings](https://github.com/settings/developers) to create a new [OAuth Application](https://github.com/settings/applications/new) with the following settings:
+ Application name - Whatever you want
+ Homepage URL - [http://localhost:3000](http://localhost:3000)
+ Authorization callback URL - [http://localhost:3000](http://localhost:3000)

Be sure to note the `Client ID` and `Client Secret` values.

Each directory contains a `.env` file for reference. Be sure to update them with appropriate settings for your environment which include:
+ GitHub client ID
+ GitHub client secret
+ OPTIONAL: MongoDB connection string
    - It is fine to use the default connection string of `mongodb://mongodb:27017/photoshare` - by default it will create a new database for you on the `graphql-mongodb` service.

Before starting this project, you will need to update the following `.env` files:
+ `nextjs-with-apollo/.env`
+ `photo-share-api/.env`
+ `photo-share-client/.env`

Once you have properly created and configured your `.env` files, be sure to edit `.gitignore` and uncomment the lines:
```sh
...
# nextjs-with-apollo/.env
# photo-share-api/.env
# photo-share-client/.env
```

Once this is complete, you can spin up the project by running:

    $ npm start

This will create the following Docker containers:
+ `graphql-nextjs` - A simple [NextJS](https://nextjs.org) web application to work with our GraphQL API
    - By default, this project **WILL NOT** hot reload changes made to this app in the Docker container. 
+ `graphql-web` - A simple [React](https://reactjs.org) web application to work with our GraphQL API
+ `graphql-api` - The [GraphQL](https://graphql.org) server powered by [Express](https://expressjs.com)
    - NOTE: This is an example for educational purposes and should be hardened before deploying to production.
+ `graphql-mongodb` - A [MongoDB](https://www.mongodb.com) server
    - By default, no database data is stored. If you would like to have this project retain data, uncomment the following two lines in the `./docker-compose.yml` file:
    ```sh
    # volumes:
    #   - ./photo-share-api/.docker/mongodb/data/db:/data/db
    ```

You will want to wait until you see the entire application has loaded. You will see something like:
```sh
graphql-api       | Loaded 'mongodb:27017' in [0] seconds
graphql-api       | wait done with status=0
graphql-mongodb   | 2018-12-03T01:43:12.998+0000 I STORAGE  [LogicalSessionCacheRefresh] createCollection: config.system.sessions with generated UUID: 043a13f0-67d4-48d4-a4f1-a594c00cd6fa
graphql-mongodb   | 2018-12-03T01:43:12.998+0000 I NETWORK  [initandlisten] waiting for connections on port 27017
graphql-mongodb   | 2018-12-03T01:43:13.012+0000 I INDEX    [LogicalSessionCacheRefresh] build index on: config.system.sessions properties: { v: 2, key: { lastUse: 1 }, name: "lsidTTLIndex", ns: "config.system.sessions", expireAfterSeconds: 1800 }
graphql-mongodb   | 2018-12-03T01:43:13.012+0000 I INDEX    [LogicalSessionCacheRefresh] 	 building index using bulk method; build may temporarily use up to 500 megabytes of RAM
graphql-mongodb   | 2018-12-03T01:43:13.013+0000 I INDEX    [LogicalSessionCacheRefresh] build index done.  scanned 0 total records. 0 secs
graphql-mongodb   | 2018-12-03T01:43:13.098+0000 I NETWORK  [listener] connection accepted from 172.19.0.3:44361 #1 (1 connection now open)
graphql-mongodb   | 2018-12-03T01:43:13.099+0000 I NETWORK  [conn1] end connection 172.19.0.3:44361 (0 connections now open)
graphql-api       | [nodemon] 1.17.2
graphql-api       | [nodemon] to restart at any time, enter `rs`
graphql-api       | [nodemon] watching: *.*
graphql-api       | [nodemon] starting `node index.js`
graphql-nextjs    | [1:43:25 AM] Compiling server
graphql-nextjs    | [1:43:26 AM] Compiling client
graphql-nextjs    | [1:43:26 AM] Compiled server in 1s
graphql-nextjs    | [1:43:30 AM] Compiled client in 4s
graphql-nextjs    |  DONE  Compiled successfully in 4882ms1:43:30 AM
graphql-nextjs    | 
graphql-nextjs    | > Ready on http://localhost:3000
graphql-mongodb   | 2018-12-03T01:43:38.111+0000 I NETWORK  [listener] connection accepted from 172.19.0.3:49348 #2 (1 connection now open)
graphql-mongodb   | 2018-12-03T01:43:38.115+0000 I NETWORK  [conn2] received client metadata from 172.19.0.3:49348 conn2: { driver: { name: "nodejs", version: "3.1.0" }, os: { type: "Linux", name: "linux", architecture: "x64", version: "4.9.125-linuxkit" }, platform: "Node.js v10.13.0, LE, mongodb-core: 3.1.0" }
graphql-api       | GraphQL server running at http://localhost:4000/graphql
graphql-web       | Starting the development server...
graphql-web       | 
graphql-web       | Compiled successfully!
graphql-web       | 
graphql-web       | You can now view photo-share-client in the browser.
graphql-web       | 
graphql-web       |   Local:            http://localhost:3000/
graphql-web       |   On Your Network:  http://172.19.0.4:3000/
graphql-web       | 
graphql-web       | Note that the development build is not optimized.
graphql-web       | To create a production build, use npm run build.
graphql-web       | 
```

Assuming you are using the default configuration, you should be able to explore the [GraphQL playground](http://localhost:4000/graphql) by visiting [http://localhost:4000/graphql](http://localhost:4000/graphql) to verify the GraphQL API is running.

Assuming you are using the default configuration, you should be able to see a response from [http://localhost:3000](http://localhost:3000) to verify the NextJS web application is running.

Assuming you are using the default configuration, you should be able to see a response from [http://localhost:3001](http://localhost:3001) to verify the original React web application is running.

Once you have finished with your work - or if you would like to stop the project from running:

    $ npm run docker:down

# Resources
If you are looking to get started with GraphQL, you absolutely should treat yourself to the book below. It's a great way to dive into the fun world of GraphQL without too much of a headache. I found coding along with the examples to be mostly accurate; however there are definitely places that will make you scratch your head feverishly to figure out what the hell went wrong - ultimately offset by cloning the repo and just riding it out.

## Learning GraphQL
The code samples for *Learning GraphQL* by Eve Porcello and Alex Banks, published by O'Reilly Media

|          |          |
|----------|----------|
| ![Learning GraphQL Book Cover](__presentations/20181205-seattle-graphql/images/learning-graphql.jpg) | If you are ready to start building fullstack applications with GraphQL, Apollo, and React, this book is for you. In this book, Eve Porcello and Alex Banks provide a complete overview of GraphQL from the ground up which includes building your own full stack photo sharing application.<br><br> __Buy the book__: [Amazon](https://www.amazon.com/Learning-GraphQL-Declarative-Fetching-Modern/dp/1492030716) - [O'Reilly](http://shop.oreilly.com/product/0636920137269.do) <br>__Take the Course__: [GraphQL Workshop](https://www.graphqlworkshop.com)<br><br>  |
