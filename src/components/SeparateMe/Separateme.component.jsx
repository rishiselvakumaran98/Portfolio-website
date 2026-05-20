import React from 'react'

const SeparateMe = () => {
    return(
        <div class="content">
            <header class="major">
              <h2>Why me?</h2>
            </header>
                      <p><strong>Ship Fast, Ship Right</strong><br/>
            At Microsoft I designed and shipped the <strong>Zenith Portal</strong> — a React + .NET tool on Azure AKS that collapsed buildout-ticket creation from hours to minutes. I also delivered a stretch project (Cluster Solver) and contributed to production-grade Private Endpoint automation with retry, failover, and idempotency baked in. I move quickly without cutting corners.
            </p>

            <p><strong>AI That Solves Real Problems</strong><br/>
            I built a <strong>hybrid RAG troubleshooting bot</strong> that replaced a pure-LLM strategy with keyword + semantic retrieval over Kubernetes runbooks, cutting median on-call time-to-answer from 10–30 minutes to 1–2 minutes. In my research I engineered SyTGA-KG, a multi-stage NLP pipeline that synthesizes 100 biomedical abstracts into interactive knowledge graphs with 5,000 entities and automated research-gap identification.
            </p>

            <p><strong>Battle-Tested in Production</strong><br/>
            At Hughes I hardened Jupiter Gateway Management serving 100+ production satellite gateways — fixing race conditions in DB reads/writes that improved <strong>failover success rate from 50% to 90%</strong> and cut manual recovery from 6 hours to 5 minutes. I also built Jenkins CI/CD pipelines and Ansible deployment scripts that reduced upgrade time by 60%.
            </p>

            <p><strong>Research-Driven & Published</strong><br/>
            I co-authored <em>Beyond Chat and Clicks: GUI Agents for In-Situ Assistance</em>, developing DOMSteer — a Chrome extension using GUI agents for live UI transformations. Our user study with 12 participants across 8 web tasks showed a <strong>25% reduction in task completion time</strong> with 100% accuracy versus 91.7% for a chat baseline.
            </p>

            <p><strong>Builder of Communities</strong><br/>
            As president of the UMN LeetCode Club, I built a full-stack platform (Next.js, TypeScript, GraphQL, Firestore) with an LLM-assisted ingestion pipeline standardizing a 227-question bank. The platform powers 6 events serving 200+ club members with real-time RSVP and role-gated admin.
            </p>
          </div>
    )
};

export default SeparateMe;