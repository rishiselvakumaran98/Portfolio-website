/* eslint-disable */
import React from 'react'
import GTT_logo from '../../assets/images/Opticom_Miovision.png'
import HughesLogo from '../../assets/images/Hughes_Logo.png'
import UMNLogo from '../../assets/images/UMN_logo.png'
import Header from './Header';
import ExperienceItem from './ExperienceItem';
import Description from './Description';
import TaskList from './TaskList';

const Experience = () => {
    const experiences = [
      {
        title: "Software Engineer Intern — Core AI",
        company: "Microsoft",
        period: "Jan 2026 – Apr 2026",
        location: "Redmond, WA",
        description: "",
        logo: 'https://img.icons8.com/color/100/microsoft.png',
        style: { width: "100px", height: "100px" },
        tasks: [
          "Designed and shipped Zenith Portal (React + .NET, Azure AKS) with 5-type pre-buildout validation, ICM ticket filing, and CPSS Shuffle integration; collapsed buildout-ticket creation from hours to minutes via durable task orchestration across Kusto, ICM, and CPSS APIs; deployed to canary through CI/CD.",
          "Built a hybrid RAG troubleshooting bot (LLM + keyword retrieval, Azure AI Search) on a Kubernetes runbook corpus; replaced a pure-LLM strategy with hybrid retrieval, cutting median on-call time-to-answer from 10–30 min to 1–2 min; added reindexing pipeline and surfaced Geneva Actions deep-links for one-click remediation.",
          "Delivered stretch project — Cluster Solver — integrated with Zenith Portal for Decomm + Shuffle; designed scoring/ranking model over Kusto-backed cluster telemetry, validated against historical ICM tickets; added CSV/JSON export as source-of-truth for cluster ranking.",
          "Contributed to PE (Private Endpoint) creation automation for CPSS Singularity, designing retries / failover / idempotency for production-grade rollout; validated traces on daily and canary releases."
        ]
      },
      {
        title: "Graduate Research Assistant — Visual Intelligence Lab",
        company: "University of Minnesota, Twin Cities",
        period: "May 2025 – Aug 2025",
        location: "Minneapolis, MN",
        description: "",
        logo: UMNLogo,
        style: { width: "100px", height: "100px" },
        tasks: [
          "Engineered SyTGA-KG, a multi-stage NLP pipeline (RAG + Qdrant) over 100 arXiv/PubMed abstracts, automating synthesis of biomedical literature into interactive knowledge graphs (5,000 entities, 1,000 relations) with automated research-gap identification.",
          "Built a generative visual interface (React, D3.js) to map research pathways and automatically surface novel, data-driven hypotheses for study design."
        ]
      },
      {
        title: "Software Engineer",
        company: "Hughes Network Systems",
        period: "June 2022 – Sept 2024",
        location: "Gaithersburg, MD",
        description: "",
        logo: HughesLogo,
        style: { width: "150px", height: "50px" },
        tasks: [
          "Hardened Jupiter Gateway Management (Java/Spring + Oracle, RHEL) serving 100+ production gateways in active/warm-standby; fixed race conditions in DB reads/writes, improving failover success rate from 50% to 90% and cutting manual recovery from 6 hours to 5 min.",
          "Led cloud PoCs migrating monolithic J2EE services to microservices (Docker, Kubernetes, AWS), improving scalability and resilience to support new gateway types.",
          "Built Jenkins CI/CD pipelines and Bash/Ansible deployment scripts for distributed VM rollouts, reducing upgrade time by 60% and QA-reported issues by 40%.",
          "Hardened APIs via OWASP framework and BurpSuite pen-testing, reducing XSS vulnerabilities by 80%."
        ]
      },
      {
        title: "Software Engineer Intern",
        company: "Miovision",
        period: "May 2021 – Aug 2021",
        location: "Minneapolis, MN",
        description: "",
        logo: GTT_logo,
        style: { width: "150px", height: "100px" },
        tasks: [
          "Designed a serverless micro-batch architecture on AWS (IoT Core, Kinesis, Lambda, Step Functions, DynamoDB, S3, Glue) for real-time radio telemetry, reducing end-to-end processing latency by 30%.",
          "Orchestrated a big-data ETL pipeline (AWS EMR, PySpark, HDFS), cutting per-message cost by 60% and batch runtime by 25% via caching and memoization.",
          "Authored CloudFormation templates and IAM-scoped resource scripts to standardize provisioning and enforce least-privilege access across EC2 and Lambda workloads."
        ]
      },
      {
        title: "Teaching Assistant",
        company: "University of Minnesota, Twin Cities",
        period: "Jan 2020 – May 2022",
        location: "Minneapolis, MN",
        description: "",
        logo: UMNLogo,
        style: { width: "100px", height: "100px" },
        tasks: [
          {
            course: "Program Design and Development (Sept 2021 – May 2022)",
            responsibilities: [
              "Conducted office hours and labs to build collaborative software projects using Java, IntelliJ IDE, implementing software design patterns and UML diagrams.",
              "Tutored students on automated testing techniques using Mockito and Jacoco, helping them understand mock test coverage in large-scale software projects.",
              "Engineered shell scripts for grading Gradle and Android Studio labs, reducing grading time by over 50%."
            ]
          },
          {
            course: "Advanced Programming Principles (Jan 2021 – May 2021)",
            responsibilities: [
              "Conducted office hours tutoring functional programming paradigms using OCaml.",
              "Graded homework assignments, quizzes, and exams using UTOP, OPAM, and shell scripts, reducing overall grading time by over 300%."
            ]
          },
          {
            course: "Intro to Programming using Python (Jan 2020 – Aug 2020)",
            responsibilities: [
              "Implemented lab sessions for students, tutoring basic programming skills in Python, and grading homework and exams.",
              "Established automated grading scripts in Python to grade multiple homework assignments at once and output results for instructors as a CSV file.",
              "Engineered the final Data Analysis lab including modules for data mining and data cleansing using Numpy, Pandas, and Matplotlib for students to explore data analysis with Python."
            ]
          }
        ]
      },
    ];
  
    return (
      <section id="second" className="main special">
        <Header />
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} logo={exp.logo} style={exp.style} title={exp.title} company={exp.company} period={exp.period}>
            <Description text={exp.description} />
            <TaskList tasks={exp.tasks} />
          </ExperienceItem>
        ))}
      </section>
    );
  };

export default Experience;