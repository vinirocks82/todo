const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

//const mongoURI = 'mongodb+srv://vinimehta399:todo1234@cluster0.uqkmk.mongodb.net/<dbname>?retryWrites=true&w=majority'
const keys= require('./config/keys');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
app. listen(port ,()=>{
console.log('server has been started')
})