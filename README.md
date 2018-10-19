# Welcome
This project contains minor tweaks I've made to the excellent examples provided by the Learning GraphQL book below.

# Getting started
## GraphQL API
The easiest way to use this repo is to have [Docker](https://www.docker.com) installed and configured on your development machine. 

You can spin up the project by running:

    $ npm run docker:up

This will create two Docker containers - one with the GraphQL API application and its dependencies installed; and the other will be a clean instance of MongoDB just for use by this application.

Assuming you are using the default configuration, you should be able to explore the [GraphQL playground](http://localhost:4000/graphql) by visiting [http://localhost:4000/graphql](http://localhost:4000/graphql) to verify the application is running.


TIP: If you want to explicitly force a clean build of the Docker images and containers for this project, you can run:

    $ npm run docker:up:clean

Once you have finished with your work - or if you would like to stop the project from running:

    $ npm run docker:down

## Web UI
As of this writing, the web application has not been Dockerized yet. Assuming you have NodeJS installed on your develvopment machine, you can simply run the following to start the web application:
```
$ cd photo-share-client
$ npm start
```
Assuming you are using the default configuration, you should be able to see a response from [http://localhost:3000](http://localhost:3000) to verify the application is running.

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
