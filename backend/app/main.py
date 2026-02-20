from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app=FastAPI(title="Satyamev")

#CORS 
app.add_middleware(CORSMiddleware,
                    allow_origins=["*"],
                    allow_credentials=True,
                    allow_methods=["*"],
                    allow_headers=["*"],)

class IssueRequest(BaseModel):
    topic:str

#mock data
mock_issues =[
    {
        "id":1,
        "title":"Urban Flooding Crisis",
        "importance_score":92,
        "summary":"Infrastructure gaps causing large-scale disruption"
    },
    {
        "id":2,
        "title":"Public Health Funding Debate",
        "importance_score":84,
        "summary":"Conflicting priorities in healthcare allocation."
    }
]

@app.get("/")
def root():
    return {"message":"Satyamev backend running"}

@app.get("/issues")
def get_issues():
    return {"issues":mock_issues}

@app.post("/truth-analysis")
def truth_analysis(request:IssueRequest):
    return{
        "confirmed":["Flood-prone zones increased over last decade","Drainage capacity below recommeded levels"],
        "debates":["Responsibility between agencies disputed","Funding adequacy questioned"],
        "unknows":["Long term mitigation planning unclear","Data transparency gaps exist"]
    }

@app.post("/trust-score")
def trust_score(request:IssueRequest):
    return{
        "reliability_score":78,
        "reasoning":"Cross-source consistencey with moderate reporting bias detected.",
        "evidence_flags":["Verified data citations","Independent corroboration present"]
    }

@app.post("/perspectives")
def perspectives(request:IssueRequest):
    return{
        "perspectives":[
            {
                "viewpoint":"Policy Reform Focus",
                "summary":"Advocates structural governance change."
            },
            {
                "viewpoint":"Infrastructure Priority",
                "summary":"Calls for engineering led investment"
            },
            {
                "viewpoint":"Community Preparedness",
                "summary":"Emphasizes local resilience planning"
            }
        ]
    }

if __name__ == "__main__":
    import uvicorn 
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
    