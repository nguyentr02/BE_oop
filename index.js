const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Router:
const authRoute = require('./routes/auth');

dotenv.config();


//Connect to DB:
mongoose.connect(process.env.DB_CONNECT, () => console.log('Connected to MongoDB')
);


//Middleware:
app.use(express.json());

//Route MiddleWay:
app.use('/api/user', authRoute);




app.listen(5000, () => console.log('GOOOO'));
