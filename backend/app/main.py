from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware 
from app.api.routes import router 

app=FastAPI(title="Satyamev")

app.add_middleware(CORSMiddleware,
                   allow_origins=["*"],
                   allow_methods=["*"],
                   allow_credentials=True,
                   allow_headers=["*"])

app.include_router(router)
@app.get("/")
def root():
    return{"message":"Backend is running"}

if __name__=="__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)