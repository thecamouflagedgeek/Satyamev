from fastapi import FastAPI
from app.api.routes import router 
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI(title="Satyamev")
origins = [
    "http://localhost:3000",
    "https://satyamev-jade.vercel.app"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
@app.get("/")
def root():
    return{"message":"Backend is running"}

if __name__=="__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)