const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const logger = require('./config/logger');
const { initDB } = require('./config/database');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {

// })

app.use('/', routes);

const port = process.env.POR_API || 3001;


async function initApp(){
    try{ 
        await initDB();
        app.listen(port, ()=> logger.info(`App listening on port ${port}!`));
    } catch(error){
        logger.error('initApp error:', error);
        process.exit(1);
    }
}

initApp();