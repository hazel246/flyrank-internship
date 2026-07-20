import { v4 as uuidv4 } from 'uuid';

let tasks = [];

//we installed package uuid to generate unique id for each user, so we can use it to get a specific user by id
export const createTask = (req,res) => {
    //the object we send in postman is in req.body
    const task = req.body;
    //uuidv4(): this will generate a unique id for each user, so we can use it to get a specific user by id
    //...task, id: uuidv4(): this will create a new object with all the properties of user and add a new property id with the value of userID
    tasks.push({ ...task , id: uuidv4()});
    res.send(`Task: ${task.title} added to the database!`);

};


export const getTasks = (req,res) => {
    res.send(tasks);
};


//get only one user
// /users/2 => stored in req.params { id : 2} this means we are going to have an object and the id will be 2
// params refers the parameters in the URL, which are the values after the /users/ part of the URL
// when we do /users/2 in URL and hit get requesr, this will be returned: {"id": "2"}
export const getTaskById= (req,res) => {
    const { id } = req.params; // we did {} because we want to get the id from the object, which is stored in req.params
    const foundTask = tasks.find((t) => t.id === id); //this will return the task with the id we passed in the URL, if not found it will return undefined
    console.log(req.params);
    res.send(foundTask);

};



export const deleteTask = (req,res) => {
    const { id } = req.params;  
    tasks = tasks.filter((task) => task.id !== id); //this will return all the tasks except the one with the id we passed in the URL
    //the filter method will return all tasks which the function task.id !== id is true, and will remove the task which function is false, as they both are equal so not equal will be false thats why it will be removed
    res.send(`Task with the id ${id} deleted from the database.`);
};


export const updateTask = (req,res) => {

    const { id } = req.params;
    
    const { title, done } = req.body; //we are destructuring the object we sent in postman to get the title and done properties

    const task = tasks.find((task) => task.id === id); //this will return the task with the id we passed in the URL, if not found it will return undefined

    if(title) task.title = title; //if title is not undefined, then we will update the title of the task
    if(done) task.done = done; //if done is not undefined, then we will update the done of the task
    res.send(`Task with the id ${id} updated.`);
};









