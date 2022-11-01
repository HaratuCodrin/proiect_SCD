const collectionModel = require('./Model')

const collectionService = {
    createRecord: (collection, success, fail) => {
        collectionModel.create(collection)
            .then(data => success(data))
            .catch(error => fail(error))
    },
}

module.exports = collectionService