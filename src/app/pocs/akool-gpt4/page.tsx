"use client";

export default function AkoolGPT4Prototype() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Cloud Based
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Akool Avatar + GPT-4 Interview Prototype
          </h1>
          <p className="text-lg text-slate-600">
            Create an avatar-based interview system combining Akool&apos;s avatar generation with GPT-4 for intelligence
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-4 mb-8 border-b border-slate-200">
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            Akool API (Avatar + Voice)
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">
            OpenAI GPT-4 API
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">
            Agora RTC
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">
            Next.js frontend
          </button>
          <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">
            ~2-3 days
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Objective */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Objective
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Test the feasibility of avatar-driven interviews and measure candidate engagement.
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Animated avatar with facial expressions</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Synchronized lip-movement with audio</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Dynamic question adaptation</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Video recording of sessions</span>
                </li>
              </ul>
            </div>

            {/* Success Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                <span>✓</span> Success Metrics
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-slate-400">•</span>
                  <span>Avatar engagement score &gt; 7/10</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-slate-400">•</span>
                  <span>Candidate engagement score &gt; 7/10</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-slate-400">•</span>
                  <span>System handles 5+ concurrent interviews</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-slate-400">•</span>
                  <span>Latency &lt; 5 seconds</span>
                </li>
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Deliverables
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500">▸</span>
                  <span>Avatar interviewer with lip-sync</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500">▸</span>
                  <span>Complete 10-minute interview demo</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500">▸</span>
                  <span>Basic interview analytics dashboard</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500">▸</span>
                  <span>Technical feasibility report</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500">▸</span>
                  <span>Cost-per-interview assessment</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Tech Stack - Visual Architecture */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                Tech Stack
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                View following infrastructure
              </p>

              {/* Architecture Diagram */}
              <div className="space-y-4">
                {/* Akool Streaming Avatar API - All-in-One */}
                <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-5 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-blue-900 text-lg">Akool Streaming Avatar</span>
                    <div className="flex gap-2">
                      <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded font-semibold">
                        Avatar
                      </span>
                      <span className="text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded font-semibold">
                        Voice
                      </span>
                      <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded font-semibold">
                        Lip-sync
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-blue-800 mb-2">
                    All-in-one solution: Avatar generation + Voice synthesis + Perfect lip-sync
                  </p>
                  <div className="bg-white/60 rounded p-2 text-xs text-slate-700">
                    <strong>Built-in features:</strong> Voice List API, Speech-to-Text, Turn Detection (VAD)
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="text-slate-400 text-2xl">↓</div>
                </div>

                {/* GPT-4 Intelligence */}
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-green-900">OpenAI GPT-4</span>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                      Intelligence
                    </span>
                  </div>
                  <p className="text-sm text-green-700">
                    Interview question generation and adaptive conversation
                  </p>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="text-slate-400 text-2xl">↓</div>
                </div>

                {/* Agora RTC */}
                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-purple-900">Agora RTC</span>
                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                      Streaming
                    </span>
                  </div>
                  <p className="text-sm text-purple-700">
                    Real-time video/audio streaming infrastructure
                  </p>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center">
                  <div className="text-slate-400 text-2xl">↓</div>
                </div>

                {/* Next.js Frontend */}
                <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-orange-900">
                      Next.js Interview Platform
                    </span>
                    <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded">
                      Frontend
                    </span>
                  </div>
                  <p className="text-sm text-orange-700">
                    Interactive UI, recording, and analytics dashboard
                  </p>
                </div>
              </div>
            </div>

            {/* Risks & Challenges */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
                <span>⚠</span> Risks &amp; Challenges
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 mt-1">•</span>
                  <div>
                    <div className="font-medium">Avatar realism</div>
                    <p className="text-sm text-slate-600">
                      May not be engaging enough for candidates
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 mt-1">•</span>
                  <div>
                    <div className="font-medium">API orchestration complexity</div>
                    <p className="text-sm text-slate-600">
                      Coordinating Akool streaming + GPT-4 responses
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 mt-1">•</span>
                  <div>
                    <div className="font-medium">High bandwidth requirements</div>
                    <p className="text-sm text-slate-600">
                      Real-time video streaming with low latency
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-red-500 mt-1">•</span>
                  <div>
                    <div className="font-medium">Cost per interview</div>
                    <p className="text-sm text-slate-600">
                      Akool + GPT-4 combined costs at scale
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Key Benefits - New Section */}
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200">
              <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center gap-2">
                <span>✨</span> Key Benefits
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <div className="font-medium">Simplified Architecture</div>
                    <p className="text-sm text-slate-600">
                      No need for ElevenLabs - Akool handles both avatar and voice
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <div className="font-medium">Perfect Lip-Sync</div>
                    <p className="text-sm text-slate-600">
                      Voice and avatar from same system ensures perfect synchronization
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <div className="font-medium">Lower Latency</div>
                    <p className="text-sm text-slate-600">
                      Single API integration reduces coordination overhead
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-green-500 mt-1">✓</span>
                  <div>
                    <div className="font-medium">Built-in STT & VAD</div>
                    <p className="text-sm text-slate-600">
                      Speech-to-text and voice activity detection included
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documentation Link */}
        <div className="mt-8 bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Implementation Documentation
          </h2>
          <p className="text-slate-700 mb-4">
            For detailed implementation guide including system architecture, database schema,
            API integration examples, and 20-day development timeline, please refer to:
          </p>
          <div className="bg-white rounded-lg p-4 border border-indigo-200">
            <code className="text-sm text-indigo-700">
              /docs/akool-gpt4-poc.md
            </code>
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="/docs/akool-gpt4-poc.md"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              View Documentation
            </a>
            <button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium">
              Start Implementation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
