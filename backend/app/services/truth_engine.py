# Truth Structuring Engine

CONFIRMED_KEYS = ["report", "data", "verified"]
DEBATE_KEYS = ["disputed", "claimed", "argued"]


def classify_statement(text: str) -> str:
    t = text.lower()

    if any(k in t for k in CONFIRMED_KEYS):
        return "confirmed"

    if any(k in t for k in DEBATE_KEYS):
        return "debated"

    return "unknown"


def analyze_truth():
    sample_claims = [
        "Verified infrastructure audit report released",
        "Funding responsibility disputed",
        "Long term mitigation unclear"
    ]

    result = {
        "confirmed": [],
        "debated": [],
        "unknown": []
    }

    for claim in sample_claims:
        category = classify_statement(claim)
        result[category].append(claim)

    return result