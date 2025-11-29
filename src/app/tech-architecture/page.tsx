export default function TechArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Technical Architecture
          </h1>
          <p className="text-lg text-slate-600">
            System architecture for GrowQR AI-powered career platform
          </p>
        </div>

        {/* Platform Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Platform Overview
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            GrowQR is an AI-powered career development platform featuring:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>AI-based resume and cover letter generation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>Digital twin career agents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>Video-based interview practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>Intelligent job matching</span>
              </li>
            </ul>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>Social branding and profile management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>MCQ-based skill assessments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>Real-time AI feedback and coaching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 mt-1">▸</span>
                <span>Gamified learning experiences</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Core Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Frontend</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Next.js 14 (App Router)</li>
                <li>• React Server Components</li>
                <li>• Tailwind CSS + shadcn/ui</li>
                <li>• Server-Sent Events</li>
                <li>• NextAuth.js v5</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Backend</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• FastAPI (Python)</li>
                <li>• Microservices Architecture</li>
                <li>• Celery + Redis</li>
                <li>• Traefik API Gateway</li>
                <li>• Google ADK (Agent Kit)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Data Layer</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• PostgreSQL 16</li>
                <li>• Pinecone Vector DB</li>
                <li>• Redis (Cache & Queue)</li>
                <li>• Google Cloud Storage</li>
                <li>• Kubernetes/GKE</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Phases */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Architecture Evolution Phases
          </h2>

          {/* Phase 1: MVP */}
          <div className="mb-12 pb-12 border-b border-slate-200">
            <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                Phase 1: MVP Architecture
              </h3>
              <p className="text-green-700">0-500K Users • 10-12 Week Timeline</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-slate-600 mb-4">
                  Fast to market, production-ready, scalable foundation. Timeline: 10-12 weeks.
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-green-400 text-xs font-mono leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                              │
│  Next.js 14 (App Router) + Tailwind + shadcn/ui                    │
│  • SSR for SEO (resumes, profiles)                                  │
│  • React Server Components for AI features                          │
│  • Server-Sent Events for real-time feedback                        │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         API GATEWAY LAYER                           │
│  Traefik v3 (Docker/K8s)                                            │
│  • JWT Authentication • Rate Limiting • Request Routing             │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    ▼                           ▼
┌────────────────────────────────┐  ┌─────────────────────────────────┐
│    MICROSERVICES (FastAPI)     │  │   DIGITAL TWIN LAYER            │
│ ┌────────────────────────────┐ │  │ Google ADK + Vertex AI          │
│ │ • auth-service             │ │  │ ┌─────────────────────────────┐ │
│ │ • user-profile-service     │ │  │ │ Career Twin Agent           │ │
│ │ • resume-service           │ │  │ │ • Resume Writer             │ │
│ │ • coverletter-service      │ │  │ │ • Job Matcher               │ │
│ │ • video-coach-service      │ │  │ │ • Salary Negotiator         │ │
│ │ • matchmaking-service      │ │  │ └─────────────────────────────┘ │
│ │ • social-branding-service  │ │  │                                 │
│ │ • practice-service         │ │  │ Memory:                         │
│ └────────────────────────────┘ │  │ • Pinecone (long-term)          │
│                                │  │ • Redis (short-term)            │
└────────────────────────────────┘  └─────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      BACKGROUND JOBS LAYER                          │
│  Celery + Redis Broker + Flower                                     │
│  • PDF Generation • Video Analysis • Daily Twin Updates             │
│  • Weekly Job Matching • Email Notifications                        │
└─────────────────────────────────────────────────────────────────────┘
                    │
        ┌───────────┴──────────┬─────────────────┐
        ▼                      ▼                 ▼
┌──────────────┐   ┌─────────────────────┐   ┌──────────────────┐
│  PostgreSQL  │   │  Pinecone Vector DB │   │  Cloud Storage   │
│              │   │                     │   │                  │
│ • Users      │   │ • Career Embeddings │   │ • Resume PDFs    │
│ • Resumes    │   │ • Job Embeddings    │   │ • Videos         │
│ • Jobs       │   │ • Resume Versions   │   │ • Assets         │
│ • Audit Logs │   │                     │   │                  │
└──────────────┘   └─────────────────────┘   └──────────────────┘`}
                </pre>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-3">Why This Works</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• 95% Python backend - fast development</li>
                    <li>• Next.js + FastAPI = high velocity</li>
                    <li>• Start with 4 microservices, add more without downtime</li>
                    <li>• Scalable to 500K users without rewrite</li>
                    <li>• Digital twin foundation ready for Phase 2</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-3">Tech Decisions</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Monorepo for easy deployment</li>
                    <li>• Postgres with pgvector extension</li>
                    <li>• Docker + Kubernetes (GKE Autopilot)</li>
                    <li>• Cloud Run for non-critical services</li>
                    <li>• ArgoCD for GitOps deployment</li>
                  </ul>
                </div>
              </div>

              {/* Microservices Details */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Microservices Breakdown</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-slate-900 mb-2">auth-service</p>
                    <p className="text-slate-600">JWT tokens, OAuth, magic links, session management</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-2">resume-service</p>
                    <p className="text-slate-600">AI resume generation, templates, PDF export, version control</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-2">coverletter-service</p>
                    <p className="text-slate-600">Personalized cover letters, company research integration</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-2">video-coach-service</p>
                    <p className="text-slate-600">Video recording, AI feedback, speech analysis, practice sessions</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-2">matchmaking-service</p>
                    <p className="text-slate-600">Job matching algorithm, vector similarity search</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 mb-2">practice-service</p>
                    <p className="text-slate-600">MCQs, roleplay scenarios, skill assessments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Scale */}
          <div className="mb-12 pb-12 border-b border-slate-200">
            <div className="bg-cyan-50 rounded-lg p-4 mb-6 border border-cyan-200">
              <h3 className="text-2xl font-bold text-cyan-900 mb-2">
                Phase 2: Scale Architecture
              </h3>
              <p className="text-cyan-700">500K-5M Users • Advanced Digital Twins</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-slate-600 mb-4">
                  Advanced digital twins, real-time features, event-driven architecture.
                </p>
              </div>

              {/* Enhanced Architecture Diagram */}
              <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-cyan-400 text-xs font-mono leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────┐
│                      MULTI-AGENT TWIN CLUSTER                       │
│  LangGraph + Google ADK                                             │
│  ┌───────────┐ ┌──────────┐ ┌────────┐ ┌───────────┐ ┌──────────┐ │
│  │ Strategist│ │Researcher│ │ Writer │ │Negotiator │ │Therapist │ │
│  └───────────┘ └──────────┘ └────────┘ └───────────┘ └──────────┘ │
│                                                                     │
│  Memory Architecture:                                              │
│  • Short-term: Redis Streams (24h)                                 │
│  • Mid-term: Pinecone + Metadata Filters                           │
│  • Long-term: Firestore (Historical Analysis)                      │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          EVENT BUS (Kafka)                          │
│  Confluent Cloud / Upstash Kafka                                    │
│  • Every user action = event                                        │
│  • Twin reacts in real-time (<3 seconds)                            │
│  • Event sourcing for complete user journey                         │
└─────────────────────────────────────────────────────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        ▼                         ▼                         ▼
┌──────────────┐   ┌──────────────────────┐   ┌──────────────────────┐
│ Microservices│   │ Real-time Video Layer│   │  Analytics Pipeline  │
│   (Phase 1)  │   │                      │   │                      │
│              │   │ LiveKit/Daily.co     │   │ • User behavior      │
│ + Enhanced   │   │ • WebRTC streams     │   │ • Twin performance   │
│ • Billing    │   │ • Whisper STT        │   │ • Job match quality  │
│ • Analytics  │   │ • GPT-4o feedback    │   │ • A/B testing        │
│ • Webhooks   │   │ • Sentiment analysis │   │                      │
└──────────────┘   └──────────────────────┘   └──────────────────────┘`}
                </pre>
              </div>

              {/* Phase 2 Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-3">New Capabilities</h4>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li>• 5 specialized AI agents per user</li>
                    <li>• Real-time video coaching with AI feedback</li>
                    <li>• Event-driven architecture (Kafka)</li>
                    <li>• Live transcription and sentiment analysis</li>
                    <li>• "Talk to your past self" feature</li>
                    <li>• Predictive career path modeling</li>
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3">Infrastructure Updates</h4>
                  <ul className="space-y-2 text-sm text-orange-800">
                    <li>• Separate GCP project for twins</li>
                    <li>• Redis Enterprise for high availability</li>
                    <li>• Firestore for historical data</li>
                    <li>• WebRTC infrastructure (LiveKit)</li>
                    <li>• Enhanced monitoring with OpenTelemetry</li>
                    <li>• Multi-region deployment capability</li>
                  </ul>
                </div>
              </div>

              {/* Agent System */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">Multi-Agent Twin System</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Strategist:</span>
                    <span>Analyzes user goals, decides daily actions, prioritizes career moves</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Researcher:</span>
                    <span>Scrapes job postings, tracks company news, monitors layoffs and funding</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Writer:</span>
                    <span>Continuously updates resume based on new skills and experiences</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Negotiator:</span>
                    <span>Roleplay salary negotiations, provides market data and counteroffers</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Therapist:</span>
                    <span>Detects burnout patterns, suggests breaks, provides motivation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3: Enterprise */}
          <div>
            <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                Phase 3: Enterprise Architecture
              </h3>
              <p className="text-amber-700">5M+ Users • Maximum Performance & Global Scale</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-slate-600 mb-4">
                  Maximum performance, global scale, enterprise-grade reliability.
                </p>
              </div>

              {/* Enterprise Diagram */}
              <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                <pre className="text-amber-400 text-xs font-mono leading-relaxed">
{`┌─────────────────────────────────────────────────────────────────────┐
│                    GLOBAL LOAD BALANCER (GCP)                       │
│  • Multi-region routing • DDoS protection • CDN integration         │
└─────────────────────────────────────────────────────────────────────┘
                    │                              │
        ┌───────────┴──────────┐     ┌───────────┴──────────┐
        ▼                      ▼     ▼                      ▼
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│   US-WEST    │      │   US-EAST    │      │   EU-WEST    │
│              │      │              │      │              │
│ • Full Stack │      │ • Full Stack │      │ • Full Stack │
│ • Active     │      │ • Active     │      │ • Active     │
└──────────────┘      └──────────────┘      └──────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    SERVICE MESH (Istio)                             │
│  • mTLS between all services • Advanced traffic management          │
│  • Circuit breakers • Retries • Observability                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│               HIGH-PERFORMANCE SERVICES (Rust)                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────────┐   │
│  │ Matchmaking     │  │ Real-time Chat  │  │ Notification     │   │
│  │ <10ms latency   │  │ WebSocket Hub   │  │ Delivery Engine  │   │
│  └─────────────────┘  └─────────────────┘  └──────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                  WORKFLOW ORCHESTRATION                             │
│  Temporal.io - Bulletproof Workflows                                │
│  • Resume generation pipelines • Video processing • Twin updates    │
│  • Survives datacenter failures • Automatic retries                 │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                      DATA LAYER (Multi-DB)                          │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │ ScyllaDB     │  │ PostgreSQL   │  │ Pinecone    │  │ Redis   │ │
│  │ (Hot Paths)  │  │ (Relations)  │  │ (Vectors)   │  │Enterprise│ │
│  │              │  │              │  │             │  │         │ │
│  │ • Leaderboard│  │ • Users      │  │ • Embeddings│  │ • Cache │ │
│  │ • Real-time  │  │ • Jobs       │  │ • Semantic  │  │ • Queue │ │
│  │ • Notifications│ │ • Audit     │  │   Search    │  │ • Session│ │
│  └──────────────┘  └──────────────┘  └─────────────┘  └─────────┘ │
└─────────────────────────────────────────────────────────────────────┘`}
                </pre>
              </div>

              {/* Enterprise Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-3">Performance</h4>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Matchmaking latency under 10ms</li>
                    <li>• Global multi-region active-active</li>
                    <li>• 99.99% uptime SLA</li>
                    <li>• Sub-second video feedback</li>
                    <li>• Rust services for hot paths</li>
                    <li>• ScyllaDB for extreme throughput</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                  <h4 className="font-semibold text-indigo-900 mb-3">Enterprise Features</h4>
                  <ul className="space-y-2 text-sm text-indigo-800">
                    <li>• SOC 2 Type II compliance</li>
                    <li>• GDPR/CCPA data controls</li>
                    <li>• Advanced audit logging</li>
                    <li>• White-label deployments</li>
                    <li>• Enterprise SSO (SAML, OIDC)</li>
                    <li>• Custom SLA guarantees</li>
                  </ul>
                </div>
              </div>

              {/* Cost & Scale */}
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <h4 className="font-semibold text-slate-900 mb-4">When to Migrate to Phase 3</h4>
                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Users:</span>
                    <span>5M+ Monthly Active Users (MAU)</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Revenue:</span>
                    <span>$20M+ ARR with enterprise contracts</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Traffic:</span>
                    <span>1M+ requests per minute sustained</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Team:</span>
                    <span>50+ engineers, dedicated infrastructure team</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-medium text-slate-900 w-32">Investment:</span>
                    <span>Series B+ funding ($50M+) for infrastructure overhaul</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Phase 3 architecture is intentionally over-engineered for most use cases.
                  Only migrate when you have clear evidence of performance bottlenecks and the resources to support
                  this level of complexity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Database Schema */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Database Schema Overview
          </h2>

          <div className="space-y-6">
            {/* PostgreSQL Schema */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">PostgreSQL Schema</h3>
              <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-xs font-mono">
{`-- Users & Authentication
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  career_twin_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Resumes with Vector Support
CREATE TABLE resumes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title VARCHAR(255),
  content_jsonb JSONB,
  content_text TEXT,
  embedding_vector VECTOR(1536),
  version_number INT,
  parent_id UUID REFERENCES resumes(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Jobs
CREATE TABLE jobs (
  id UUID PRIMARY KEY,
  title VARCHAR(255),
  company VARCHAR(255),
  description TEXT,
  requirements JSONB,
  embedding_vector VECTOR(1536),
  posted_at TIMESTAMP
);

-- Applications
CREATE TABLE applications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  job_id UUID REFERENCES jobs(id),
  resume_id UUID REFERENCES resumes(id),
  status VARCHAR(50),
  applied_at TIMESTAMP DEFAULT NOW()
);`}
                </pre>
              </div>
            </div>

            {/* Pinecone Indexes */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Pinecone Vector Indexes</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-2">user-career-twin</h4>
                  <p className="text-sm text-slate-600">One vector per user representing their complete career profile, skills, and preferences</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-2">job-descriptions</h4>
                  <p className="text-sm text-slate-600">Every job posting vectorized for semantic similarity matching</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <h4 className="font-medium text-slate-900 mb-2">resume-snippets</h4>
                  <p className="text-sm text-slate-600">Individual resume bullet points for intelligent remixing and suggestions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Strategy */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Deployment & DevOps
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Development</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Docker Compose for local development</li>
                <li>• Hot reload for all services</li>
                <li>• Seeded test data</li>
                <li>• Mock AI services for faster iteration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Production</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• GKE Autopilot (zero ops Kubernetes)</li>
                <li>• ArgoCD for GitOps deployments</li>
                <li>• Blue-green deployments</li>
                <li>• Automated rollbacks on errors</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Monitoring</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Prometheus + Grafana dashboards</li>
                <li>• Sentry for error tracking</li>
                <li>• Logfire for structured logging</li>
                <li>• Custom alerts for AI model performance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Security</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• JWT token authentication</li>
                <li>• Rate limiting per user tier</li>
                <li>• Data encryption at rest and in transit</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recommended Path */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Recommended Implementation Path
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <p className="font-medium text-slate-900">Start with Phase 1 (MVP)</p>
                <p className="text-sm text-slate-600">Launch in 10-12 weeks with core features. Build for 500K users.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <p className="font-medium text-slate-900">Lay Twin Foundations Early</p>
                <p className="text-sm text-slate-600">Every user gets a career_twin_id. Store all resume versions as embeddings in Pinecone from day one.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <p className="font-medium text-slate-900">Achieve Product-Market Fit</p>
                <p className="text-sm text-slate-600">Reach $1M ARR. Validate core value proposition. Build engaged user base.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <p className="font-medium text-slate-900">Migrate to Phase 2 (~374 days after 100K users)</p>
                <p className="text-sm text-slate-600">Activate full multi-agent twins. Add Kafka event bus. Launch real-time video coaching.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <p className="font-medium text-slate-900">Scale to Enterprise (Only if needed)</p>
                <p className="text-sm text-slate-600">Phase 3 only when you hit 5M+ MAU and have $50M+ funding. Most companies never need this.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
