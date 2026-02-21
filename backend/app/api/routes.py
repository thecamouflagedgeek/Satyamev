from fastapi import APIRouter
from app.mock_data.issues import mock_issues
from app.services.impact_attention import rank_issues

router=APIRouter()

@router.get("/issues")
def get_issues():
    ranked =rank_issues(mock_issues)
    return {
        "message":"Issues ranked by Impact-Atention Analyzer",
        "issues":ranked
    }