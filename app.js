const express = require('express');
const app = express() ; 
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
//
const notFound = require('./middleware/not-found.js');
const errorHandlerMiddleware = require('./middleware/error-handler.js');

// middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
app.use('/api/v1/tasks',tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = 3000  ;


const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`Server is listenin on port ${PORT}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
