require('dotenv').config();
const connection = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_SCHEMA,
    options: {
        rowCollectionOnRequestCompletion: true,
        encrypt: true,
        enableArithAbort: true
    }


}