from app.mock_data.issues import ISSUE_RULES

def compute_importance(title:str) -> int:
    data=ISSUE_RULES.get(title,{})
    impact=data.get("impact",50)
    media_noise=data.get("media_noise",20)

    return impact-media_noise

def rank_issues(issues):
    ranked = []

    for issue in issues:
        rules = ISSUE_RULES.get(issue["title"], {})

        ranked.append({
            **issue,  # keeps timeline + everything else
            "impact": rules.get("impact", 50),
            "media_noise": rules.get("media_noise", 50)
        })

    return ranked
