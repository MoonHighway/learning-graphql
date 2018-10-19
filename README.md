# Welcome
This project contains minor tweaks I've made to the excellent examples provided by the Learning GraphQL book below.

# Getting started
The easiest way to use this repo is to have [Docker](https://www.docker.com) installed and configured on your development machine. 

Before starting this project, you will need to create two `.env` files - one in `./photo-share-api` and one in `./photo-share-client`. 

Each directory contains a `sample.env` file for reference. Simply copy those values into a new `.env` file with appropriate settings which include:
+ GitHub client ID
+ GitHub client secret
+ OPTIONAL: MongoDB connection string
    - It is fine to use the default connection string of `mongodb://mongodb:27017/photoshare` - by default it will create a new database for you on the `graphql-mongodb` service.

You can spin up the project by running:

    $ npm start

This will create three Docker containers:
+ `graphql-web` - A simple React web application to work with our GraphQL API
+ `graphql-api` - The GraphQL server
+ `graphql-mongodb` - A MongoDB server
    - Data files are stored locally within this project at `./photo-share-api/.docker/mongodb`; these are NOT synced or committed to the repo unless you specifically modify the `./docker-compose.yml` file (see "If you want to persist MongoDB data" for more details) 

You will want to wait until you see the entire application has loaded. You will see something like:
```sh
graphql-mongodb | 2018-10-19T06:11:21.755+0000 I NETWORK  [initandlisten] waiting for connections on port 27017
graphql-mongodb | 2018-10-19T06:11:22.584+0000 I NETWORK  [listener] connection accepted from 192.168.160.3:46191 #1 (1 connection now open)
graphql-mongodb | 2018-10-19T06:11:22.584+0000 I NETWORK  [conn1] end connection 192.168.160.3:46191 (0 connections now open)
graphql-api    | Loaded 'mongodb:27017' in [15] seconds
graphql-api    | wait done with status=0
graphql-api    | [nodemon] 1.17.2
graphql-api    | [nodemon] to restart at any time, enter `rs`
graphql-api    | [nodemon] watching: *.*
graphql-api    | [nodemon] starting `node .`
graphql-web    | Starting the development server...
graphql-web    | 
graphql-mongodb | 2018-10-19T06:11:50.493+0000 I NETWORK  [listener] connection accepted from 192.168.160.3:57894 #2 (1 connection now open)
graphql-mongodb | 2018-10-19T06:11:50.514+0000 I NETWORK  [conn2] received client metadata from 192.168.160.3:57894 conn2: { driver: { name: "nodejs", version: "3.1.0" }, os: { type: "Linux", name: "linux", architecture: "x64", version: "4.9.93-linuxkit-aufs" }, platform: "Node.js v10.12.0, LE, mongodb-core: 3.1.0" }
graphql-api    | GraphQL Server running at http://localhost:4000/graphql
graphql-web    | Compiled successfully!
graphql-web    | 
graphql-web    | You can now view photo-share-client in the browser.
graphql-web    | 
graphql-web    |   Local:            http://localhost:3000/
graphql-web    |   On Your Network:  http://192.168.160.4:3000/
graphql-web    | 
graphql-web    | Note that the development build is not optimized.
graphql-web    | To create a production build, use npm run build.
graphql-web    | 
```

Assuming you are using the default configuration, you should be able to explore the [GraphQL playground](http://localhost:4000/graphql) by visiting [http://localhost:4000/graphql](http://localhost:4000/graphql) to verify the GraphQL API is running.

Assuming you are using the default configuration, you should be able to see a response from [http://localhost:3000](http://localhost:3000) to verify the web application is running.


Once you have finished with your work - or if you would like to stop the project from running:

    $ npm run docker:down

# Resources
If you are looking to get started with GraphQL, you absolutely should treat yourself to the book below. It's a great way to dive into the fun world of GraphQL without too much of a headache. I found coding along with the examples to be mostly accurate; however there are definitely places that will make you scratch your head feverishly to figure out what the hell went wrong - ultimately offset by cloning the repo and just riding it out.

## Learning GraphQL
The code samples for *Learning GraphQL* by Eve Porcello and Alex Banks, published by O'Reilly Media

|          |          |
|----------|----------|
| ![Learning GraphQL Book Cover](https://raw.githubusercontent.com/MoonHighway/learning-graphql/master/learning-graphql.jpg) | If you are ready to start building fullstack applications with GraphQL, Apollo, and React, this book is for you. In this book, Eve Porcello and Alex Banks provide a complete overview of GraphQL from the ground up which includes building your own full stack photo sharing application.<br><br> __Buy the book__: [Amazon](https://www.amazon.com/Learning-GraphQL-Declarative-Fetching-Modern/dp/1492030716) - [O'Reilly](http://shop.oreilly.com/product/0636920137269.do) <br>__Take the Course__: [GraphQL Workshop](https://www.graphqlworkshop.com)<br><br>  |

### Table of Contents

* __Chapter 1__ : [Welcome To GraphQL](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-01)
* __Chapter 2__ : [Graph Theory](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-02)
* __Chapter 3__ : [The GraphQL Language](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-03)
* __Chapter 4__ : [Designing a Schema](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-04)
* __Chapter 5__ : [Creating a GraphQL API](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-05)
* __Chapter 6__ : [GraphQL Clients](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-06)
* __Chapter 7__ : [GraphQL in the Real World](https://github.com/MoonHighway/learning-graphql/tree/master/chapter-07)
