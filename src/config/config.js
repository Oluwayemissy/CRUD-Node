const pgPromise = require('pg-promise');
const promise = require('bluebird');
require('dotenv').config();

const pg = pgPromise({ promiseLib: promise, noWarnings: true});

const db =  pg({
    host: process.env.FIRST_PROJECT_DEV_DATABASE_HOST,
    port: process.env.FIRST_PROJECT_DEV_DATABASE_PORT,
    database: process.env.FIRST_PROJECT_DEV_DATABASE_NAME,
    user: process.env.FIRST_PROJECT_DEV_DATABASE_USER,
    password: process.env.FIRST_PROJECT_DEV_DATABASE_PASSWORD
});
module.exports = db