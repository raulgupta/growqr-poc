"use client";

export default function SupabasePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">
            Supabase Research & Feasibility
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Backend-as-a-Service Evaluation for GrowQR Platform
          </p>
        </div>

        {/* What is Supabase */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            What is Supabase?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
            Supabase is an open-source Backend-as-a-Service (BaaS) platform built on PostgreSQL that provides a complete backend solution for modern applications. It is often considered the open-source alternative to Firebase, but with the power and flexibility of PostgreSQL at its core.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-emerald-50 rounded-lg p-3 sm:p-4 border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Managed PostgreSQL</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Auto-generated REST & GraphQL APIs from your database schema</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Built-in Auth</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Email, OAuth, magic links, and phone authentication out of the box</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Real-time Subscriptions</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">WebSocket-based real-time data synchronization</p>
            </div>

            <div className="bg-orange-50 rounded-lg p-3 sm:p-4 border border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">File Storage</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">S3-compatible object storage with CDN support</p>
            </div>

            <div className="bg-rose-50 rounded-lg p-3 sm:p-4 border border-rose-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-rose-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Edge Functions</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Serverless functions deployed globally at the edge</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-3 sm:p-4 border border-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-500 rounded-full"></div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Vector Embeddings</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Native pgvector support for AI/ML workloads</p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200">
            <p className="text-xs sm:text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Industry Adoption:</span> Approximately 55% of Y Combinator companies have chosen Supabase. Over 1,000 YC companies have used it to build and scale products across AI, developer platforms, and B2B SaaS. The project has over 74,000 stars on GitHub, making it one of the most popular open-source projects in the PostgreSQL ecosystem.
            </p>
          </div>
        </div>

        {/* Stack Replacement Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            GrowQR Stack Replacement Analysis
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
            This analysis evaluates which components of the current GrowQR architecture could potentially be replaced or simplified by adopting Supabase as a backend solution.
          </p>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-3">
            <div className="text-sm font-semibold text-slate-900 mb-2">Components Supabase Can Replace</div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">PostgreSQL</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Direct Replace</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Supabase:</span> Supabase DB (Managed PostgreSQL)</p>
              <p className="text-xs text-slate-500">Full PostgreSQL compatibility with managed infrastructure</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Redis (Sessions)</span>
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Partial</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Supabase:</span> Supabase Auth + Row Level Security</p>
              <p className="text-xs text-slate-500">Handles auth sessions only, not general caching</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">S3/GCS Storage</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Direct Replace</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Supabase:</span> Supabase Storage</p>
              <p className="text-xs text-slate-500">S3-compatible with built-in CDN and signed URLs</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">WebSockets (Soketi)</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Direct Replace</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Supabase:</span> Supabase Realtime</p>
              <p className="text-xs text-slate-500">Built-in real-time subscriptions via WebSockets</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">UMS Auth System</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Simplify</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Supabase:</span> Supabase Auth (GoTrue)</p>
              <p className="text-xs text-slate-500">Pre-built auth with OAuth, email, phone verification</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">pgvector for AI</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Supported</span>
              </div>
              <p className="text-xs text-slate-600 mb-1"><span className="font-medium">Supabase:</span> Supabase Vector</p>
              <p className="text-xs text-slate-500">Native pgvector extension for embeddings</p>
            </div>

            <div className="text-sm font-semibold text-slate-900 mb-2 mt-6">Components That Cannot Be Replaced</div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">ElasticSearch</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs font-medium">Still Needed</span>
              </div>
              <p className="text-xs text-slate-500">No equivalent full-text search at scale in Supabase</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Redis (Caching)</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs font-medium">Still Needed</span>
              </div>
              <p className="text-xs text-slate-500">No caching layer for rate-limiting and high-speed cache</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Kong API Gateway</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs font-medium">Still Needed</span>
              </div>
              <p className="text-xs text-slate-500">No API gateway features in Supabase</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">n8n Automation</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs font-medium">Still Needed</span>
              </div>
              <p className="text-xs text-slate-500">Different purpose - workflow automation platform</p>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold text-emerald-700 mb-3">Components Supabase Can Replace</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Current Stack</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Supabase Equivalent</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Feasibility</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">PostgreSQL</td>
                    <td className="px-4 py-3 text-slate-700">Supabase DB</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Direct Replacement</span></td>
                    <td className="px-4 py-3 text-slate-600">Full PostgreSQL compatibility with managed infrastructure</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">Redis (Sessions)</td>
                    <td className="px-4 py-3 text-slate-700">Supabase Auth + RLS</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Partial</span></td>
                    <td className="px-4 py-3 text-slate-600">Handles auth sessions only, not general caching</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">S3/GCS (File Storage)</td>
                    <td className="px-4 py-3 text-slate-700">Supabase Storage</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Direct Replacement</span></td>
                    <td className="px-4 py-3 text-slate-600">S3-compatible with built-in CDN and signed URLs</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">WebSockets (Soketi)</td>
                    <td className="px-4 py-3 text-slate-700">Supabase Realtime</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Direct Replacement</span></td>
                    <td className="px-4 py-3 text-slate-600">Built-in real-time subscriptions via WebSockets</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">UMS Auth System</td>
                    <td className="px-4 py-3 text-slate-700">Supabase Auth (GoTrue)</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Significant Simplification</span></td>
                    <td className="px-4 py-3 text-slate-600">Pre-built auth with OAuth, email, magic links, phone</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">pgvector for AI</td>
                    <td className="px-4 py-3 text-slate-700">Supabase Vector</td>
                    <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Natively Supported</span></td>
                    <td className="px-4 py-3 text-slate-600">Native pgvector extension for AI embeddings</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-red-700 mb-3">Components That Cannot Be Replaced</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-red-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Component</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900">Reason Still Needed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">ElasticSearch</td>
                    <td className="px-4 py-3 text-slate-600">Supabase has no equivalent full-text search at scale. Required for Matchmaking job search and Dashboard search.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">Redis (Caching/Rate-Limiting)</td>
                    <td className="px-4 py-3 text-slate-600">No caching layer in Supabase. Still needed for high-speed caching, rate limiting, and pub/sub beyond auth.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">Kong API Gateway</td>
                    <td className="px-4 py-3 text-slate-600">Supabase has no API gateway features. Kong is still required for JWT validation, rate-limiting, CORS, and traffic management.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">n8n Automation</td>
                    <td className="px-4 py-3 text-slate-600">Different purpose entirely. n8n provides workflow automation, webhooks, and external API connectors.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Development Time Impact */}
        <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-blue-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Development Time Impact
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
            One of the primary benefits of adopting Supabase is the significant reduction in development time for common backend features. The following analysis estimates time savings across key areas.
          </p>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-3">
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Authentication System</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~80% Saved</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500">Without Supabase:</span>
                  <p className="font-medium text-slate-700">2-3 weeks</p>
                </div>
                <div>
                  <span className="text-slate-500">With Supabase:</span>
                  <p className="font-medium text-emerald-700">2-3 days</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Custom JWT, OAuth integration, email verification, password reset flows</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Real-time Notifications</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~70% Saved</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500">Without Supabase:</span>
                  <p className="font-medium text-slate-700">1-2 weeks</p>
                </div>
                <div>
                  <span className="text-slate-500">With Supabase:</span>
                  <p className="font-medium text-emerald-700">2-3 days</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Soketi setup, WebSocket management, pub/sub logic, connection handling</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">File Storage API</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~75% Saved</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500">Without Supabase:</span>
                  <p className="font-medium text-slate-700">1 week</p>
                </div>
                <div>
                  <span className="text-slate-500">With Supabase:</span>
                  <p className="font-medium text-emerald-700">1-2 days</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">S3 integration, signed URL generation, access policies, CDN setup</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Database Setup</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~90% Saved</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500">Without Supabase:</span>
                  <p className="font-medium text-slate-700">1 week</p>
                </div>
                <div>
                  <span className="text-slate-500">With Supabase:</span>
                  <p className="font-medium text-emerald-700">Hours</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Server provisioning, migrations, backups, monitoring, security hardening</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Auto-generated APIs</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Significant</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-500">Without Supabase:</span>
                  <p className="font-medium text-slate-700">Manual FastAPI routes</p>
                </div>
                <div>
                  <span className="text-slate-500">With Supabase:</span>
                  <p className="font-medium text-emerald-700">Instant REST/GraphQL</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Automatic CRUD endpoints generated from database schema</p>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-white/50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Without Supabase</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">With Supabase</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Time Saved</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Authentication System</td>
                  <td className="px-4 py-3 text-slate-700">2-3 weeks</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">2-3 days</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~80%</span></td>
                  <td className="px-4 py-3 text-slate-600">Custom JWT, OAuth, email verification, password reset</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Real-time Notifications</td>
                  <td className="px-4 py-3 text-slate-700">1-2 weeks</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">2-3 days</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~70%</span></td>
                  <td className="px-4 py-3 text-slate-600">Soketi setup, WebSocket management, pub/sub logic</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">File Storage API</td>
                  <td className="px-4 py-3 text-slate-700">1 week</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">1-2 days</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~75%</span></td>
                  <td className="px-4 py-3 text-slate-600">S3 integration, signed URLs, access policies</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Database Setup</td>
                  <td className="px-4 py-3 text-slate-700">1 week</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">Hours</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">~90%</span></td>
                  <td className="px-4 py-3 text-slate-600">Provisioning, migrations, backups, monitoring</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Auto-generated APIs</td>
                  <td className="px-4 py-3 text-slate-700">Manual FastAPI routes</td>
                  <td className="px-4 py-3 text-emerald-700 font-medium">Instant REST/GraphQL</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Significant</span></td>
                  <td className="px-4 py-3 text-slate-600">Automatic CRUD endpoints from schema</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FastAPI Integration */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            FastAPI Integration
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
            Supabase provides an official Python client library (<code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm">supabase-py</code>) that integrates seamlessly with FastAPI, allowing the GrowQR backend to leverage Supabase services while maintaining the existing microservices architecture.
          </p>

          <div className="bg-slate-900 rounded-lg p-3 sm:p-4 overflow-x-auto">
            <pre className="text-xs sm:text-sm text-slate-100 whitespace-pre-wrap sm:whitespace-pre">
              <code>{`from fastapi import FastAPI, Depends, HTTPException
from supabase import create_client, Client
import os

app = FastAPI()

# Initialize Supabase client
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Dependency for Supabase client
def get_supabase() -> Client:
    return supabase

# Example: Fetch user by ID
@app.get("/users/{user_id}")
async def get_user(user_id: str, db: Client = Depends(get_supabase)):
    response = db.table("users").select("*").eq("id", user_id).execute()
    if not response.data:
        raise HTTPException(status_code=404, detail="User not found")
    return response.data[0]

# Example: Create new user
@app.post("/users")
async def create_user(user_data: dict, db: Client = Depends(get_supabase)):
    response = db.table("users").insert(user_data).execute()
    return response.data

# Example: Real-time subscription (for notifications)
@app.websocket("/ws/notifications/{user_id}")
async def notification_stream(websocket, user_id: str):
    await websocket.accept()
    # Supabase Realtime handles the subscription
    channel = supabase.channel(f"notifications:{user_id}")
    # ... handle real-time updates`}</code>
            </pre>
          </div>

          <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Best Practices</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                <li>• Use environment variables for credentials</li>
                <li>• Create FastAPI dependencies for the Supabase client</li>
                <li>• Implement proper error handling</li>
                <li>• Use Pydantic models for request/response validation</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 sm:p-4 border border-amber-200">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Considerations</h4>
              <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                <li>• Supabase is optimized for frontend-first development</li>
                <li>• Some features work better with direct client access</li>
                <li>• Backend can use service role key for admin operations</li>
                <li>• Row Level Security (RLS) policies are enforced</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Microservices Architecture Considerations */}
        <div className="bg-linear-to-br from-violet-50 to-purple-50 rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-violet-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Microservices Architecture Considerations
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
            GrowQR follows a microservices architecture with 11+ independent FastAPI services. Integrating Supabase into this architecture requires careful consideration of data ownership, service boundaries, and communication patterns.
          </p>

          {/* The Challenge */}
          <div className="bg-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-violet-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-sm">!</span>
              The Fundamental Tension
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-amber-50 rounded-lg p-3 sm:p-4 border border-amber-200">
                <h4 className="font-medium text-amber-800 text-sm sm:text-base mb-2">Microservices Philosophy</h4>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                  <li>• Each service owns its own database</li>
                  <li>• Services are independently deployable</li>
                  <li>• Loose coupling between services</li>
                  <li>• Data isolation per bounded context</li>
                  <li>• No shared database anti-pattern</li>
                </ul>
              </div>
              <div className="bg-violet-50 rounded-lg p-3 sm:p-4 border border-violet-200">
                <h4 className="font-medium text-violet-800 text-sm sm:text-base mb-2">Supabase Model</h4>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                  <li>• Single PostgreSQL database per project</li>
                  <li>• Centralized auth and storage</li>
                  <li>• Shared schema across services</li>
                  <li>• Designed for monolithic backends</li>
                  <li>• Frontend-first architecture</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-slate-50 rounded-lg p-3 border border-slate-200">
              <p className="text-xs sm:text-sm text-slate-700">
                <span className="font-semibold text-slate-800">Key Insight:</span> Supabase&apos;s single-database model appears to conflict with microservices principles. However, with proper schema design and access patterns, a hybrid approach is achievable.
              </p>
            </div>
          </div>

          {/* Integration Patterns */}
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Integration Patterns for GrowQR Microservices</h3>
          <div className="space-y-3 sm:space-y-4 mb-6">
            {/* Pattern 1 */}
            <div className="bg-white rounded-lg p-4 border border-violet-200">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Schema-per-Service Pattern</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    Use PostgreSQL schemas to create logical separation within a single Supabase database. Each microservice gets its own schema with isolated tables.
                  </p>
                  <div className="bg-slate-900 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-xs text-slate-100 whitespace-pre-wrap sm:whitespace-pre">
                      <code>{`-- Schema per microservice
CREATE SCHEMA ums;          -- User Management Service
CREATE SCHEMA upskilling;   -- Upskilling Service
CREATE SCHEMA resume;       -- Resume & Cover Letter
CREATE SCHEMA matchmaking;  -- Matchmaking Service
CREATE SCHEMA notifications; -- Notification Service

-- Each service only accesses its schema
GRANT USAGE ON SCHEMA ums TO ums_service_role;
GRANT ALL ON ALL TABLES IN SCHEMA ums TO ums_service_role;`}</code>
                    </pre>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Logical Isolation</span>
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">Single Database</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Shared Infrastructure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern 2 */}
            <div className="bg-white rounded-lg p-4 border border-violet-200">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Supabase as Shared Services Layer</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    Use Supabase exclusively for cross-cutting concerns (Auth, Storage, Realtime) while each microservice maintains its own database for domain data.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                      <h5 className="font-medium text-emerald-800 text-xs sm:text-sm mb-2">Supabase Handles</h5>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Authentication (GoTrue)</li>
                        <li>• File Storage (S3-compatible)</li>
                        <li>• Real-time subscriptions</li>
                        <li>• User profiles & sessions</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                      <h5 className="font-medium text-slate-800 text-xs sm:text-sm mb-2">Services Own</h5>
                      <ul className="text-xs text-slate-600 space-y-1">
                        <li>• Domain-specific data</li>
                        <li>• Business logic tables</li>
                        <li>• Service-specific schemas</li>
                        <li>• Transactional data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pattern 3 */}
            <div className="bg-white rounded-lg p-4 border border-violet-200">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Multi-Project Approach (True Isolation)</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    Create separate Supabase projects for service groups that require complete isolation. Higher cost but true microservices separation.
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="bg-indigo-100 rounded p-2 text-center">
                        <div className="font-medium text-indigo-800">Project: Core</div>
                        <div className="text-slate-600 mt-1">UMS, Auth</div>
                      </div>
                      <div className="bg-emerald-100 rounded p-2 text-center">
                        <div className="font-medium text-emerald-800">Project: Learning</div>
                        <div className="text-slate-600 mt-1">Upskilling, Assessment</div>
                      </div>
                      <div className="bg-blue-100 rounded p-2 text-center">
                        <div className="font-medium text-blue-800">Project: Career</div>
                        <div className="text-slate-600 mt-1">Resume, Matchmaking</div>
                      </div>
                      <div className="bg-purple-100 rounded p-2 text-center">
                        <div className="font-medium text-purple-800">Project: AI</div>
                        <div className="text-slate-600 mt-1">Dadaji, Vectors</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">True Isolation</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Higher Cost ($25/project)</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs">Complex Auth Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service-by-Service Analysis */}
          <h3 className="text-lg font-semibold text-slate-900 mb-3">GrowQR Service-by-Service Supabase Fit</h3>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-3 mb-6">
            <div className="bg-white rounded-lg p-3 border border-emerald-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">UMS (User Management)</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Excellent Fit</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Auth, profiles, sessions - core Supabase strengths</p>
              <p className="text-xs text-slate-500">Recommendation: Migrate fully to Supabase Auth</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-emerald-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Notification Service</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Excellent Fit</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Real-time subscriptions replace Soketi entirely</p>
              <p className="text-xs text-slate-500">Recommendation: Use Supabase Realtime</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-emerald-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Resume & Cover Letter</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Good Fit</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Storage for PDFs, documents with signed URLs</p>
              <p className="text-xs text-slate-500">Recommendation: Use Supabase Storage</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-emerald-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">AI Orchestration (Dadaji)</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Good Fit</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">pgvector for embeddings and semantic search</p>
              <p className="text-xs text-slate-500">Recommendation: Use Supabase Vector</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-yellow-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Upskilling Service</span>
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Partial Fit</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Storage for media, but complex domain logic</p>
              <p className="text-xs text-slate-500">Recommendation: Storage only, keep domain DB separate</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Matchmaking Service</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs font-medium">Poor Fit</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Requires ElasticSearch for complex job matching</p>
              <p className="text-xs text-slate-500">Recommendation: Keep separate with ElasticSearch</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">QR & Q-Score Service</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs font-medium">Poor Fit</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">High-frequency score updates need Redis caching</p>
              <p className="text-xs text-slate-500">Recommendation: Keep with Redis for performance</p>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-white/50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Service</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Supabase Fit</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Use Case</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-violet-100">
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">UMS (User Management)</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Excellent</span></td>
                  <td className="px-4 py-3 text-slate-600">Auth, profiles, sessions - core Supabase strengths</td>
                  <td className="px-4 py-3 text-slate-700">Migrate fully to Supabase Auth</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Notification Service</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Excellent</span></td>
                  <td className="px-4 py-3 text-slate-600">Real-time subscriptions replace Soketi</td>
                  <td className="px-4 py-3 text-slate-700">Use Supabase Realtime</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Resume & Cover Letter</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Good</span></td>
                  <td className="px-4 py-3 text-slate-600">Storage for PDFs, documents, signed URLs</td>
                  <td className="px-4 py-3 text-slate-700">Use Supabase Storage</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">AI Orchestration (Dadaji)</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Good</span></td>
                  <td className="px-4 py-3 text-slate-600">pgvector for embeddings, semantic search</td>
                  <td className="px-4 py-3 text-slate-700">Use Supabase Vector</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Upskilling Service</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Partial</span></td>
                  <td className="px-4 py-3 text-slate-600">Storage for media, but complex domain logic</td>
                  <td className="px-4 py-3 text-slate-700">Storage only, keep domain DB separate</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Social Branding</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Partial</span></td>
                  <td className="px-4 py-3 text-slate-600">Simple CRUD but relies on n8n for scheduling</td>
                  <td className="px-4 py-3 text-slate-700">Can use Supabase DB with n8n integration</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Matchmaking Service</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Poor</span></td>
                  <td className="px-4 py-3 text-slate-600">Requires ElasticSearch for complex job matching</td>
                  <td className="px-4 py-3 text-slate-700">Keep separate with ElasticSearch</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">QR & Q-Score Service</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Poor</span></td>
                  <td className="px-4 py-3 text-slate-600">High-frequency score updates need Redis</td>
                  <td className="px-4 py-3 text-slate-700">Keep with Redis for performance</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Inter-Service Communication */}
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Inter-Service Communication Patterns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 border border-violet-200">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-3">With Supabase</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">Database Triggers</p>
                    <p className="text-xs text-slate-500">Use PostgreSQL triggers to notify other services via pg_notify</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">Realtime Broadcasts</p>
                    <p className="text-xs text-slate-500">Services subscribe to Supabase channels for events</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">Edge Functions</p>
                    <p className="text-xs text-slate-500">Serverless functions as lightweight service endpoints</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">Webhooks</p>
                    <p className="text-xs text-slate-500">Database webhooks trigger FastAPI endpoints</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-violet-200">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-3">Keep Existing</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">Kong API Gateway</p>
                    <p className="text-xs text-slate-500">Continue using for routing, rate-limiting, JWT validation</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">Redis Pub/Sub</p>
                    <p className="text-xs text-slate-500">For high-frequency events that need sub-ms latency</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">Direct HTTP/gRPC</p>
                    <p className="text-xs text-slate-500">Service-to-service calls via internal network</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5"></span>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800">n8n Workflows</p>
                    <p className="text-xs text-slate-500">For async, long-running cross-service orchestration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Architecture */}
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Recommended Microservices + Supabase Architecture</h3>
          <div className="bg-white rounded-lg p-4 sm:p-6 border border-violet-200">

            {/* Mobile Visual Diagram */}
            <div className="md:hidden space-y-3 mb-4">
              {/* Kong API Gateway */}
              <div className="bg-emerald-100 border-2 border-emerald-500 rounded-lg p-3 text-center">
                <div className="font-bold text-emerald-800 text-sm">KONG API GATEWAY</div>
                <div className="text-xs text-slate-600 mt-1">JWT Validation, Rate Limiting, CORS</div>
              </div>

              <div className="flex justify-center">
                <div className="text-slate-400 text-xl">↓</div>
              </div>

              {/* Three columns of services */}
              <div className="grid grid-cols-1 gap-3">
                {/* Supabase Shared */}
                <div className="bg-violet-100 border-2 border-violet-500 rounded-lg p-3">
                  <div className="font-bold text-violet-800 text-sm mb-2">SUPABASE (Shared)</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Auth</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Storage</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Realtime</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Vectors</span>
                  </div>
                </div>

                {/* FastAPI with Supabase DB */}
                <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3">
                  <div className="font-bold text-blue-800 text-sm mb-1">FASTAPI MICROSERVICES</div>
                  <div className="text-xs text-slate-600 mb-2">(Using Supabase DB)</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">UMS*</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Notifications</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Resume</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Dadaji AI</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Social</span>
                  </div>
                </div>

                {/* FastAPI with Own DB */}
                <div className="bg-slate-100 border-2 border-slate-400 rounded-lg p-3">
                  <div className="font-bold text-slate-800 text-sm mb-1">FASTAPI MICROSERVICES</div>
                  <div className="text-xs text-slate-600 mb-2">(Own DB - ElasticSearch, Redis)</div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">Matchmaking</span>
                    <span className="px-2 py-0.5 bg-white rounded text-xs text-slate-700">QR & Q-Score</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="text-slate-400 text-xl">↓</div>
              </div>

              {/* Supabase DB */}
              <div className="bg-cyan-100 border-2 border-cyan-500 rounded-lg p-3 text-center">
                <div className="font-bold text-cyan-800 text-sm">SUPABASE DB</div>
                <div className="text-xs text-slate-600 mt-1">Schemas per service</div>
              </div>

              <div className="flex justify-center">
                <div className="text-slate-400 text-xl">↓</div>
              </div>

              {/* n8n */}
              <div className="bg-orange-100 border-2 border-orange-500 rounded-lg p-3 text-center">
                <div className="font-bold text-orange-800 text-sm">n8n AUTOMATION</div>
                <div className="text-xs text-slate-600 mt-1">Workflows</div>
              </div>

              <div className="mt-3 bg-slate-50 rounded p-2 border border-slate-200">
                <p className="text-xs text-slate-500">* UMS uses Supabase Auth as primary, syncs to Supabase DB</p>
              </div>
            </div>

            {/* Desktop ASCII Diagram */}
            <div className="hidden md:block bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
              <pre className="text-sm text-slate-700 whitespace-pre overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────────┐
│                           KONG API GATEWAY                               │
│                    (JWT Validation, Rate Limiting, CORS)                 │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────┐         ┌─────────────────┐         ┌─────────────────┐
│  SUPABASE     │         │  FASTAPI        │         │  FASTAPI        │
│  (Shared)     │         │  MICROSERVICES  │         │  MICROSERVICES  │
│               │         │  (Supabase DB)  │         │  (Own DB)       │
│ • Auth        │◄───────►│                 │         │                 │
│ • Storage     │         │ • UMS*          │         │ • Matchmaking   │
│ • Realtime    │         │ • Notifications │         │ • QR & Q-Score  │
│ • Vectors     │         │ • Resume Svc    │         │                 │
│               │         │ • Dadaji AI     │         │ (ElasticSearch) │
│               │         │ • Social Brand  │         │ (Redis)         │
└───────────────┘         └─────────────────┘         └─────────────────┘
        │                           │                           │
        │                           ▼                           │
        │                 ┌─────────────────┐                   │
        │                 │   SUPABASE DB   │                   │
        │                 │  (Schemas per   │                   │
        │                 │   service)      │                   │
        │                 └─────────────────┘                   │
        │                                                       │
        └───────────────────────────┬───────────────────────────┘
                                    │
                          ┌─────────────────┐
                          │  n8n AUTOMATION │
                          │  (Workflows)    │
                          └─────────────────┘

* UMS uses Supabase Auth as primary, syncs to Supabase DB`}</pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <h5 className="font-medium text-emerald-800 text-xs sm:text-sm mb-1">Supabase-Native Services</h5>
                <p className="text-xs text-slate-600">UMS, Notifications, Resume, Dadaji, Social</p>
              </div>
              <div className="bg-slate-100 rounded-lg p-3 border border-slate-300">
                <h5 className="font-medium text-slate-800 text-xs sm:text-sm mb-1">Self-Managed Services</h5>
                <p className="text-xs text-slate-600">Matchmaking, QR/Q-Score, Assessment</p>
              </div>
              <div className="bg-violet-50 rounded-lg p-3 border border-violet-200">
                <h5 className="font-medium text-violet-800 text-xs sm:text-sm mb-1">Shared Infrastructure</h5>
                <p className="text-xs text-slate-600">Kong, Redis, ElasticSearch, n8n</p>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="font-semibold text-amber-800 text-sm sm:text-base mb-2">Key Takeaways for Microservices</h4>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">1.</span>
                <span><strong>Don&apos;t force all services into Supabase.</strong> Services with complex search (Matchmaking) or high-frequency writes (Q-Score) should remain independent.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">2.</span>
                <span><strong>Use PostgreSQL schemas for logical separation.</strong> This maintains service boundaries while sharing infrastructure.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">3.</span>
                <span><strong>Supabase excels as a shared services layer.</strong> Auth, Storage, and Realtime are cross-cutting concerns that benefit from centralization.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">4.</span>
                <span><strong>Keep Kong as your API Gateway.</strong> Supabase doesn&apos;t replace service mesh or API gateway functionality.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 mt-0.5">5. </span>
                <span><strong>Plan for data consistency.</strong> With services split across Supabase and self-managed DBs, ensure eventual consistency patterns are in place.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pricing Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Pricing Analysis
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-6">
            Supabase offers tiered pricing plans designed to scale with your application. Understanding the cost implications is crucial for long-term planning.
          </p>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-3">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-slate-900">Free Tier</span>
                <span className="text-xl font-bold text-emerald-600">$0</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">2 free projects included</p>
              <p className="text-xs text-slate-500">Ideal for POCs, hobby projects, and internal tools with light traffic. No setup required.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-slate-900">Pro Plan</span>
                <span className="text-xl font-bold text-blue-600">$25<span className="text-sm font-normal">/mo</span></span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Per project + usage fees</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• $10/month compute credits included</li>
                <li>• 100 GB storage included</li>
                <li>• 250 GB egress free, then $0.09/GB</li>
                <li>• Best for production apps and startups</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-slate-900">Team Plan</span>
                <span className="text-xl font-bold text-purple-600">$599<span className="text-sm font-normal">/mo</span></span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Custom limits + compute costs</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• SOC2 compliance</li>
                <li>• Better access controls</li>
                <li>• Stronger SLAs</li>
                <li>• Built for startups and teams</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-slate-900">Enterprise</span>
                <span className="text-xl font-bold text-orange-600">Custom</span>
              </div>
              <p className="text-xs text-slate-600 mb-2">Contracted quotas and SLAs</p>
              <ul className="text-xs text-slate-500 space-y-1">
                <li>• HIPAA compliance (add-on)</li>
                <li>• Dedicated support channels</li>
                <li>• Custom security reviews</li>
                <li>• Advanced compliance features</li>
              </ul>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Plan</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Cost</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Best For</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Free</td>
                  <td className="px-4 py-3 text-emerald-600 font-bold">$0 (2 projects)</td>
                  <td className="px-4 py-3 text-slate-700">POCs, hobby projects, internal tools</td>
                  <td className="px-4 py-3 text-slate-600">No setup, stays free forever</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Pro</td>
                  <td className="px-4 py-3 text-blue-600 font-bold">$25/mo + usage</td>
                  <td className="px-4 py-3 text-slate-700">Production apps, startups</td>
                  <td className="px-4 py-3 text-slate-600">$10 compute credits, 100GB storage, 250GB egress</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Team</td>
                  <td className="px-4 py-3 text-purple-600 font-bold">$599/mo</td>
                  <td className="px-4 py-3 text-slate-700">Startups needing compliance</td>
                  <td className="px-4 py-3 text-slate-600">SOC2, better access controls, stronger SLAs</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-800">Enterprise</td>
                  <td className="px-4 py-3 text-orange-600 font-bold">Custom</td>
                  <td className="px-4 py-3 text-slate-700">Large orgs, HIPAA needs</td>
                  <td className="px-4 py-3 text-slate-600">HIPAA add-on, dedicated support, custom security</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cost Comparison */}
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Cost Comparison for GrowQR Scale</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-slate-50 rounded-lg p-3 sm:p-4 border border-slate-200">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Self-hosted PostgreSQL</h4>
              <p className="text-lg sm:text-xl font-bold text-slate-700 mb-2">$50-200<span className="text-sm font-normal">/month</span></p>
              <p className="text-xs sm:text-sm text-slate-500">VPS costs only. Add DevOps time: 1-2 FTE = $120K-$240K/year operational burden.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Supabase Pro</h4>
              <p className="text-lg sm:text-xl font-bold text-blue-700 mb-2">$25-500<span className="text-sm font-normal">/month</span></p>
              <p className="text-xs sm:text-sm text-slate-500">Depends on MAUs, storage, and egress. Includes managed infrastructure.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border border-purple-200">
              <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Supabase Team</h4>
              <p className="text-lg sm:text-xl font-bold text-purple-700 mb-2">$599+<span className="text-sm font-normal">/month</span></p>
              <p className="text-xs sm:text-sm text-slate-500">If compliance (SOC2) is required. Additional compute costs may apply.</p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 bg-amber-50 rounded-lg p-3 sm:p-4 border border-amber-200">
            <p className="text-xs sm:text-sm text-slate-700">
              <span className="font-semibold text-amber-800">Scaling Consideration:</span> Supabase architecture is optimized for small to mid-sized applications. While enterprise plans exist, the platform does not offer horizontal scalability for PostgreSQL (no native sharding or clustering) and can become cost-prohibitive with 10M+ MAUs due to flat per-user pricing. If approaching hyperscale, architect with portability in mind.
            </p>
          </div>
        </div>

        {/* Pros and Cons */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Pros & Cons for GrowQR
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm">+</span>
                Advantages
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Rapid MVP Development</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Auth, real-time, and storage work out of the box, significantly accelerating initial development.</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">PostgreSQL Compatible</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Same database engine means easy migration path if you outgrow Supabase.</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Native pgvector Support</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Built-in vector embeddings for AI Orchestration (Dadaji) chatbot and semantic search.</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Row-Level Security</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Built-in RLS reduces backend authorization code and improves security.</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Open Source</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Can self-host if costs grow or if more control is needed.</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Industry Proven</h4>
                  <p className="text-xs sm:text-sm text-slate-600">55% of YC companies use it - battle-tested at scale.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm">-</span>
                Limitations
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">No ElasticSearch Replacement</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Still need ElasticSearch for Matchmaking search and complex full-text queries.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Limited PostgreSQL Tuning</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Cannot optimize database parameters like self-hosted PostgreSQL allows.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Extension Restrictions</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Not all PostgreSQL extensions are available (e.g., TimescaleDB, some PostGIS features).</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Scaling Concerns</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Not ideal for 10M+ MAUs - no native sharding or clustering support.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Vendor Dependency</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Though open-source mitigates this, some features are cloud-only.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <h4 className="font-medium text-slate-900 text-sm sm:text-base">Frontend-First Design</h4>
                  <p className="text-xs sm:text-sm text-slate-600">Supabase is optimized for frontend access - FastAPI is secondary.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            Recommendation for GrowQR
          </h2>

          {/* Mobile Card Layout */}
          <div className="md:hidden space-y-3 mb-6">
            <div className="bg-white rounded-lg p-3 border border-indigo-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">POC/MVP Phase</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Recommended</span>
              </div>
              <p className="text-xs text-slate-600">Use Supabase - accelerates development significantly</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-indigo-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Production (&lt;100K users)</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Cost-Effective</span>
              </div>
              <p className="text-xs text-slate-600">Supabase Pro is cost-effective at this scale</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-indigo-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Production (&gt;1M users)</span>
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Hybrid</span>
              </div>
              <p className="text-xs text-slate-600">Consider hybrid: Supabase for auth/storage, self-hosted PG for core data</p>
            </div>
            <div className="bg-white rounded-lg p-3 border border-indigo-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 text-sm">Enterprise/HIPAA</span>
                <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded text-xs font-medium">Evaluate</span>
              </div>
              <p className="text-xs text-slate-600">Supabase Enterprise or consider self-hosting</p>
            </div>
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-white/50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Scenario</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Recommendation</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-indigo-100">
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">POC/MVP Phase</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Use Supabase</span></td>
                  <td className="px-4 py-3 text-slate-600">Accelerates development significantly - get to market faster</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Production (&lt;100K users)</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Supabase Pro</span></td>
                  <td className="px-4 py-3 text-slate-600">Cost-effective with managed infrastructure benefits</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Production (&gt;1M users)</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Hybrid Approach</span></td>
                  <td className="px-4 py-3 text-slate-600">Supabase for auth/storage, self-hosted PostgreSQL for core data</td>
                </tr>
                <tr className="hover:bg-white/50">
                  <td className="px-4 py-3 font-medium text-slate-800">Enterprise/HIPAA Required</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">Evaluate Options</span></td>
                  <td className="px-4 py-3 text-slate-600">Supabase Enterprise or self-host for full control</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Suggested Hybrid Architecture */}
          <h3 className="text-lg font-semibold text-slate-900 mb-3">Suggested Hybrid Architecture for GrowQR</h3>
          <div className="bg-white rounded-lg p-3 sm:p-4 border border-indigo-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-emerald-700 text-sm sm:text-base mb-2">Supabase (Managed)</h4>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Authentication (UMS)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    File Storage (Resume, Upskilling)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Real-time (Notifications)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    Vector DB (AI/Dadaji)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    User data (PostgreSQL)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 text-sm sm:text-base mb-2">Self-Managed (Keep)</h4>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                    ElasticSearch (Search/Matching)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                    Redis (Caching/Rate-Limiting)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                    Kong API Gateway
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                    n8n Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                    Heavy transactional DBs (if needed)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-4 sm:p-8 border border-emerald-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
            Bottom Line
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">1</span>
              <p className="text-sm sm:text-base text-slate-700 pt-0.5 sm:pt-1">
                <span className="font-semibold">Yes, Supabase can expedite development</span> - especially for UMS Authentication (~80% faster), Notification real-time features (~70% faster), File storage for Resume/Upskilling services (~75% faster), and AI Vector search for Dadaji chatbot.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">2</span>
              <p className="text-sm sm:text-base text-slate-700 pt-0.5 sm:pt-1">
                <span className="font-semibold">However, it is not a complete replacement.</span> You will still need ElasticSearch for search, Redis for caching and rate-limiting, and Kong for API gateway functionality.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">3</span>
              <p className="text-sm sm:text-base text-slate-700 pt-0.5 sm:pt-1">
                <span className="font-semibold">Consider Supabase as an accelerator for specific services</span>, not a wholesale replacement of your entire backend infrastructure.
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 bg-white rounded-lg p-3 sm:p-4 border border-emerald-200">
            <p className="text-xs sm:text-sm text-slate-600">
              <span className="font-semibold text-emerald-800">Research Sources:</span> Supabase Official Documentation, Y Combinator adoption data, PostgreSQL ecosystem comparisons, pricing analysis from industry benchmarks (2024-2025).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
