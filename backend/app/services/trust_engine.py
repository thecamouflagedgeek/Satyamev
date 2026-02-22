# Trust Evaluation Framework

def compute_trust(topic: str):

    base = 60

    if "public" in topic.lower():
        base += 10

    if "crisis" in topic.lower():
        base += 8

    return min(base, 95)