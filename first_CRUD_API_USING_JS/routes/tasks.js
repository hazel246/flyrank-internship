import express from 'express';
import { createTask, getTasks, getTaskById, deleteTask, updateTask } from '../controllers/tasks.js';


//initialized our router:
const router = express.Router();


//users array has one object, which is a user with firstName, lastName and age
let tasks = [];

//we cannot use chrome for this because when we type something in URL it only makes GET request, but we want to make POST request, so we will use postman for this
router.post('/', createTask);

router.get('/', getTasks);
router.get("/:id", getTaskById);

router.delete('/:id', deleteTask);

router.patch('/:id', updateTask);


export default router;



