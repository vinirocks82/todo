const express = require('express');
const app = express();
const port = 3007;
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const Todo = require('./models/Todo')
const router = express.Router()
const todoRoutes = require('./routes/todos')

//const mongoURI = 'mongodb+srv://vinimehta399:todo1234@cluster0.uqkmk.mongodb.net/<dbname>?retryWrites=true&w=majority'

const keys= require('./config/keys');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
//app.use( express.static(__dirname + '/public') )
var path = require ('path');
app.use(express.static(path.join(__dirname + '../public')));

app.get('/', (req, res)=>{
    res.render('index')
})
// get the url and the content for get



app.listen(port ,()=>{
console.log('server has been started port 3007 now')
})
//process.once("SIGUSR2", () => server.close(err => process.kill(process.pid, "SIGUSR2")));


