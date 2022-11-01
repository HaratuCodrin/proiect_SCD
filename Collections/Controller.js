const express = require('express');
const collectionService = require('./Service');

const collectionRouter = express.Router();
collectionRouter.route('/nft-create').post(createCollection)

function createCollection(request, response) {
    const value = request.body

    collectionService.createRecord(
        value,
        data => response.status(201).json(data), // 201 si 400 sunt pentru success, respectiv eroare
        error => response.status(400).json(error)
    );

}

module.exports = collectionRouter;