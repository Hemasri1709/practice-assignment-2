const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./db');
const { connection } = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, async () => {
    try{
        await connectDB();
        console.log(`Server is running on port ${port}`);
    }
    
    catch(err){
        console.log(err.message);
    }
});





