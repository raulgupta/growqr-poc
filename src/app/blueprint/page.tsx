"use client";

export default function BlueprintPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">
            GrowQR System Blueprint
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Distributed Microservices Architecture - Python FastAPI Backend
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            System Architecture Overview
          </h2>

          {/* Visual Architecture Diagram */}
          <div className="bg-slate-50 rounded-lg p-4 sm:p-6 mb-6 border border-slate-200">
            <div>
              {/* Frontend Layer */}
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4 text-center w-full max-w-sm sm:max-w-md">
                  <div className="font-bold text-blue-700">Frontend Layer</div>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-2">
                    <span className="px-3 py-1 bg-white rounded text-sm text-slate-700 font-medium">Next.js (Web)</span>
                    <span className="px-3 py-1 bg-white rounded text-sm text-slate-700 font-medium">React Native (Mobile)</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="text-slate-400 text-2xl">↓</div>
              </div>

              {/* API Gateway */}
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center w-full max-w-xs sm:max-w-sm">
                  <div className="font-bold text-green-700">Kong API Gateway</div>
                  <div className="text-xs text-slate-600 mt-1">JWT • Rate-Limiting • CORS • Analytics</div>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="text-slate-400 text-2xl">↓</div>
              </div>

              {/* Microservices Layer */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
                <div className="text-center font-semibold text-indigo-700 mb-4">Python FastAPI Microservices</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {[
                    "UMS (User Management)",
                    "Upskilling Service",
                    "Resume & Cover Letter",
                    "Social Branding",
                    "Matchmaking Service",
                    "Notification Service",
                    "Assessment Service",
                    "QR & Q-Score",
                    "AI Orchestration",
                    "Archival Service",
                    "Alerts Service",
                  ].map((service) => (
                    <div
                      key={service}
                      className="bg-white border border-indigo-300 rounded px-2 py-1 text-xs text-center text-indigo-800"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="text-slate-400 text-2xl">↓</div>
              </div>

              {/* Data Layer */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4">
                <div className="bg-cyan-100 border-2 border-cyan-500 rounded-lg p-2 sm:p-3 text-center">
                  <div className="font-bold text-cyan-700 text-xs sm:text-sm">PostgreSQL</div>
                  <div className="text-xs text-slate-500">Primary DB</div>
                </div>
                <div className="bg-red-100 border-2 border-red-500 rounded-lg p-2 sm:p-3 text-center">
                  <div className="font-bold text-red-700 text-xs sm:text-sm">Redis</div>
                  <div className="text-xs text-slate-500">Cache/Sessions</div>
                </div>
                <div className="bg-yellow-100 border-2 border-yellow-600 rounded-lg p-2 sm:p-3 text-center">
                  <div className="font-bold text-yellow-700 text-xs sm:text-sm">ElasticSearch</div>
                  <div className="text-xs text-slate-500">Search/Index</div>
                </div>
                <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-2 sm:p-3 text-center">
                  <div className="font-bold text-purple-700 text-xs sm:text-sm">Vector DB</div>
                  <div className="text-xs text-slate-500">Semantic Search</div>
                </div>
                <div className="bg-slate-100 border-2 border-slate-500 rounded-lg p-2 sm:p-3 text-center col-span-2 sm:col-span-1">
                  <div className="font-bold text-slate-700 text-xs sm:text-sm">S3/GCS</div>
                  <div className="text-xs text-slate-500">File Storage</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infrastructure Stack Summary */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Infrastructure Stack</h2>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-3">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Frontend</span>
                <div className="flex gap-1 flex-wrap justify-end">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-medium">Next.js</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-medium">React Native</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Components:</span> React, Tailwind CSS, TanStack Query</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Function:</span> User Interface, Server State Management</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Backend</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs font-medium">Python FastAPI</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Components:</span> Django Admin, REST + GraphQL, WebSockets</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Function:</span> High-performance API, Business Logic</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">API Gateway</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Kong Gateway</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Components:</span> JWT, Rate-Limiting, Analytics, CORS</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Function:</span> Edge Security, Centralized Routing</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Data Storage</span>
                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs font-medium">Polyglot</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Components:</span> PostgreSQL, Redis, ElasticSearch, Vector DB</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Function:</span> Structured data, Caching, Search</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">AI</span>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs font-medium">Generative AI</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Components:</span> C-RAG Pipeline, LLMs, Embeddings, MCP</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Function:</span> Content generation, Roleplay, Scoring</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">DevOps</span>
                <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs font-medium">GitLab CI/CD</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Components:</span> Docker, AWS/GCP, Load Balancing</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Function:</span> Automated pipeline, Cloud Hosting</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Automation</span>
                <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded text-xs font-medium">n8n</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Components:</span> Webhooks, External API Connectors</p>
              <p className="text-xs text-slate-500"><span className="font-medium">Function:</span> Low-code automation, Data ingestion</p>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Layer</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Primary Technology</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Key Components</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Frontend</td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Next.js</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium ml-1">React Native</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">React, Tailwind CSS, TanStack Query</td>
                  <td className="px-4 py-3 text-sm text-slate-700">User Interface, Server State Management</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Backend</td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Python FastAPI</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">Django Admin, REST + GraphQL, WebSockets (Soketi)</td>
                  <td className="px-4 py-3 text-sm text-slate-700">High-performance API, Business Logic, Real-time</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">API Gateway</td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Kong Gateway</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">JWT Plugin, Rate-Limiting, Analytics, CORS</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Edge Security, Centralized Routing, Traffic Management</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Data Storage</td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded text-xs font-medium">Polyglot Persistence</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">PostgreSQL, Redis, ElasticSearch, Vector DB</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Structured data, Caching, Full-text & Semantic search</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">AI</td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">Generative AI</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">C-RAG Pipeline, LLMs, Embeddings, MCP</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Content generation, Roleplay, Scoring, Chatbot</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">DevOps</td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">GitLab CI/CD</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">Docker, AWS/GCP, Load Balancing</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Automated pipeline, Containerization, Cloud Hosting</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">Automation</td>
                  <td className="px-4 py-3 text-sm text-slate-700">
                    <span className="px-2 py-1 bg-rose-100 text-rose-800 rounded text-xs font-medium">n8n</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">Webhooks, External API Connectors, Microservice APIs</td>
                  <td className="px-4 py-3 text-sm text-slate-700">Low-code workflow automation, Data ingestion, Alerts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Microservices Details */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Microservices Architecture (FastAPI)</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* UMS - User Management Service */}
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-300 lg:col-span-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">UMS (User Management Service)</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">Consolidated service handling Auth, Onboarding, Dashboard & Payments</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-slate-600">Modules:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs">Auth</span>
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs">Onboarding</span>
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs">Dashboard</span>
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs">Payments</span>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Features:</span>
                  <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                    <li>• Sign-In/Sign-Up, E-Verification</li>
                    <li>• Profile setup & Settings</li>
                    <li>• Dashboard & AI Recommendations</li>
                    <li>• Subscriptions & Billing</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Data:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">Redis</span>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">ElasticSearch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upskilling Service */}
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-emerald-600 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Upskilling Service</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">Consolidated service for Roleplay & Practice modules</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-slate-600">Modules:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">Roleplay</span>
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">Practice</span>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Roleplay Features:</span>
                  <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                    <li>• Curated Bootcamp</li>
                    <li>• Weekly follows & Certificate</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Practice Features:</span>
                  <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                    <li>• Avatar-Based Interview</li>
                    <li>• Rapid Detailed Feedback</li>
                    <li>• VTY Source</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Data & AI:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                    <span className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded text-xs">S3/GCS</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">C-RAG</span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs</span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">Vector DB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume & Cover Letter Service */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Resume & Cover Letter Service</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">Consolidated document generation service</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-slate-600">Features:</span>
                  <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                    <li>• Auto-fetch / Manual entry</li>
                    <li>• Templates & AI ATS Scoring</li>
                    <li>• Cover Letter Generation</li>
                    <li>• PDF/QR Export</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Data & AI:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                    <span className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded text-xs">S3/GCS</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs</span>
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">n8n</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Matchmaking Service */}
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-rose-600 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Matchmaking Service</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">Intelligent job matching with dual application paths</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-slate-600">Application Paths:</span>
                  <div className="mt-1 space-y-1">
                    <div className="bg-green-50 rounded p-2 border border-green-200">
                      <span className="text-xs font-medium text-green-800">Auto Apply Bot</span>
                      <p className="text-xs text-slate-600 mt-0.5">Automated job applications on behalf of user</p>
                      <div className="flex gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">Node.js</span>
                        <span className="px-1.5 py-0.5 bg-violet-100 text-violet-800 rounded text-xs">Puppeteer</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded p-2 border border-blue-200">
                      <span className="text-xs font-medium text-blue-800">Manual Apply</span>
                      <p className="text-xs text-slate-600 mt-0.5">Find right matches for applicants to apply</p>
                      <div className="flex gap-1 mt-1">
                        <span className="px-1.5 py-0.5 bg-green-100 text-green-800 rounded text-xs">FastAPI</span>
                        <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">ElasticSearch</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Data & Tools:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">ElasticSearch</span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">Bright Data</span>
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">n8n</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Branding Service */}
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-orange-600 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Social Branding Service</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">Social media automation & content generation</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-slate-600">Platforms:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-pink-100 text-pink-800 rounded text-xs">Instagram</span>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Facebook</span>
                    <span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded text-xs">LinkedIn</span>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Features:</span>
                  <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                    <li>• Social posts & Hashtags</li>
                    <li>• Scheduled posting (n8n)</li>
                    <li>• Reports & Recommendations</li>
                    <li>• Content Generation</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Data & Tools:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">Bright Data</span>
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">n8n</span>
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Inbox Service */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Notification Inbox</h4>
              </div>
              <p className="text-xs text-slate-600 mb-2">Unified notifications, Categorized, Deep links, Real-time</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
              </div>
              <div className="mt-2">
                <span className="px-2 py-0.5 bg-violet-100 text-violet-800 rounded text-xs">WebSockets (Soketi)</span>
              </div>
            </div>

            {/* Assessment Service */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Assessment Service</h4>
              </div>
              <p className="text-xs text-slate-600 mb-2">MCQs, Case studies, Role-specific evaluations, Skill gap</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
              </div>
              <div className="mt-2">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs (Scoring)</span>
              </div>
            </div>

            {/* QR Generator & Q-Score Service */}
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 bg-violet-600 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">QR Generator & Q-Score</h4>
              </div>
              <p className="text-xs text-slate-700 mb-2">Dynamic QR profile with comprehensive scoring</p>
              <div className="space-y-2">
                <div>
                  <span className="text-xs font-medium text-slate-600">Q-Score System:</span>
                  <div className="bg-white rounded p-2 border border-violet-200 mt-1">
                    <p className="text-xs text-slate-600">Weighted scoring updated via actions across all services</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">UMS</span>
                      <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded text-xs">Upskilling</span>
                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">Resume</span>
                      <span className="px-1.5 py-0.5 bg-rose-100 text-rose-700 rounded text-xs">Matchmaking</span>
                      <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded text-xs">Social</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Features:</span>
                  <ul className="text-xs text-slate-600 mt-1 space-y-0.5">
                    <li>• Public Profile QR</li>
                    <li>• Resume & Video QR</li>
                    <li>• GrowQR Score Display</li>
                    <li>• Analytics Tracking</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600">Data:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">Analytics</span>
                    <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs">Redis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Orchestration Service */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-fuchsia-500 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">AI Orchestration (Dadaji)</h4>
              </div>
              <p className="text-xs text-slate-600 mb-2">Personalized AI Mentor Chatbot</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">Vector DB</span>
                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
              </div>
              <div className="mt-2">
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">C-RAG Pipeline</span>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs ml-1">LLMs</span>
              </div>
            </div>

            {/* Archival/Purge Service */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Archival/Purge Service</h4>
              </div>
              <p className="text-xs text-slate-600 mb-2">Data retention and clean-up automation</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                <span className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded text-xs">S3/GCS</span>
              </div>
              <div className="mt-2">
                <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">Django CRONs</span>
              </div>
            </div>

            {/* Alerts Service */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <h4 className="font-semibold text-slate-900">Alerts Service</h4>
              </div>
              <p className="text-xs text-slate-600 mb-2">Email, SMS, External Alerts, Third-Party Integrations</p>
              <div className="mt-2">
                <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">n8n Automation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Module Mapping */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Module Technology Mapping</h2>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-3">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Sign-In/Sign-Up</span>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs font-medium">UMS</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Auth, Verification, Bulk Onboarding</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js/RN</span>
                <span className="px-1.5 py-0.5 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                <span className="px-1.5 py-0.5 bg-red-100 text-red-800 rounded text-xs">Redis</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Dashboard</span>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs font-medium">UMS</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Progress, AI Recommendations, Summary</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js/RN</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">AI Orchestration</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Roleplay</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Upskilling</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">AI immersive simulations, Feedback</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js/RN</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">C-RAG</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Practice</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Upskilling</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Virtual Interview, Scoring</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js/RN</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">C-RAG</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Resume & Cover Letter</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-medium">Resume Svc</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Templates, ATS Scoring, Export</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs (ATS)</span>
                <span className="px-1.5 py-0.5 bg-slate-200 text-slate-800 rounded text-xs">S3/GCS</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Matchmaking</span>
                <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded text-xs font-medium">Matchmaking</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Auto (Node.js+Puppeteer) / Manual</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js/RN</span>
                <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">ElasticSearch</span>
                <span className="px-1.5 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">n8n</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Social Branding</span>
                <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs font-medium">Social Svc</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Social posts, Hashtags, Scheduling</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span>
                <span className="px-1.5 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">n8n</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Inbox</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs font-medium">Notification</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Unified notifications, Real-time</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js/RN</span>
                <span className="px-1.5 py-0.5 bg-violet-100 text-violet-800 rounded text-xs">WebSockets</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Assessment</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs font-medium">Assessment</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">MCQs, Case studies, Skill gap</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">LLMs (Scoring)</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900">Chatbot (Dadaji)</span>
                <span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs font-medium">AI Orch</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">AI Mentor Chatbot</p>
              <div className="flex flex-wrap gap-1">
                <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js/RN</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">C-RAG</span>
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-800 rounded text-xs">Vector DB</span>
              </div>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-3 text-left font-semibold text-slate-900">Module</th>
                  <th className="px-3 py-3 text-left font-semibold text-slate-900">Core Functionality</th>
                  <th className="px-3 py-3 text-left font-semibold text-slate-900">Frontend</th>
                  <th className="px-3 py-3 text-left font-semibold text-slate-900">Backend (FastAPI)</th>
                  <th className="px-3 py-3 text-left font-semibold text-slate-900">Database</th>
                  <th className="px-3 py-3 text-left font-semibold text-slate-900">AI/Special</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Sign-In/Sign-Up</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">Auth, Verification, Bulk Onboarding</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js / RN</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs">UMS</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL, Redis</td>
                  <td className="px-3 py-2 text-xs text-slate-700">Third-Party Verification</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Dashboard</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">Progress, AI Recommendations, Summary</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js / RN</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs">UMS</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL, Redis, ES</td>
                  <td className="px-3 py-2 text-xs text-slate-700">AI Orchestration</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Roleplay</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">AI immersive simulations, Feedback</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js / RN</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">Upskilling</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL, S3/GCS</td>
                  <td className="px-3 py-2 text-xs text-slate-700">C-RAG, LLMs, Vector DB</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Practice</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">Virtual Interview, Scoring</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js / RN</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs">Upskilling</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL</td>
                  <td className="px-3 py-2 text-xs text-slate-700">C-RAG, LLMs</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Resume & Cover Letter</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">Templates, ATS Scoring, Cover Letters, Export</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Resume & Cover Letter</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL, S3/GCS</td>
                  <td className="px-3 py-2 text-xs text-slate-700">LLMs (ATS)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Matchmaking</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">Auto (Node.js+Puppeteer) / Manual (FastAPI)</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js / RN</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded text-xs">Matchmaking</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL, ElasticSearch</td>
                  <td className="px-3 py-2 text-xs text-slate-700">n8n, Bright Data, Puppeteer</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Social Branding</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">Social posts, Hashtags, Scheduling</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded text-xs">Social Branding</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL</td>
                  <td className="px-3 py-2 text-xs text-slate-700">n8n, Bright Data, LLMs</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Inbox</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">Unified notifications, Real-time</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js / RN</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">Notification Inbox</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL</td>
                  <td className="px-3 py-2 text-xs text-slate-700">WebSockets (Soketi)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Assessment</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">MCQs, Case studies, Skill gap</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">Assessment Service</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">PostgreSQL</td>
                  <td className="px-3 py-2 text-xs text-slate-700">LLMs (Scoring)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 font-medium text-slate-800">Chatbot (Dadaji)</td>
                  <td className="px-3 py-2 text-slate-700 text-xs">AI Mentor Chatbot</td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">Next.js / RN</span></td>
                  <td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">AI Orchestration</span></td>
                  <td className="px-3 py-2 text-xs text-slate-700">Vector DB, PostgreSQL</td>
                  <td className="px-3 py-2 text-xs text-slate-700">C-RAG, LLMs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Storage Architecture */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Polyglot Data Storage</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <h4 className="font-semibold text-cyan-800">PostgreSQL</h4>
              </div>
              <p className="text-sm text-slate-600 mb-2">Primary Relational Database</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Structured user data</li>
                <li>• Transactional records</li>
                <li>• Business entities</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h4 className="font-semibold text-red-800">Redis</h4>
              </div>
              <p className="text-sm text-slate-600 mb-2">Caching & Sessions</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Session management</li>
                <li>• Rate limiting</li>
                <li>• High-speed caching</li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <h4 className="font-semibold text-yellow-800">ElasticSearch</h4>
              </div>
              <p className="text-sm text-slate-600 mb-2">Search & Indexing</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• Full-text search</li>
                <li>• Job/Mentor matching</li>
                <li>• High-perf queries</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <h4 className="font-semibold text-purple-800">Vector DB</h4>
              </div>
              <p className="text-sm text-slate-600 mb-2">Semantic Search</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• pgvector / Pinecone / Chroma</li>
                <li>• Embeddings storage</li>
                <li>• AI similarity search</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Stack */}
        <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-purple-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Generative AI Stack</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-3">Core Components</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <div className="font-medium text-purple-700">C-RAG Pipeline</div>
                  <p className="text-xs text-slate-600">Contextual Retrieval-Augmented Generation for personalized responses</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <div className="font-medium text-purple-700">LLMs (Various)</div>
                  <p className="text-xs text-slate-600">Multiple language models for content generation, scoring, analysis</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <div className="font-medium text-purple-700">Embeddings Workflow</div>
                  <p className="text-xs text-slate-600">Text to vector conversion for semantic search capabilities</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-purple-200">
                  <div className="font-medium text-purple-700">MCP (Model Context Protocol)</div>
                  <p className="text-xs text-slate-600">Standardized context management across AI services</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-3">AI Use Cases</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-purple-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-slate-700">Personalized content generation</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-purple-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-slate-700">Roleplay simulation & feedback</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-purple-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-slate-700">Intelligent scoring & gap analysis</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-purple-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-slate-700">ATS resume optimization</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-purple-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-slate-700">AI Mentor Chatbot (Dadaji)</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-lg p-2 border border-purple-200">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-slate-700">Dashboard recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack Summary */}
        <div className="bg-linear-to-br from-indigo-50 to-blue-50 rounded-xl shadow-lg p-4 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">Technology Stack Summary</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">React Native</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded text-xs">Tailwind CSS</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">TanStack Query</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Backend</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">FastAPI</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Django Admin</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 rounded text-xs">GraphQL</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Database</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded text-xs">PostgreSQL</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Redis</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">ElasticSearch</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Vector DB</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Infrastructure</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Kong Gateway</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Docker</span>
                <span className="px-2 py-1 bg-sky-100 text-sky-800 rounded text-xs">AWS/GCP</span>
                <span className="px-2 py-1 bg-violet-100 text-violet-800 rounded text-xs">GitLab CI/CD</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">AI/ML</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">C-RAG Pipeline</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">LLMs</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Embeddings</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">MCP</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Real-time</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-violet-100 text-violet-800 rounded text-xs">WebSockets (Soketi)</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Redis Pub/Sub</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-2">Automation</h4>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">n8n</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Bright Data</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-800 rounded text-xs">S3/GCS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
