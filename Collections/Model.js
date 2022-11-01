const mongoose = require('mongoose')
const { Schema } = mongoose

const collectionSchema = new Schema({
    floorPrice: String,
    date: {type : Date, default: Date.now}
})
// de adaugat campuri 

const Collection = mongoose.model('Collection', collectionSchema)
module.exports = Collection