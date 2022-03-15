const Query = require('./Query')
const Mutation = require('./Mutation')
const Type = require('./Type')

const resolvers = {
  Query,
  Mutation,
  ...Type
}

module.exports = resolvers