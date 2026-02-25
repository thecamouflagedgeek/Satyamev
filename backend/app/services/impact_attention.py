from app.mock_data.issues import ISSUE_RULES

def compute_importance(title:str) -> int:
    data=ISSUE_RULES.get(title,{})
    impact=data.get("impact",50)
    media_noise=data.get("media_noise",20)

    return impact-media_noise

def rank_issues(issues:list) -> list:
    ranked =[]
    for issue in issues:
        score=compute_importance(issue["title"])
        enriched_issue=issue.copy()
        enriched_issue["importance_score"] = score
        ranked.append(enriched_issue)

    ranked.sort(key = lambda x:x["importance_score"], reverse=True)
    return ranked 