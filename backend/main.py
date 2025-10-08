from fastapi import FastAPI
from database import engine, Base
# from models.Blog import Blog
from Routers import Blog

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(Blog.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI with MySQL!"}