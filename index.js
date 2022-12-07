
const dotEnv =  require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const blueBird = require('bluebird');
const pgPromise = require('pg-promise');
const router = require('./src/routes/users.route');

const app = express();



app.use(express.json());

app.use('/api',router)


const PORT = process.env.PORT || 5000;

app.listen(PORT, (err, con) => {
    if(err) { throw err };
    console.log(`App is running on: ${PORT}`);
}); 


