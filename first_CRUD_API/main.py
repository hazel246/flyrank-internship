
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi import Response

app = FastAPI()

# Temporary in-memory database, The data disappears when you restart the server.
tasks = [
    {
        "id": 1,
        "title": "Learn FastAPI",
        "done": False
    },
    {
        "id": 2,
        "title": "Build my first API",
        "done": False
    },
    {
        "id": 3,
        "title": "Practice CRUD",
        "done": True
    }
]



# FastAPI needs to know: What data should arrive? and What type should it be?
# Request body model
class TaskCreate(BaseModel):
    title: str
#A new task must contain a title, and it must be text.

class TaskUpdate(BaseModel):
    title: str
    done: bool



# CREATE new task,
# this creates POST endpoint (POST /tasks)
@app.post("/tasks", status_code=201)
def create_task(task: TaskCreate):


    # Validation
    # client sends { "title": "Buy milk"} so fastapi converts it to task.title which contains buy milk
    if not task.title.strip(): 
        raise HTTPException(
            status_code=400,
            detail="Title cannot be empty"
        )

    # Generate next ID
    new_id = max(t["id"] for t in tasks) + 1

    # Create task object
    new_task = {
        "id": new_id,
        "title": task.title,
        "done": False
    }

    # Save task
    tasks.append(new_task)

    return new_task



@app.put("/tasks/{id}")
def update_task(id: int, updated_task: TaskUpdate):

    if not updated_task.title.strip():
        raise HTTPException(
            status_code=400,
            detail="Title cannot be empty"
        )

    for task in tasks:

        if task["id"] == id:

            task["title"] = updated_task.title
            task["done"] = updated_task.done

            return task

    raise HTTPException(
        status_code=404,
        detail=f"Task {id} not found"
    )



@app.delete("/tasks/{id}", status_code=204)
def delete_task(id: int):

    for task in tasks:

        if task["id"] == id:

            tasks.remove(task)

            return Response(status_code=204)

    raise HTTPException(
        status_code=404,
        detail=f"Task {id} not found"
    )




#stage 1: root endpoint
@app.get("/")
async def root():
    return {"name": "Task API",
            "version": "1.0.0",
            "endpoints": "/tasks"}




#stage 1: health endpoint
@app.get("/health")
def health():
    return { "status": "ok"}



#stage 2: get all tasks
@app.get("/tasks")
def get_tasks():
    return tasks

#stage 2: get one task by id

@app.get("/tasks/{task_id}")
def get_task(task_id: int):
    for task in tasks:
        if task["id"]==task_id: #task has key id thats why "id"
            return task


    raise HTTPException(status_code=404, detail="Task not found")


