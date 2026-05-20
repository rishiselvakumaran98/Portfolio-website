/* eslint-disable */
import React from 'react'

const ProjectListing = () => {
    return(
        <section id="first" class="main special">
          <header class="major">
            <h2>Software Projects</h2>
          </header>
          <ul class="features">
          <li>
              <span class="icon"><img src="https://img.icons8.com/?size=100&id=kOPTH4LnJoIU&format=png&color=000000"/></span>
              <h3>UMN LeetCode Club Platform</h3>
              <p><em>Next.js, TypeScript, GraphQL, Firestore</em></p>
              <p>
                Built as Club President — an LLM-assisted ingestion pipeline (GraphQL + HTML extraction) standardizing a <strong>227-question</strong> bank from NeetCode, Blind75, and r/Leetcode. Powered <strong>6 events serving 200+ club members</strong> with a server-rendered Next.js + Firestore Cloud Functions UI featuring real-time RSVP and role-gated admin. Engineered resilient data infra: incremental backfills, secrets management, and branded HTML email workflows.
              </p>
              <a href="https://github.com/rishiselvakumaran98" class="button">Learn More</a>
            </li>
          <li>
              <span class="icon"><img src="https://img.icons8.com/?size=100&id=aGBMD0dAshMB&format=png&color=000000"/></span>
              <h3>Gopher Grades (UMN.lol)</h3>
              <p><em>Python, Qdrant, K-Means, React.js</em></p>
              <p>
                Built an AI feature used by <strong>10,000+ students per semester</strong> to generate professor summaries by embedding and clustering <strong>6,787 reviews</strong> (Qdrant + K-Means). Engineered auth, rate-limiting, and profanity-detection backend services for the open-source platform.
              </p>
              <a href="https://umn.lol" class="button">Visit UMN.lol</a>
            </li>
          </ul>
          <footer class="major">
          </footer>
        </section>
    )
};

export default ProjectListing;