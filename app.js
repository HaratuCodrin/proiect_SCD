const cron = require('node-cron')
const sdk = require('api')('@opensea/v1.0#bg4ikl1mk428b');
const express = require('express')
const mongoose = require('mongoose');
const collectionRouter = require('./Collections/Controller');

const app = express()


const fetchData = () => {
    // get data from OS 

    sdk.retrievingCollectionStats({collection_slug: 'doodles-official'})
  .then(res => console.log(res))
  .catch(err => console.error(err));
    console.log('exec')
}

const startServer = () => {
    app.listen(3000, () => console.log('server started'))
}

const startDatabase = () => {
    mongoose.connect('mongodb://localhost:27017', () => console.log('database started'))
}

const initRoutes = () => {
    app.use(
        (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Headers', '*')
            res.header('Access-Control-Allow-Methods', '*')
            next()
        }
    );
    app.use(express.json());
    app.use('/api/collections', collectionRouter);
}

const startApp = () => {
    startServer()
    startDatabase()
    initRoutes()
}

startApp()

// // cron at 10 seconds 
// cron.schedule('*/15 * * * *', fetchData, {})