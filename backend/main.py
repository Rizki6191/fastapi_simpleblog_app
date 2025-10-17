from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
# from models.Blog import Blog
from Routers import Blog

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,             # 👈 Origin yang diizinkan
    allow_credentials=True,            # Mengizinkan cookies, header authorization, dll.
    allow_methods=["*"],               # Mengizinkan semua metode (GET, POST, PUT, DELETE, dll)
    allow_headers=["*"],               # Mengizinkan semua header
)

Base.metadata.create_all(bind=engine)

app.include_router(Blog.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI with MySQL!"}