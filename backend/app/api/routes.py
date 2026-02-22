from fastapi import APIRouter
from app.mock_data.issues import mock_issues
from app.services.impact_attention import rank_issues
from app.services.truth_engine import analyze_truth
from app.schemas.issue import IssueRequest
from app.services.trust_engine import compute_trust
from app.services.perspective_engine import generate_perspectives

router=APIRouter()

@router.get("/issues")
def get_issues():
    ranked =rank_issues(mock_issues)
    return {
        "message":"Issues ranked by Impact-Atention Analyzer",
        "issues":ranked
    }

@router.post("/truth-analysis")
def truth_analysis(request: IssueRequest):

    result = analyze_truth()

    return {
        "topic": request.topic,
        "analysis": result
    }

@router.post("/trust-score")
def trust_score(request: IssueRequest):

    score = compute_trust(request.topic)

    return {
        "topic": request.topic,
        "reliability_score": score,
        "reasoning": "Rule-based evidence weighting model.",
        "evidence_flags": [
            "Cross-source consistency",
            "Public data corroboration"
        ]
    }

@router.post("/perspectives")
def perspectives(request: IssueRequest):

    return {
        "topic": request.topic,
        "perspectives": generate_perspectives(request.topic)
    }