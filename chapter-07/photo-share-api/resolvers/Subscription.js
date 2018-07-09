module.exports = {
    newPhoto: {
        subscribe: (parent, args, { pubsub }) => {
            console.log('subscribe: ', pubsub)
            return pubsub.asyncIterator('photo-added')
        }
    }
}