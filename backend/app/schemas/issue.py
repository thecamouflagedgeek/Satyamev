from pydantic import BaseModel


class IssueRequest(BaseModel):
    topic: str