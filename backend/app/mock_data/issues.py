mock_issues = [
    {
        "id": 1,
        "title": "India-China Border Tensions",
        "summary": "Continued diplomatic and military standoff in eastern Ladakh affecting bilateral trade and security.",
        "timeline": [
            {
                "date": "2020-05",
                "title": "Initial Troop Face-off in Ladakh",
                "description": "Troops from both nations engaged in multiple standoffs along the Line of Actual Control (LAC)."
            },
            {
                "date": "2020-06",
                "title": "Galwan Valley Clash",
                "description": "Deadly clash resulting in casualties on both sides, marking the most serious escalation in decades."
            },
            {
                "date": "2021-02",
                "title": "Disengagement Agreement at Pangong Lake",
                "description": "Both sides began phased disengagement after diplomatic and military negotiations."
            },
            {
                "date": "2023-08",
                "title": "Ongoing Diplomatic Talks",
                "description": "Corps commander-level talks continued to reduce tensions and restore status quo."
            }
        ]
    },
    {
        "id": 2,
        "title": "Russia - Ukraine Conflict Development",
        "summary": "Ongoing conflict repercussions on global energy prices and geopolitical alliances.",
        "timeline": [
            {
                "date": "2022-02",
                "title": "Full-Scale Invasion Begins",
                "description": "Russia launched a large-scale military invasion of Ukraine, triggering global condemnation."
            },
            {
                "date": "2022-03",
                "title": "Sanctions Imposed by Western Nations",
                "description": "US, EU, and allies imposed financial and trade sanctions on Russia."
            },
            {
                "date": "2022-09",
                "title": "Annexation of Occupied Regions",
                "description": "Russia declared annexation of four Ukrainian regions following disputed referendums."
            },
            {
                "date": "2023-07",
                "title": "Grain Deal Collapse",
                "description": "Russia withdrew from the Black Sea Grain Initiative affecting global food supply chains."
            }
        ]
    },
    {
        "id": 3,
        "title": "G20 Summit Climate Finance Debate",
        "summary": "Negotiations over climate funding commitments and equitable responsibility from developed nations.",
        "timeline": [
            {
                "date": "2015-12",
                "title": "Paris Agreement Framework",
                "description": "Countries committed to mobilizing $100 billion annually for climate finance."
            },
            {
                "date": "2021-11",
                "title": "COP26 Finance Dispute",
                "description": "Developing nations criticized slow progress on climate finance commitments."
            },
            {
                "date": "2023-09",
                "title": "G20 New Delhi Summit",
                "description": "Leaders debated reforming multilateral development banks to boost climate funding."
            },
            {
                "date": "2023-12",
                "title": "Loss and Damage Fund Operationalized",
                "description": "COP28 approved framework to support vulnerable nations affected by climate change."
            }
        ]
    },
    {
        "id": 4,
        "title": "Indian General Elections - Campaign Narratives",
        "summary": "Political parties' messaging around economic development, employment and national security influence public discourse.",
        "timeline": [
            {
                "date": "2019-05",
                "title": "2019 General Election Results",
                "description": "Incumbent government secured majority with campaign focus on nationalism and welfare schemes."
            },
            {
                "date": "2023-12",
                "title": "State Election Campaign Messaging",
                "description": "Economic growth, unemployment, and social policy became central debate themes."
            },
            {
                "date": "2024-01",
                "title": "National Campaign Launch",
                "description": "Major political parties unveiled campaign strategies ahead of the 2024 elections."
            },
            {
                "date": "2024-04",
                "title": "General Election Voting Phases Begin",
                "description": "Multi-phase voting process commenced across Indian states."
            }
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
    }
}