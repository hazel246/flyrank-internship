
from fastapi import FastAPI, HTTPException

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


