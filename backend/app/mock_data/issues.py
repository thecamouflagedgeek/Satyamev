mock_issues = [
    {
        "id": 1,
        "title": "India-China Border Tensions",
        "summary": "Continued diplomatic and military standoff in eastern Ladakh affecting bilateral trade and security.",
        "timeline": [
            {"date": "2020-05", "title": "Initial Troop Face-off in Ladakh", "description": "Troops from both nations engaged in multiple standoffs along the LAC."},
            {"date": "2020-06", "title": "Galwan Valley Clash", "description": "Deadly clash marking serious escalation."},
            {"date": "2021-02", "title": "Disengagement at Pangong Lake", "description": "Phased disengagement began."},
            {"date": "2023-08", "title": "Ongoing Diplomatic Talks", "description": "Talks continue to ease tensions."}
        ]
    },

    {
        "id": 2,
        "title": "Russia - Ukraine Conflict Development",
        "summary": "Ongoing conflict impacting global energy prices and alliances.",
        "timeline": [
            {"date": "2022-02", "title": "Invasion Begins", "description": "Russia launched full-scale invasion."},
            {"date": "2022-03", "title": "Sanctions Imposed", "description": "Western nations imposed sanctions."},
            {"date": "2022-09", "title": "Annexation Declared", "description": "Russia annexed regions."},
            {"date": "2023-07", "title": "Grain Deal Collapse", "description": "Global food chains impacted."}
        ]
    },

    {
        "id": 3,
        "title": "G20 Summit Climate Finance Debate",
        "summary": "Negotiations on climate funding and responsibility sharing.",
        "timeline": [
            {"date": "2015-12", "title": "Paris Agreement", "description": "Global climate finance commitments made."},
            {"date": "2021-11", "title": "COP26 Dispute", "description": "Developing nations raised concerns."},
            {"date": "2023-09", "title": "G20 Summit", "description": "Debate on funding reforms."},
            {"date": "2023-12", "title": "Loss & Damage Fund", "description": "Support framework approved."}
        ]
    },

    {
        "id": 4,
        "title": "Indian General Elections - Campaign Narratives",
        "summary": "Political messaging shaping public discourse.",
        "timeline": [
            {"date": "2019-05", "title": "Election Results", "description": "Government secured majority."},
            {"date": "2023-12", "title": "State Campaigns", "description": "Key issues: economy, jobs."},
            {"date": "2024-01", "title": "Campaign Launch", "description": "Strategies unveiled."},
            {"date": "2024-04", "title": "Voting Begins", "description": "Multi-phase elections start."}
        ]
    },
    {
        "id": 5,
        "title": "AI Regulation Framework India",
        "summary": "Growing policy discussions around AI governance, ethics, and accountability in India.",
        "timeline": [
            {"date": "2018-06", "title": "NITI Aayog AI Strategy", "description": "India released national AI strategy focusing on responsible AI."},
            {"date": "2021-07", "title": "Data Protection Bill Discussions", "description": "Debates included AI data usage and regulation."},
            {"date": "2023-03", "title": "Generative AI Surge", "description": "Rapid adoption raised regulatory concerns."},
            {"date": "2024-02", "title": "Government Advisory on AI", "description": "Guidelines issued for responsible AI deployment."}
        ]
    },

    {
        "id": 6,
        "title": "Data Localization Debate",
        "summary": "Debate on storing Indian user data within national borders for privacy and sovereignty.",
        "timeline": [
            {"date": "2018-04", "title": "RBI Data Localization Directive", "description": "Payment data required to be stored in India."},
            {"date": "2019-12", "title": "Personal Data Protection Bill", "description": "Proposed strict localization requirements."},
            {"date": "2022-11", "title": "Bill Withdrawn", "description": "Government reworked framework."},
            {"date": "2023-08", "title": "Digital Personal Data Protection Act", "description": "Revised stance on cross-border data flows."}
        ]
    },

    {
        "id": 7,
        "title": "Rural Health Infrastructure Gaps",
        "summary": "Persistent disparities in healthcare access and infrastructure in rural India.",
        "timeline": [
            {"date": "2005-04", "title": "NRHM Launch", "description": "National Rural Health Mission initiated."},
            {"date": "2018-09", "title": "Ayushman Bharat Scheme", "description": "Healthcare access expanded for low-income groups."},
            {"date": "2020-04", "title": "COVID-19 Exposure", "description": "Pandemic revealed rural health gaps."},
            {"date": "2023-06", "title": "Digital Health Push", "description": "Telemedicine and digital records expanded."}
        ]
    }
]
ISSUE_RULES = {
    "India-China Border Tensions": {
        "impact": 90,
        "media_noise": 70
    },
    "Russia - Ukraine Conflict Development": {
        "impact": 85,
        "media_noise": 80
    },
    "G20 Summit Climate Finance Debate": {
        "impact": 78,
        "media_noise": 50
    },
    "Indian General Elections - Campaign Narratives": {
        "impact": 82,
        "media_noise": 65
    },
    "AI Regulation Framework India": {
        "impact": 87,
        "media_noise": 60
    },
    "Data Localization Debate": {
        "impact": 74,
        "media_noise": 65
    },
    "Rural Health Infrastructure Gaps": {
        "impact": 68,
        "media_noise": 40
    }
}