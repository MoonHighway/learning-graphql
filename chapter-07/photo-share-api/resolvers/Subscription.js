module.exports = {
    newPhoto: {
        subscribe: (parent, args, { pubsub, currentUser }) => pubsub.asyncIterator('photo-added')
    }
}