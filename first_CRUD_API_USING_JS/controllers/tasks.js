import { v4 as uuidv4 } from 'uuid';

let tasks = [];


export const createTask = (req,res) => {
    
    const task = req.body;

    tasks.push({ ...task, id: uuidv4() });

    res.status(201).send(`Task: ${task.title} added to the database!`);

};


export const getTasks = (req,res) => {
    res.status(200).send(tasks);
};


export const getTaskById= (req,res) => {
    const { id } = req.params;

    const foundTask = tasks.find((t) => t.id === id);

    if (!foundTask) {
        return res.status(404).send("Task not found.");
    }

    res.status(200).send(foundTask);

};



export const deleteTask = (req,res) => {
    const { id } = req.params;  
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).send("Task not found.");
    }

    tasks = tasks.filter((task) => task.id !== id);

    res.status(204).send();
};


export const updateTask = (req,res) => {

    const { id } = req.params;
    const { title, done } = req.body;

    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return res.status(404).send("Task not found.");
    }

    if (title) task.title = title;
    if (done !== undefined) task.done = done;

    res.status(200).send(`Task with the id ${id} updated.`);
};









