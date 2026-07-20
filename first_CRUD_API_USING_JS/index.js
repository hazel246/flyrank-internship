// starting point of server
// we will use express to create our server and handle requests


import express from "express";

//before u had to do smthn like:
//const express = require(express);
//these are the same, but the first one is the new way of doing it in ES6


import bodyParser from "body-parser";

import tasksRoutes from './routes/tasks.js';


//initialize express app
const app = express();
//we call express as a function and store the result in a variable called app
//whole application is stored in this variable (app)

//specify port of app
const PORT = 5000; //this can be any number, normally we use 3000, 5000, 8000, 8080, etc. for development
//for backend using 5000, for frontend using 3000

//initialize body paser middle ware

app.use(bodyParser.json());
//will use json data in whole application, so we can access it in req.body
//it looks like js object, but it is not, it is a string, so we need to parse it to json


//all routes in here are starting with /users, so we will use usersRoutes for all routes starting with /users
app.use('/tasks',tasksRoutes);
//this means that whenever we make a request to /users even when it starts with users, it will be handled by usersRoutes


//now we will create routes for our CRUD API

//get request for the path '/', which is the root path of our application
//second parameter is a callback function, which will be called when the request is made
app.get('/', (req,res) =>{
    console.log('GET request made to /');
    res.send('Hello from homepage');
});
//this code ran when we made a GET request to the root path of our application, which is http://localhost:5000/



app.listen(PORT, () => console.log(`Server Is Running On Port: http://localhost:${PORT}`));


//BUTTTTTTT we dont want to everytime close server then run it again for saved
//changes, so we will use nodemon, which will automatically restart the server when we make changes to the code
//its a dev dependency, so we will install it as a dev dependency
//because we are only using it for development, not for production

