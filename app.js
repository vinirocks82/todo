const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
const ToDoList = require('./models/Todo.js')

//const mongoURI = 'mongodb+srv://vinimehta399:todo1234@cluster0.uqkmk.mongodb.net/<dbname>?retryWrites=true&w=majority'
const keys= require('./config/keys');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// get the url and the content for get
app.get('/todos/api', async(req, res)=>{
    const todos = await ToDoList.find()
    res.send(todos)
})

app.post('/todos/api', async (req, res )=>{
     const { text } = req.body;
     const todo = new Todo ({
         text 
     })
     try {
         await todo.save();
         res.send(todo)
       } catch (err){
          res.send(400, err)
       }
})

app.put('/todos/api/:id', async (req, res )=>{
    
    const todo = await ToDoList.findById(req.params.id);
    for(let key in req.body){
     if(todo[key] != req.body[key]){
       todo[key] = req.body[key]

     }
     }
     try {
        await todo.save();
        res.send(todo)
      } catch (err){
         res.send(400, err)
      }
    })


app.listen(port ,()=>{
console.log('server has been started now')
})
process.once("SIGUSR2", () => server.close(err => process.kill(process.pid, "SIGUSR2")));
