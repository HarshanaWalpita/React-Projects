const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes);

const PORT = 8000;

const DB_URL = 'mongodb://localhost:27017/mernCrud';

mongoose.connect(DB_URL, {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('DB Connected');
    })
    .catch((err) => console.log('DB connection error', err));

app.listen(PORT,() =>{
    console.log(`App is running on ${PORT}`)
});