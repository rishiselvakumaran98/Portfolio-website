/* eslint-disable */
import React from 'react'
import Image from "../../assets/images/IMG_6028.jpeg"
const Aboutme = () =>{
    return(
        <div class="spotlight">
            <div class="content">
              <header class="major">
                <h2>About Me</h2>
              </header>
              <p>Hey there! I'm Rishi Selvakumaran — a Software Engineer and M.S. Computer Science student at the University of Minnesota, Twin Cities (expected Aug 2026), where my thesis focuses on interactive AI visualizations and agentic knowledge representation. I recently interned at <strong>Microsoft</strong> on the Core AI team, building full-stack developer tools (React + .NET on Azure AKS) and a hybrid RAG troubleshooting bot that cut on-call resolution time from 30 minutes to under 2 minutes. Before grad school I spent two years at <strong>Hughes Network Systems</strong> hardening satellite gateway management systems (Java/Spring, Oracle, RHEL) and leading cloud migration PoCs with Docker, Kubernetes, and AWS.</p>
              <p>I'm also a co-author on a published HCI research paper (<em>arXiv:2604.14668</em>), an <strong>AWS Certified Developer – Associate</strong>, and the president of the UMN LeetCode Club where I built a Next.js platform serving 200+ members. I'm passionate about distributed systems, AI/ML, and building tools that make engineers' lives easier — let's connect!</p>
            </div>
            <span class="image"><img src={Image} /></span>
          </div>
    )
};

export default Aboutme;