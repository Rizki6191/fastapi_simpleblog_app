from sqlalchemy import Column, Integer, String
from database import Base


class Blog(Base):
    __tablename__ = "simpleblog_app"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(50))
    content = Column(String(255))