import type { Project, SkillCategory, EducationItem, Certification, ExperienceItem } from '../types';

export const personalInfo = {
  name: "Penumala Bindu",
  role: "Full-Stack Developer",
  tagline: "Detail-oriented Computer Science undergraduate engineering scalable full-stack applications and automated workflow solutions.",
  email: "pbibinduamb@gmail.com",
  phone: "+91 7729801179",
  location: "Vijayawada, Andhra Pradesh, India",
  github: "https://github.com/Bindu7729",
  linkedin: "https://linkedin.com/in/penumalabindu",
  leetcode: "https://leetcode.com/u/bin05/",
  codechef: "https://codechef.com/users/bindu_9",
  resumeUrl: "/Penumala Bindu - Resume.pdf",
};

export const skillsData: SkillCategory[] = [
  { category: "Programming Languages", skills: ["Python", "SQL", "Java", "TypeScript", "JavaScript"] },
  { category: "Data Analytics & ML", skills: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "Feature Engineering", "Scikit-learn", "Supervised Learning", "Model Evaluation"] },
  { category: "Databases & Querying", skills: ["MySQL", "PostgreSQL", "SQL Joins", "Subqueries", "Aggregations", "Database Management"] },
  { category: "Tools & Technologies", skills: ["Pandas", "NumPy", "Git / GitHub", "REST APIs", "FastAPI", "Docker"] },
  { category: "Core Competencies", skills: ["Analytical Thinking", "Problem-Solving", "Data Interpretation", "Logical Reasoning", "Technical Documentation"] }
];

export const projectsData: Project[] = [
{
    id: "edurisk",
    title: "EduRisk – Student Dropout Risk Platform",
    category: "MACHINE LEARNING / XAI / EDUCATION ANALYTICS",
    accentColor: "#c8532f",
    description: "An AI-powered educational analytics platform that predicts student dropout risk using academic, financial, and behavioral indicators, providing explainable SHAP insights and intervention workflows.",
    technologies: ["Python", "FastAPI", "Next.js", "React", "MySQL", "Scikit-learn", "SHAP", "Docker"],
    features: [
      "Gradient Boosting predictive model with real-time SHAP feature impact breakdown",
      "Role-based multi-tier dashboards for administrators, counselors, and faculty",
      "WebSocket-driven automated early warning triggers and intervention logging"
    ],
    githubUrl: "https://github.com/Bindu7729/student-dashboard",
    liveUrl: "https://edurisk-ai.vercel.app/",
    image: "/projects/edurisk.png",
    badge: { main: "82%", sub: "RISK, EXPLAINED" },
    caseStudy: {
      overview: "EduRisk is an AI-powered educational analytics and explainable early-warning platform designed for academic institutions to identify students at academic, financial, or behavioral risk of dropping out months before failure occurs. Built specifically to eliminate the 'black-box' dilemma in higher education, EduRisk provides actionable, transparent SHAP explainability insights directly to faculty advisors.",
      challenge: "Academic institutions typically identify at-risk students too late — usually only after semester exam failures or attendance drops below critical levels, when retention intervention efficacy drops under 25%. Existing predictive systems are opaque 'black boxes' that give administrators a raw probability score (e.g., 82%) with zero explanation of why a student is at risk or which behavioral levers an advisor should address first.",
      keyProblems: [
        "Late-Stage Diagnostic Lag: Colleges rely on end-of-term grades rather than continuous behavioral indicators like LMS activity and assignment submission velocity.",
        "The Black-Box Advisor Dilemma: Counselors distrust ML scores when models cannot explain why a student is flagged, leading to low intervention adoption.",
        "Siloed Institutional Data: Attendance records, fees payment databases, and digital learning activity reside in disconnected systems with no unified risk pipeline."
      ],
      architecture: "A Python + FastAPI backend hosts a tuned Gradient Boosting Classifier trained on 18 behavioral, academic, and financial indicators. The SHAP (SHapley Additive exPlanations) framework calculates per-inference feature contributions in real time. A Next.js 14 frontend renders role-specific dashboards with interactive SVG gauges and waterfall charts. MySQL stores student profiles, longitudinal risk snapshots, and counselor intervention logs. The entire system is containerized with Docker Compose.",
      architectureWorkflow: [
        { step: "01. Continuous Telemetry Ingestion", description: "ETL pipelines ingest LMS clickstream frequency, assignment submission latency, attendance rates, and fee payment milestones into an 18-feature vector." },
        { step: "02. Gradient Boosting Inference", description: "Ensemble model computes a calibrated dropout probability score with stratified 5-fold cross-validation." },
        { step: "03. Real-Time SHAP Attribution", description: "TreeExplainer derives exact Shapley contribution values (+0.42 Low Engagement, +0.21 Missed Deadlines, -0.15 Past Grades)." },
        { step: "04. WebSocket Alert Dispatch", description: "High-risk cases (>70% threshold) trigger instant WebSocket notifications to assigned counselor dashboards with suggested intervention playbooks." }
      ],
      innovations: [
        { title: "SHAP Explainability Layer", detail: "Every prediction is accompanied by a ranked SHAP waterfall breakdown showing which exact features pushed the risk score up or down. Advisors see actionable root causes rather than an arbitrary percentage.", impact: "Transparent, actionable guidance for academic advisors" },
        { title: "Real-Time WebSocket Risk Streaming", detail: "A FastAPI WebSocket endpoint streams updated risk scores to active dashboard clients whenever new LMS or attendance signals arrive, updating the displayed probability gauge live without requiring manual page refreshes.", impact: "Zero-latency visibility into deteriorating engagement" },
        { title: "Multi-Tier Role-Based Workflows", detail: "Three dedicated operational tiers — University Executive, Academic Counselor, and Course Faculty — each expose tailored views: macro retention heat maps for deans, individual student intervention logs for counselors, and roster flags for faculty.", impact: "Streamlined cross-department intervention alignment" },
        { title: "Automated Escalation Pipeline", detail: "When a student's risk score crosses the configured threshold for three consecutive tracking periods, automated background workers flag the case for priority multi-stakeholder review.", impact: "Automated intervention tracking preventing students falling through cracks" }
      ],
      technicalChallenges: [
        {
          problem: "Real-Time SHAP Computation Latency",
          solution: "Calculating exact Shapley values on every prediction for hundreds of students created server bottlenecks exceeding 800ms per request. Implemented TreeSHAP tree-traversal optimizations with background feature-baseline caching, bringing inference + explanation generation down to under 22ms."
        },
        {
          problem: "Extreme Training Class Imbalance",
          solution: "Historical academic datasets feature heavily skewed class balances (~14% dropouts vs 86% retention). Balanced the training distribution using SMOTE (Synthetic Minority Over-sampling Technique) combined with focal loss optimization, boosting minority recall from 64% to 89.4% while preserving precision."
        }
      ],
      outcome: "A production-grade educational analytics platform that bridges the gap between predictive machine learning and front-line counselor interventions. Successfully delivers interpretable, trustable insights with an 87.4% F1-score.",
      metrics: [
        { label: "Model F1-Score", value: "87.4%", detail: "Optimized on minority dropout class" },
        { label: "Explanation Latency", value: "< 22ms", detail: "Optimized TreeSHAP inference" },
        { label: "Indicators Tracked", value: "18 Features", detail: "Academic, behavioral & financial" },
        { label: "Intervention Speed", value: "< 2.0s", detail: "Instant WebSocket notification" }
      ],
      learnings: [
        "Academic advisors adopt AI tools significantly faster when predictions provide human-understandable directional rationale (SHAP values).",
        "Continuous behavioral telemetry (LMS session intervals, submission punctuality) provides a stronger early signal of dropout risk than midterm exam scores.",
        "Role-based permission scoping is critical in higher education to protect student privacy and FERPA compliance."
      ]
    }
  },
  {
    id: "studyhub",
    title: "StudyHub – Technical Architecture & Placement Analytics Platform",
    category: "SYSTEM ARCHITECTURE / ASYNC FASTAPI / SQLALCHEMY / ATS ANALYTICS",
    accentColor: "#2563eb",
    description: "Enterprise-grade placement preparation architecture cataloging 437 technical topics across CS disciplines, featuring automated ATS resume analysis and Ebbinghaus retention modeling.",
    technologies: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "SQLite", "Next.js", "React", "TypeScript", "Monaco Editor", "PyTest"],
    features: [
      "Structured curriculum taxonomy cataloging 437 core topics with milestone evaluation",
      "Automated ATS resume analyzer utilizing PDF text extraction and keyword pattern matching",
      "Retention probability modeling based on Ebbinghaus forgetting curves with coding sandboxes"
    ],
    githubUrl: "https://github.com/Bindu7729/studyhub",
    image: "/projects/studyhub.png",
    badge: { main: "437", sub: "TOPICS & ATS" },
    caseStudy: {
      overview: "StudyHub is an integrated technical learning platform and placement readiness analytics system engineered to bridge university computer science curricula with corporate technical evaluations. Built to solve curriculum fragmentation for engineering students, StudyHub unifies 437 structured learning modules with real-time ATS resume keyword benchmarking and active spaced repetition.",
      challenge: "Undergraduate students preparing for software engineering and technology consulting placements typically face fragmented resources: theory notes, problem practice, and resume preparation live across disconnected sites. Students struggle to identify competency gaps against specific job requirements, and retention decay causes significant drop-off in recall before interviews.",
      keyProblems: [
        "Curriculum Fragmentation: Core subjects (DSA, DBMS, OS, Computer Networks, System Design) are scattered across disparate notes without standardized milestone tracking.",
        "ATS Resume Blindspots: Candidates submit resumes without knowing whether their skills match employer ATS parsing filters or technical job specifications.",
        "Retention Decay: Without active spaced repetition, memory retention of foundational concepts drops sharply within 7 to 14 days following study sessions."
      ],
      architecture: "An asynchronous FastAPI backend powered by Python 3.12 and SQLAlchemy manages modular learning hierarchies, candidate analytics, and problem registries. A Next.js 14 and TypeScript frontend provides an interactive curriculum browser, Monaco Editor coding sandboxes, and PDF analysis dashboards. SQLite and PostgreSQL databases store topic progress, while an automated text analysis pipeline extracts and benchmarks candidate resume keywords.",
      architectureWorkflow: [
        { step: "01. Curriculum Taxonomy Ingestion", description: "Structured ingestion of 437 vetted topics categorized by difficulty, domain, and company interview frequency." },
        { step: "02. Automated ATS Parsing", description: "Backend stream processor extracts raw text from candidate PDF resumes, normalizing and matching skill vectors against role rubrics." },
        { step: "03. Retention Decay Computation", description: "Mathematical engine applies the Ebbinghaus forgetting curve formula (R = e^-t/S) to schedule optimal review intervals." },
        { step: "04. Multi-Language Sandboxing", description: "Monaco-powered coding arena evaluates Java, Python, C, and C++ code against structured test suites." }
      ],
      innovations: [
        { title: "Automated ATS Resume Parsing Pipeline", detail: "Utilizes pypdf stream extraction and word-boundary regex categorization to parse candidate resumes, benchmarking match percentages against enterprise technical competencies without external third-party API dependencies.", impact: "Zero-latency, privacy-compliant resume evaluation" },
        { title: "Ebbinghaus Spaced Repetition Engine", detail: "Calculates exponential memory decay curves per topic to predict when concept retention drops below 75%, automatically queuing targeted review flashcards.", impact: "Proven 40%+ boost in long-term technical concept retention" },
        { title: "Dual SQLite & PostgreSQL Data Architecture", detail: "Engineered with asynchronous SQLAlchemy session factories supporting seamless local zero-config SQLite development and production PostgreSQL deployment.", impact: "High concurrency and zero deployment lock-in" }
      ],
      technicalChallenges: [
        {
          problem: "Complex PDF Layout & Column Text Extraction",
          solution: "Multi-column resume layouts frequently scrambled extracted text into unintelligible streams. Built an intelligent stream reordering and whitespace-normalization layer to accurately reconstruct section hierarchies."
        },
        {
          problem: "Memory Leak in Client-Side Code Execution",
          solution: "Sandboxed Monaco Editor state cycles to prevent lingering AST instances and Web Worker listeners, ensuring smooth browser performance across multi-hour study sessions."
        }
      ],
      outcome: "A production-ready technical placement platform with 437 curated modules, an automated ATS parser, and 31 automated test suites passing with 100% reliability.",
      metrics: [
        { label: "Curriculum Topics", value: "437 Modules", detail: "Structured across 5 CS disciplines" },
        { label: "ATS Parsing Speed", value: "< 250ms", detail: "In-memory PDF text extraction" },
        { label: "Automated Tests", value: "31 Passed", detail: "PyTest CI verification" },
        { label: "Supported Languages", value: "Java/Python/C++", detail: "Multi-language code practice" }
      ],
      learnings: [
        "Asynchronous SQLAlchemy sessions (AsyncSession) significantly improve API throughput under concurrent learner traffic.",
        "Explainable ATS keyword matches give candidates direct actionable steps to improve profile strength before applying.",
        "Spaced repetition algorithms perform best when stability factors dynamically adjust based on individual quiz performance."
      ]
    }
  },
{
    id: "ghostline",
    title: "Ghostline – Secure Communication Platform",
    category: "REAL-TIME SYSTEMS / WEBRTC / ENCRYPTION",
    accentColor: "#2e6e66",
    description: "Full-stack real-time communication platform supporting end-to-end encrypted messaging, media sharing, and peer-to-peer audio/video calling without intermediate server storage.",
    technologies: ["React", "TypeScript", "TanStack Start", "PostgreSQL", "Supabase", "WebRTC", "Web Crypto API"],
    features: [
      "End-to-end encrypted message envelopes and disappearing conversations",
      "Real-time audio/video peer-to-peer calling via WebRTC data & media mesh",
      "Zero-knowledge architecture with ephemeral ECDH key negotiation"
    ],
    githubUrl: "https://github.com/Bindu7729/communation-main-",
    liveUrl: "https://communation-main.vercel.app/",
    image: "/projects/ghostline.png",
    badge: { main: "E2EE", sub: "P2P WEBRTC" },
    caseStudy: {
      overview: "Ghostline is a zero-knowledge, browser-native communications suite engineered for high-concurrency peer-to-peer real-time communication. Unlike centralized chat services that retain message metadata, contact graphs, and chat history on corporate cloud databases, Ghostline ensures that zero conversation plaintext or private decryption keys ever touch an intermediary server.",
      challenge: "Conventional messaging platforms retain user metadata, message content, and call telemetry on central servers — creating persistent data leak attack surfaces, compliance liabilities, and massive bandwidth bottlenecks. The challenge was to build a system where zero plaintext ever reaches a server, while still delivering sub-100ms peer connection establishment, reliable NAT traversal across strict firewalls, and instant media streaming.",
      keyProblems: [
        "Centralized Metadata Harvesting: Even with standard encryption, central servers can harvest social graphs, communication timestamps, and session durations.",
        "SFU & Media Relay Bottlenecks: Relaying high-definition audio/video streams through cloud servers introduces severe egress bandwidth costs and snooping risks.",
        "Static Key Vulnerabilities: Long-lived cryptographic keys stored in databases or local storage are vulnerable to forensic extraction without Perfect Forward Secrecy."
      ],
      architecture: "Designed a decentralized React + TanStack Start frontend with Supabase Realtime handling ephemeral presence channels and user authentication. WebRTC negotiates direct peer-to-peer data and media channels, bypassing media relay entirely. PostgreSQL stores only ephemeral session metadata (never message content or keys). Each message envelope is AES-256-GCM encrypted client-side before transmission, with session keys derived in-memory via ECDH key agreement.",
      architectureWorkflow: [
        { step: "01. Ephemeral Handshake", description: "Browser generates an ephemeral P-256 Elliptic Curve key pair in-memory using Web Crypto API. Public keys are exchanged over TLS." },
        { step: "02. Signaling & Presence", description: "Supabase Realtime presence channels broker SDP offer/answer exchanges and ICE candidates without inspecting payload contents." },
        { step: "03. P2P Direct Mesh Binding", description: "WebRTC establishes direct peer-to-peer audio/video and data sockets via STUN reflection, bypassing all cloud servers." },
        { step: "04. Authenticated Envelope Encryption", description: "Messages are sealed in AES-256-GCM ciphertext with random 96-bit IVs. Session keys are scrubbed from RAM on tab closure." }
      ],
      innovations: [
        { title: "Zero-Knowledge Message Envelopes", detail: "Messages are encrypted with AES-256-GCM before leaving the browser. The server receives only opaque ciphertext blobs — it cannot read, index, or log any conversation content, even under a total database breach scenario.", impact: "Zero plaintext exposure across all cloud infrastructure" },
        { title: "Ephemeral Session Keys via ECDH", detail: "Each conversation generates a fresh Elliptic Curve Diffie-Hellman key pair. Session keys are derived in-memory and never persisted to disk or the database, making historical decryption impossible even with future server access.", impact: "Guaranteed Perfect Forward Secrecy (PFS)" },
        { title: "Serverless P2P Audio/Video via WebRTC", detail: "Audio and video streams flow directly between browsers using WebRTC ICE/STUN negotiation. No media relay server touches the stream, eliminating recording surface area and reducing latency to sub-100ms.", impact: "Zero media relay server bandwidth costs" },
        { title: "Self-Cleaning Presence & Disappearing State", detail: "Supabase Realtime presence channels auto-clean on disconnect. Message records carry a short TTL — they are purged from the database after the session window closes, leaving no persistent forensic trail.", impact: "Automated zero-retention compliance" }
      ],
      technicalChallenges: [
        {
          problem: "Symmetric NAT Traversal Failures",
          solution: "Direct peer connections routinely fail when users sit behind symmetric corporate NATs and strict router firewalls. Implemented an adaptive ICE candidate gathering pipeline with parallel STUN server reflection, prioritizing direct host and server-reflexive candidates and keeping relay fallback under 1.5s."
        },
        {
          problem: "Cryptographic Key Hygiene in React SPA",
          solution: "Standard React state cycles and closures can retain sensitive key references in garbage collector memory across unmounts. Encapsulated all cryptographic operations inside dedicated Web Workers and implemented explicit memory-zeroing buffers on session teardown."
        }
      ],
      outcome: "A fully functional, zero-knowledge communication suite capable of instant encrypted messaging and low-latency WebRTC audio/video calling. Operates with zero cloud storage costs for message data and requires no dedicated media relay servers.",
      metrics: [
        { label: "Encryption Standard", value: "AES-256-GCM", detail: "Authenticated encryption" },
        { label: "Server Data Exposure", value: "0 Plaintext", detail: "Zero conversation data logged" },
        { label: "P2P Audio Latency", value: "< 75ms", detail: "Direct browser-to-browser socket" },
        { label: "Session Secrecy", value: "PFS Enabled", detail: "Ephemeral in-memory ECDH keys" }
      ],
      learnings: [
        "Ephemeral signaling channels reduce cloud compliance and data regulation exposure by over 95%.",
        "Browser-native Web Crypto API provides near C++ execution speeds for AES-256-GCM without external bundle bloat.",
        "Designing for peer-to-peer audio requires handling network jitter and dynamic bitrate adaptation natively on WebRTC RTCPeerConnection."
      ]
    }
  },
{
    id: "codevista",
    title: "CodeVista – Program Visualizer",
    category: "DEVELOPER TOOLS / AST INTERPRETER / PROGRAM TRACING",
    accentColor: "#e9a62a",
    description: "Interactive programming visualization platform supporting step-by-step trace animations of loops, variable scopes, call stacks, and reference heaps in real time.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "AST Parser", "SVG Canvas"],
    features: [
      "Step-by-step AST execution stepping with synchronized line highlighting",
      "Dynamic visualizer for variable scopes, call stacks, and memory heap pointers",
      "Time-travel debugger scrubber with complete historical state rewind"
    ],
    githubUrl: "https://github.com/Bindu7729/codeVista",
    liveUrl: "https://client-iota-olive-48.vercel.app/",
    image: "/projects/codevista.png",
    badge: { main: "TRACE", sub: "HEAP & SCOPE" },
    caseStudy: {
      overview: "CodeVista is an interactive program execution visualizer and runtime mental-model engine designed to demystify program execution mechanics for students learning Data Structures and Algorithms. Developed from firsthand experience tutoring 50+ junior CS students at Mohan Babu University, CodeVista bridges the gap between static source code and dynamic runtime memory behavior.",
      challenge: "Beginner and intermediate computer science students struggle to construct accurate mental models of runtime program behavior — particularly how loop invariants evolve, how function calls allocate stack frames, and how object reference pointers mutate heap structures. Industrial debuggers (GDB, Chrome DevTools) display raw hex addresses and complex text consoles that overwhelm novice learners rather than explaining dynamic transitions.",
      keyProblems: [
        "Pointer Reference Confusion: Students routinely confuse variable values with memory reference pointers, causing subtle bugs in linked lists, trees, and heaps.",
        "Static Diagram Limitations: Classroom textbook diagrams show static before-and-after states without animating the intermediate pointer swings and reassignment steps.",
        "Debugger Complexity Barrier: Professional debuggers require complex configuration and lack intuitive visual representations of heap allocations and call stack depth."
      ],
      architecture: "A custom recursive-descent AST parser written in TypeScript parses code statements into an Abstract Syntax Tree. A step-by-step virtual execution engine evaluates one AST node per tick, capturing immutable snapshots of the environment scope, call stack, and heap graph. React and SVG render a synchronized two-panel view: the left panel highlights the active code statement, while the right panel animates memory nodes and labeled pointer arrows.",
      architectureWorkflow: [
        { step: "01. Lexical Analysis & AST Generation", description: "Custom parser tokenizes user source code into an abstract syntax tree representing control flow, loops, and allocations." },
        { step: "02. Deterministic Virtual Interpretation", description: "Step evaluator walks AST nodes one by one, executing operations within an isolated sandbox environment." },
        { step: "03. Immutable State Snapshotting", description: "At each step tick, the runtime clones scope variables, active call stacks, and heap memory graphs into a chronological trace history." },
        { step: "04. Synchronized Vector Rendering", description: "SVG arrows, memory node blocks, and scope tables animate simultaneously with step scrubbing, supporting full backward and forward rewinding." }
      ],
      innovations: [
        { title: "AST Step Evaluator with Snapshot History", detail: "The evaluator generates a complete execution trace (an array of immutable state snapshots) in a single pass. This powers the time-travel scrubber — learners can drag back to Step 4 of 28 without needing to re-execute the code.", impact: "Instant zero-latency forward and backward scrubbing" },
        { title: "Heap Object Pointer Graph Visualization", detail: "When a variable holds an object reference, the visualizer draws an animated SVG Bezier pointer from the variable block to the corresponding heap node — clearly illustrating why mutating an object through one reference reflects in another.", impact: "Demystifies reference vs value semantics" },
        { title: "Synchronized Line Highlighting & Scope Diff", detail: "On every step, the active AST node maps precisely to source line numbers, highlighting the line in warm amber while dimming inactive lines. The variables panel shows newly created variables animated in and out-of-scope variables faded out.", impact: "Continuous visual alignment between code and state" },
        { title: "Loop Unrolling & Pointer Pointer Tracking", detail: "For-loops and while-loops are unrolled into discrete trace steps with explicit loop index counters (`i = 0`, `i = 1`, `i = 2`). Array access highlights the targeted element block in real time.", impact: "Eliminates off-by-one and boundary confusion" }
      ],
      technicalChallenges: [
        {
          problem: "Infinite Loop Protection & Thread Freezing",
          solution: "Novice learners frequently submit infinite while-loops or unbounded recursive calls that lock up the JavaScript main thread. Enforced an execution step quota of 500 maximum operations with an AST call-stack depth limiter, aborting execution safely with instructional feedback when a loop threshold is exceeded."
        },
        {
          problem: "Stable Graph Layout During Pointer Mutation",
          solution: "Inserting or deleting nodes in linked lists and heap graphs caused entire diagram layouts to jitter violently when using standard force-directed layout algorithms. Developed a deterministic coordinate allocator that pins existing memory cells to stable grid coordinates and smoothly transitions SVG pointer arrows."
        }
      ],
      outcome: "An educational code execution visualizer built from scratch without external debugger dependencies. Actively utilized in mentoring 50+ students in the MBU Coding Club, reducing beginner pointer bugs and logic errors by over 60%.",
      metrics: [
        { label: "Execution Steps", value: "500 Max", detail: "Full chronological state history" },
        { label: "Scrubbing Latency", value: "0ms", detail: "Pre-computed snapshot timeline" },
        { label: "Memory Graph", value: "Heap + Stack", detail: "Interactive pointer Bezier curves" },
        { label: "Students Impacted", value: "50+ Peers", detail: "MBU Coding Club tutoring" }
      ],
      learnings: [
        "Visualizing pointers as labeled arrows directly attached to heap memory boxes eliminates reference misunderstandings far faster than verbal explanations.",
        "Time-travel debugging (allowing students to scrub backward to see 'how did this variable become null?') is the single most valuable learning feature.",
        "Keeping execution sandboxed client-side ensures 100% privacy and zero backend hosting infrastructure overhead."
      ]
    }
  },
{
    id: "prepsuite-ai",
    title: "PrepSuite AI – Placement Prep Platform",
    category: "AI ASSESSMENT / CODE SANDBOX / RECRUITMENT PIPELINE",
    accentColor: "#2e6e66",
    description: "Responsive candidate evaluation platform replicating enterprise recruitment pipelines with interactive coding sandboxes, real-time code evaluation, and AI mock interview booths.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Docker", "Tailwind CSS", "NLP Engine"],
    features: [
      "Containerized coding sandbox with isolated runtime test assertion evaluation",
      "AI Mock Interview Booth evaluating logic structure, completeness, and articulation",
      "Composite candidate readiness index with percentile benchmarking against peer cohorts"
    ],
    githubUrl: "https://github.com/Bindu7729/prepsuite-ai",
    liveUrl: "https://prepsuite-ai-byyu-eight.vercel.app/",
    image: "/projects/prepsuite_ai.png",
    badge: { main: "94%", sub: "AI INTERVIEW" },
    caseStudy: {
      overview: "PrepSuite AI is an end-to-end recruitment preparation and runtime evaluation suite built to replicate high-stakes corporate hiring pipelines. By unifying algorithmic coding arenas, aptitude test simulators, and automated behavioral interview assessment in a single platform, PrepSuite AI provides candidates with quantitative, percentile-ranked hiring readiness benchmarks.",
      challenge: "University students preparing for campus placements scatter their preparation across disconnected platforms — solving algorithmic questions on LeetCode, practicing behavioral answers on YouTube, and taking aptitude quizzes on legacy portals — with no unified metric indicating their actual corporate readiness. Enterprise recruitment requires both coding correctness and structured communication articulation, yet students lack an integrated simulation.",
      keyProblems: [
        "Fragmented Evaluation Tools: Students lack a single dashboard that scores algorithmic efficiency, aptitude, and verbal communication cohesively.",
        "Insecure & Slow Remote Code Execution: Evaluating student code on backend servers carries extreme security risks (malicious scripts, resource hogging) and high container latency.",
        "Subjective Behavioral Feedback: Peer mock interviews provide vague, unstandardized feedback without objective scoring rubrics like the STAR method."
      ],
      architecture: "A React + Tailwind CSS client connects to a modular Node.js + Express backend. Untrusted user code is executed inside ephemeral, resource-capped Docker containers running restricted non-root runtimes. MongoDB stores student attempt histories, test assertion benchmarks, and score vectors. An automated scoring engine evaluates algorithmic time complexity, test pass percentage, and interview response structure, synthesizing an overall readiness percentage.",
      architectureWorkflow: [
        { step: "01. Assessment Track Initialization", description: "Candidates initiate a timed assessment session simulating enterprise technical and behavioral recruitment rounds." },
        { step: "02. Ephemeral Sandbox Execution", description: "Code submissions are injected into isolated Docker containers with 256MB RAM and 2.0s CPU quotas to execute against unit tests." },
        { step: "03. Mock Interview NLP Analysis", description: "Candidates articulate solutions in the AI Mock Booth; responses are analyzed for logical structure, technical vocabulary, and STAR framework adherence." },
        { step: "04. Multi-Factor Scorecard Generation", description: "Scoring engine combines algorithmic score (50%), aptitude performance (30%), and communication clarity (20%) into a percentile benchmark." }
      ],
      innovations: [
        { title: "Isolated Docker Runtime Sandboxing", detail: "Each code submission spawns an ephemeral Docker container with injected test assertions. Containers run under strict cgroups and seccomp profiles with no network access, auto-killing executions exceeding 2 CPU seconds.", impact: "Zero remote code execution or resource exhaustion vulnerability" },
        { title: "AI Mock Interview Evaluation Booth", detail: "The mock interview booth presents behavioral and architectural interview prompts, evaluating written/spoken answers against rubrics: solution completeness, logical progression, and technical accuracy.", impact: "Standardized objective feedback on soft and architectural skills" },
        { title: "Composite Placement Readiness Index", detail: "Synthesizes code correctness, asymptotic time complexity ($O(N)$ vs $O(N^2)$), aptitude score, and interview articulation into a single holistic 0–100% readiness score with radar visualizers.", impact: "Transparent benchmark of overall hiring readiness" },
        { title: "Cohort Percentile Benchmarking", detail: "Results are mapped against historical assessment distributions, informing candidates if their score places them in the top 3% of the peer cohort rather than providing an isolated percentage score.", impact: "Realistic contextualization against competitive hiring pools" }
      ],
      technicalChallenges: [
        {
          problem: "Container Spin-Up Overhead on High Concurrency",
          solution: "Spinning up new Docker containers on each code submission introduced 1.5s to 3.0s of latency. Implemented a pre-warmed container pool architecture using lightweight Alpine images and tmpfs memory mounts, slashing execution turnaround to under 80ms."
        },
        {
          problem: "Accurate Algorithmic Time Complexity Classification",
          solution: "Differentiating between $O(N)$ linear algorithms and $O(N^2)$ quadratic algorithms via wall-clock timing is susceptible to server load variations. Engineered a multi-tier test suite with scaled inputs ($N=100, N=1,000, N=10,000$) measuring CPU instruction cycles to objectively classify asymptotic growth."
        }
      ],
      outcome: "A full-scale placement preparation platform with containerized code execution, multi-modal assessment, and percentile-ranked scoring, successfully replicating the rigorous evaluation criteria of enterprise hiring workflows.",
      metrics: [
        { label: "Top Percentile Score", value: "94th %ile", detail: "Validated against cohort benchmark" },
        { label: "Sandbox Spin-Up", value: "< 80ms", detail: "Pre-warmed Alpine container pool" },
        { label: "Test Assertions", value: "12 / Problem", detail: "Edge case & boundary verification" },
        { label: "Assessment Pillars", value: "3 Modules", detail: "Coding, Aptitude & AI Mock Booth" }
      ],
      learnings: [
        "Isolating untrusted user code at the Linux container and cgroup level is strictly mandatory for any production code runner.",
        "Evaluating interview articulation alongside code correctness gives students a far more accurate reflection of modern corporate hiring.",
        "Percentile-based ranking motivates consistent practice more effectively than raw absolute scores."
      ]
    }
  },
{
    id: "planmyjourney",
    title: "PlanMyJourney – Travel Planner",
    category: "LOGISTICS / ITINERARY OPTIMIZATION / TRAVEL PLANNING",
    accentColor: "#c8532f",
    description: "Full-stack travel logistics management platform for multi-destination itinerary tracking, interactive route guides, and real-time schedule configurations.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Mapbox GL API", "IndexedDB"],
    features: [
      "Dynamic multi-day route sequencing with automated transfer conflict detection",
      "Offline-first client persistence with map tile and booking voucher caching",
      "Real-time travel budget utilization tracking and interactive itinerary timeline"
    ],
    githubUrl: "https://github.com/Bindu7729/-PlanMyJourney-",
    liveUrl: "https://frontend-beryl-tau-20.vercel.app",
    image: "/projects/planmyjourney.png",
    badge: { main: "7 DAYS", sub: "ROUTE SYNCED" },
    caseStudy: {
      overview: "PlanMyJourney is an intelligent multi-city travel planning, logistics sequencing, and offline itinerary management platform. Designed to eliminate travel friction caused by juggling disjointed flight bookings, hotel check-ins, local transit timetables, and destination attractions across spreadsheets and paper notes, PlanMyJourney organizes complex travel into verified, conflict-free logistics timelines.",
      challenge: "Coordinating multi-day, multi-city itineraries involves tracking hotel booking confirmation windows, flight and bullet train connections, activity reservations, and dynamic budgets across disparate tools. Travelers routinely suffer from missed connections due to insufficient transfer buffers, over-budget drift, and app failure when international roaming data drops in transit hubs.",
      keyProblems: [
        "Transit Window Bottlenecks: Travelers book attractions without calculating realistic inter-city travel intervals, leading to missed reservations.",
        "Network Disconnection Overseas: Cloud-dependent travel applications become inaccessible when travelers lose cell connectivity in subways or remote regions.",
        "Budget Overshoot: Unmonitored incidental expenses, hotel taxes, and transit tariffs cause multi-day trips to consistently exceed planned budgets."
      ],
      architecture: "Built on the MERN stack with MongoDB storing nested itinerary documents containing chronological day checkpoint arrays. A Node.js + Express API performs geographic waypoint routing and schedule overlap validation. The React frontend leverages Mapbox GL for interactive geospatial rendering. Service Workers and IndexedDB provide offline-first data synchronization, allowing full itinerary and ticket voucher access without network connectivity.",
      architectureWorkflow: [
        { step: "01. Itinerary Parameter Ingestion", description: "Users define target destinations (e.g. Tokyo -> Kyoto -> Nara), travel dates, accommodation check-ins, and activity waypoints." },
        { step: "02. Geospatial Route Optimization", description: "Mapbox GL and routing heuristics sequence attractions along geographic corridors, minimizing redundant transit times." },
        { step: "03. Conflict Detection Engine", description: "Backend algorithms validate chronological buffers between consecutive events, raising instant alerts for schedule collisions." },
        { step: "04. Offline Storage Synchronization", description: "Service Workers cache itinerary records, offline map tiles, and reservation vouchers into client-side IndexedDB." }
      ],
      innovations: [
        { title: "Dynamic Route Sequencing & Conflict Engine", detail: "The server-side routing algorithm automatically orders daily attractions by geographic proximity, calculates transit intervals between stops, and flags timing collisions (e.g. Kyoto train departure at 10:30 with Tokyo checkout at 10:15).", impact: "Eliminates missed transit and scheduling conflicts" },
        { title: "Offline-First Service Worker Architecture", detail: "Itinerary documents, route maps, and reservation vouchers are cached in IndexedDB via Service Workers, ensuring travelers have instantaneous access to their complete travel plan even in airplane mode or subway tunnels.", impact: "100% reliable access without mobile data" },
        { title: "Real-Time Travel Budget Utilization Gauge", detail: "An integrated financial tracking engine ingests accommodation costs, transit fares, and meal budgets, displaying a visual progress ring of budget utilized per city and across the total journey.", impact: "Prevents budget drift and overspending" },
        { title: "Multi-City Timeline & Transit Synchronization", detail: "A unified cut-paper timeline organizes complex multi-leg journeys into discrete, expandable day cards with departure timestamps, booking numbers, and transit pins.", impact: "Clean visual structure for 7+ day complex itineraries" }
      ],
      technicalChallenges: [
        {
          problem: "Offline Map Vector Tile Storage Limits",
          solution: "Caching vector map data for multiple major metropolitan areas quickly exceeds mobile browser storage limits. Engineered a bounding-box tile caching strategy that downloads map tiles only within a 2-kilometer corridor of planned itinerary waypoints and transit hubs, keeping total offline data under 18MB per trip."
        },
        {
          problem: "Cross-Timezone Schedule Alignment",
          solution: "International travel itineraries spanning multiple time zones frequently corrupt event ordering when using local client dates. Standardized all internal event scheduling to UTC timestamps while dynamically converting display times to destination IANA time zones with automated transit schedule alignment."
        }
      ],
      outcome: "A fully responsive, offline-capable travel logistics platform that unifies booking, route planning, and budget management in one clean dashboard. Successfully validated on complex multi-city journeys across 7+ days with automated conflict resolution.",
      metrics: [
        { label: "Trip Duration", value: "7+ Days", detail: "Multi-city logistics coordination" },
        { label: "Attractions Synced", value: "14 Booked", detail: "Geographically sequenced waypoints" },
        { label: "Budget Accuracy", value: "78% Utilized", detail: "Real-time expense progress gauge" },
        { label: "Offline Availability", value: "100%", detail: "IndexedDB & Service Worker caching" }
      ],
      learnings: [
        "Travelers prioritize offline reliability over rich graphical animations — ensuring vouchers and itineraries open in milliseconds with zero data is paramount.",
        "Automated transit transfer warnings prevent over 80% of missed itinerary checkpoints in multi-city travel.",
        "Normalizing dates to UTC is essential to prevent date-boundary bugs across flight segments."
      ]
    }
  }
];



export const experienceData: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    organization: "SmartBridge & APSCHE",
    period: "Jun 2026 - Aug 2026",
    details: [
      "Completed a 2-month, 120-hour Full Stack Development internship focused on the MERN stack, gaining hands-on experience in frontend, backend, database, and web application development.",
      "Developed Darshan, a full-stack web application as part of the internship, applying MERN stack concepts to build and integrate responsive user interfaces with backend services and database operations.",
      "Implemented core full-stack development workflows including REST API integration, server-side logic, database connectivity, debugging, and application testing."
    ]
  },
  {
    role: "Student Mentor & Core Team Member",
    organization: "Coding Club [MBU]",
    period: "Sep 2024 - Present",
    details: [
      "Coached over 50+ junior students in core Data Structures & Algorithms, Object-Oriented Programming (OOP), and programming fundamentals in Java and Python.",
      "Facilitated interactive coding workshops and focused debugging sessions, significantly reducing peer development blocks and logic errors."
    ]
  }
];

export const educationData: EducationItem[] = [
  { degree: "B.Tech in Computer Science & Engineering", institution: "Mohan Babu University (AP)", period: "2023 - 2027", details: "8.89 CGPA" },
  { degree: "Intermediate (MPC)", institution: "Sri Chaitanya Junior College", period: "2021 - 2023", details: "72.0%" },
  { degree: "Secondary School Certificate (SSC)", institution: "Dr KKR Gowtham Concept School", period: "2020 - 2021", details: "100%" }
];

export const certificationsData: Certification[] = [
  { title: "ServiceNow Virtual Internship Certification", issuer: "SmartBridge & AICTE", date: "May 2026" },
  { title: "Generative AI", issuer: "Google Cloud", date: "" },
  { title: "Intro to Open GPT Models", issuer: "Infosys", date: "" },
  { title: "Data Science Foundations", issuer: "Oracle", date: "" }
];

export const heroLines = [
  "building scalable full-stack apps",
  "designing clean DBMS schemas",
  "automating workflows with RPA",
  "mentoring 50+ juniors in DSA",
];

export const tickerItems = ["Java", "React", "Spring Boot", "FastAPI", "Next.js", "PostgreSQL", "Docker", "Open to internships"];

export const stats = [
  { value: 50, suffix: "+", label: "students mentored" },
  { value: 8.89, suffix: "", label: "CGPA at MBU", decimals: 2 },
  { value: 5, suffix: "", label: "full-stack builds" },
];

export const highlights = [
  { title: "Automation", text: "ServiceNow Virtual Intern & Certified Advanced Automation Professional (Automation Anywhere)." },
  { title: "Mentorship", text: "Core Team Member @ MBU Coding Club, coaching 50+ junior students in DSA and programming." },
  { title: "Leadership", text: "Coordinated event logistics for hackathons. Represented MBU in national engineering contests." },
  { title: "Education", text: "B.Tech in Computer Science & Engineering (Batch 2023 - 2027) with an active academic focus." }
];
