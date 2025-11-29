"use client";

export default function Architectures() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Generative AI Architectures for Interview Systems
          </h1>
          <p className="text-lg text-slate-600">
            Comprehensive comparison of architecture models and technology stacks
          </p>
        </div>

        {/* Architecture Models */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Architecture Models Comparison
          </h2>

          {/* Cloud-Based Architecture */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              🌩️ 1. Cloud-Based Integrated Architecture
            </h3>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200">
              <code className="text-sm text-slate-700 break-words">
                User → API Gateway → Orchestration Layer → [OpenAI/Claude/Anthropic] → [ElevenLabs] → [Synthesia/Akool] → User
              </code>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Components:</h4>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Orchestration:</strong> LangChain or LlamaIndex</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>LLM:</strong> GPT-4/Claude 3</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Voice:</strong> ElevenLabs</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Avatar:</strong> Synthesia or Akool</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <span>✅</span> Pros
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Minimal infrastructure management</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Access to state-of-the-art models</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Rapid deployment</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Automatic scaling</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <span>❌</span> Cons
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Higher operational costs</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Potential latency issues</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Vendor lock-in risks</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Data privacy considerations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hybrid Architecture */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              🔄 2. Hybrid Architecture (Cloud + Local)
            </h3>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200">
              <code className="text-sm text-slate-700 break-words block">
                User → API Gateway → Orchestration Layer →<br/>
                &nbsp;&nbsp;├─ [Local Llama 3/Mistral] for core logic<br/>
                &nbsp;&nbsp;├─ [Cloud APIs] for specialized tasks<br/>
                &nbsp;&nbsp;└─ [Local XTTS/Piper] + [Cloud Akool] → User
              </code>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Components:</h4>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Orchestration:</strong> DSPy or Haystack</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Local LLM:</strong> Llama 3 70B or Mistral Large</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Voice:</strong> Local XTTS-v2 + ElevenLabs for premium voices</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Avatar:</strong> Akool API</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <span>✅</span> Pros
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Reduced operational costs</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Better data privacy</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Lower latency for core functions</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>More control over model behavior</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <span>❌</span> Cons
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Higher infrastructure requirements</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>More complex deployment</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Potential quality tradeoffs</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Development complexity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fully Self-Hosted Architecture */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              🏠 3. Fully Self-Hosted Architecture
            </h3>

            <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-200">
              <code className="text-sm text-slate-700 break-words block">
                User → Load Balancer → Application Server →<br/>
                &nbsp;&nbsp;├─ [Local LLM Cluster]<br/>
                &nbsp;&nbsp;├─ [Local TTS Engine]<br/>
                &nbsp;&nbsp;└─ [Local Avatar Generator] → User
              </code>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Components:</h4>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Orchestration:</strong> LangChain or custom solution</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>LLM:</strong> Llama 3, Mistral, or Falcon</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Voice:</strong> Coqui XTTS or Bark</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span><strong>Avatar:</strong> ComfyUI/Stable Diffusion for images + custom animation</span>
                </li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-600 mb-3 flex items-center gap-2">
                  <span>✅</span> Pros
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Complete data sovereignty</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>No usage-based costs</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>No external dependencies</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Full customization potential</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                  <span>❌</span> Cons
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Highest infrastructure costs</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Significant technical expertise required</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Quality may lag behind commercial options</span>
                  </li>
                  <li className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Ongoing maintenance burden</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* LLM Orchestration Solutions */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              📊 LLM Orchestration Solutions Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Tool</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Strengths</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Weaknesses</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">LangChain</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Comprehensive, mature ecosystem, many integrations</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Can be complex, some overhead</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Teams familiar with Python, complex workflows</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">LlamaIndex</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Data-focused, strong RAG capabilities</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Less general-purpose</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Systems requiring knowledge retrieval</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">DSPy</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Programmatic prompt engineering, optimization</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Newer, smaller community</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Teams focused on prompt optimization</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Haystack</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Modular, production-ready</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Steeper learning curve</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Enterprise deployments</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Semantic Kernel</td>
                  <td className="px-6 py-4 text-sm text-slate-700">.NET integration, Microsoft ecosystem</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Limited community vs others</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Microsoft-centric stacks</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Custom Solution</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Tailored to exact needs</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Development time, maintenance</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Unique requirements, specialized systems</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* LLM Options Comparison */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              🧠 LLM Options Comparison
            </h2>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Cloud LLMs</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Strengths</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Weaknesses</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Pricing</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">GPT-4o</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Top performance, multimodal, fast</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Expensive, black-box</td>
                    <td className="px-6 py-4 text-sm text-slate-700">$10/M input, $30/M output tokens</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Premium experience, complex reasoning</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Claude 3 Opus</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Excellent reasoning, long context</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Expensive, less developer tools</td>
                    <td className="px-6 py-4 text-sm text-slate-700">$15/M input, $75/M output tokens</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Nuanced interview feedback, complex scenarios</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Claude 3 Sonnet</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Good balance of performance/cost</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Less powerful than Opus</td>
                    <td className="px-6 py-4 text-sm text-slate-700">$3/M input, $15/M output tokens</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Mid-tier solution with good capabilities</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">GPT-3.5 Turbo</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Cost-effective, fast</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Less capable than newer models</td>
                    <td className="px-6 py-4 text-sm text-slate-700">$0.5/M input, $1.5/M output tokens</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Budget-conscious implementations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Local LLMs Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
              🚀 Local LLMs for Scalable Interview Systems
            </h2>
            <p className="text-slate-600 mt-2">Open-source options for self-hosted deployments</p>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Open-Source LLM Comparison for Local Deployment</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Parameters</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Performance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Hardware</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Strengths</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Weaknesses</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Llama 3 8B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">8B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3090</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Fast, efficient, balanced</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Less capable than larger models</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Core interview logic, basic Q&A</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Llama 3 70B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">70B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Excellent</td>
                    <td className="px-6 py-4 text-sm text-slate-700">2-4x RTX 4090 or A100</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Near commercial quality</td>
                    <td className="px-6 py-4 text-sm text-slate-700">High resource requirements</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Complete interview system</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Mistral 7B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">7B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3080</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Efficient, strong reasoning</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Limited context window</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Question generation</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Mistral Large</td>
                    <td className="px-6 py-4 text-sm text-slate-700">~45B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Very Good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">2x RTX 4090</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Strong instruction following</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Resource intensive</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Comprehensive interviews</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Phi-3 Mini</td>
                    <td className="px-6 py-4 text-sm text-slate-700">3.8B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Surprisingly good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3060</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Extremely efficient</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Limited capabilities</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Simple interviews, filtering</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Phi-3 Medium</td>
                    <td className="px-6 py-4 text-sm text-slate-700">14B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Very Good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">1x RTX 4070</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Excellent performance/size ratio</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Limited context</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Mid-complexity interviews</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">SOLAR 10.7B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">10.7B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3090</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Strong reasoning</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Needs fine-tuning for interviews</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Customized interview scenarios</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Gemma 7B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">7B</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                    <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3080</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Google quality, efficient</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Newer, less tested</td>
                    <td className="px-6 py-4 text-sm text-slate-700">General interview logic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quantization and Deployment */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Quantization Options */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                📉 Quantization Options for Efficiency
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Method</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Memory Savings</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Impact</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Recommendation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">GGUF (4-bit)</td>
                    <td className="px-6 py-4 text-sm text-slate-700">~75%</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Moderate</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Limited hardware</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">GGUF (8-bit)</td>
                    <td className="px-6 py-4 text-sm text-slate-700">~50%</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Minimal</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Best balance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">AWQ</td>
                    <td className="px-6 py-4 text-sm text-slate-700">~75%</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Low</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Larger models</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">GPTQ</td>
                    <td className="px-6 py-4 text-sm text-slate-700">~70%</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Low-moderate</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Alternative to AWQ</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">bitsandbytes</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Variable</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Minimal (8-bit)</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Training/fine-tuning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Deployment Frameworks */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                🛠️ Deployment Frameworks
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Framework</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Strengths</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">llama.cpp</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Optimized, low resource</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Edge devices</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">vLLM</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Fast, PagedAttention</td>
                    <td className="px-6 py-4 text-sm text-slate-700">High-throughput</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">TGI</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Production-ready</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Enterprise</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">LMStudio</td>
                    <td className="px-6 py-4 text-sm text-slate-700">User-friendly, GUI</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Testing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">LocalAI</td>
                    <td className="px-6 py-4 text-sm text-slate-700">OpenAI compatible</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Drop-in replacement</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">Ollama</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Easy setup</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Quick deployment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Fine-Tuning and Local Voice/Avatar Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Fine-Tuning Approaches */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                🎯 Fine-Tuning Approaches
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">Method</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">Complexity</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">Data Needed</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">When to Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">LoRA/QLoRA</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Medium</td>
                    <td className="px-4 py-3 text-xs text-slate-700">1,000+ examples</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Domain-specific</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">Full Fine-tuning</td>
                    <td className="px-4 py-3 text-xs text-slate-700">High</td>
                    <td className="px-4 py-3 text-xs text-slate-700">10,000+ examples</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Enterprise with resources</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">PEFT</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Medium</td>
                    <td className="px-4 py-3 text-xs text-slate-700">2,000+ examples</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Limited compute</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">Prompt Eng.</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Low</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Dozens</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Rapid deployment</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">RAG</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Medium</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Knowledge base</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Industry-specific</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">DPO/RLHF</td>
                    <td className="px-4 py-3 text-xs text-slate-700">High</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Preference pairs</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Refining style</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Local Voice Generation */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-6 bg-slate-50 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                🎙️ Local Voice Generation
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">Model</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">Quality</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">Hardware</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-slate-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">XTTS-v2</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Very Good</td>
                    <td className="px-4 py-3 text-xs text-slate-700">1x RTX 3080+</td>
                    <td className="px-4 py-3 text-xs text-slate-700">High-quality responses</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">Bark</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Good</td>
                    <td className="px-4 py-3 text-xs text-slate-700">1x RTX 3070+</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Pre-recorded content</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">Piper TTS</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Good</td>
                    <td className="px-4 py-3 text-xs text-slate-700">CPU sufficient</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Real-time responses</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">Coqui TTS</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Good</td>
                    <td className="px-4 py-3 text-xs text-slate-700">1x RTX 3060+</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Custom voices</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">Tortoise TTS</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Excellent</td>
                    <td className="px-4 py-3 text-xs text-slate-700">1x RTX 3090+</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Pre-generated content</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-xs font-medium text-slate-900">MMS TTS</td>
                    <td className="px-4 py-3 text-xs text-slate-700">Good</td>
                    <td className="px-4 py-3 text-xs text-slate-700">1x RTX 3070+</td>
                    <td className="px-4 py-3 text-xs text-slate-700">International interviews</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Local Avatar Generation */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
              👤 Local Avatar Generation Options
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Technology</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Quality</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Hardware</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Strengths</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Weaknesses</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Stable Diffusion</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                  <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3080+</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Customizable, local control</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Static images</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Avatar creation</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">AnimatedDiff</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                  <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3090+</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Animated expressions</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Limited control</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Simple movements</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">ComfyUI</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Very Good</td>
                  <td className="px-6 py-4 text-sm text-slate-700">1x RTX 4070+</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Workflow customization</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Complex setup</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Custom pipelines</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">EMO</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                  <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3090+</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Emotional expressions</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Limited research model</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Facial expressions</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Wav2Lip</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Moderate</td>
                  <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3070+</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Lip sync from audio</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Quality issues</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Basic lip movement</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">SadTalker</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Good</td>
                  <td className="px-6 py-4 text-sm text-slate-700">1x RTX 3080+</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Head movement, expressions</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Setup complexity</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Talking head videos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Hardware Configurations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
            💻 Hardware Configurations for Different Scales
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Startup Tier */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Startup Tier</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-slate-700"><strong>CPU:</strong> Ryzen 9 7950X / i9-13900K</li>
                <li className="text-sm text-slate-700"><strong>GPU:</strong> 2x RTX 4090 (24GB each)</li>
                <li className="text-sm text-slate-700"><strong>RAM:</strong> 128GB DDR5</li>
                <li className="text-sm text-slate-700"><strong>Storage:</strong> 4TB NVMe SSD</li>
              </ul>
              <div className="border-t border-green-200 pt-4">
                <p className="text-sm font-semibold text-green-700">Cost: $6,000-8,000</p>
                <p className="text-sm text-slate-600">Capacity: 10-20 concurrent interviews</p>
              </div>
            </div>

            {/* Mid-Scale Tier */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Mid-Scale Tier</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-slate-700"><strong>CPU:</strong> Dual AMD EPYC / Xeon</li>
                <li className="text-sm text-slate-700"><strong>GPU:</strong> 4x RTX 4090 or 2x A100</li>
                <li className="text-sm text-slate-700"><strong>RAM:</strong> 256GB DDR5</li>
                <li className="text-sm text-slate-700"><strong>Storage:</strong> 8TB NVMe RAID</li>
              </ul>
              <div className="border-t border-blue-200 pt-4">
                <p className="text-sm font-semibold text-blue-700">Cost: $20,000-30,000</p>
                <p className="text-sm text-slate-600">Capacity: 40-60 concurrent interviews</p>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Enterprise Tier</h3>
              <ul className="space-y-2 mb-4">
                <li className="text-sm text-slate-700"><strong>Setup:</strong> Multiple servers with load balancing</li>
                <li className="text-sm text-slate-700"><strong>GPU:</strong> 8x A100 (80GB) or H100</li>
                <li className="text-sm text-slate-700"><strong>RAM:</strong> 512GB+ per server</li>
                <li className="text-sm text-slate-700"><strong>Storage:</strong> Distributed storage</li>
              </ul>
              <div className="border-t border-purple-200 pt-4">
                <p className="text-sm font-semibold text-purple-700">Cost: $100,000+</p>
                <p className="text-sm text-slate-600">Capacity: 200+ concurrent interviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integrated Local Architecture Example */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-lg p-8 mb-8 border border-teal-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            🏗️ Integrated Local Architecture Example
          </h2>
          <div className="bg-white rounded-lg p-6 border border-teal-200">
            <code className="text-sm text-slate-700 break-words block">
              User Request → FastAPI Server →<br/>
              &nbsp;&nbsp;├─ Llama 3 70B (8-bit) on vLLM [Interview Logic]<br/>
              &nbsp;&nbsp;├─ Phi-3 Medium on Ollama [Response Analysis]<br/>
              &nbsp;&nbsp;├─ XTTS-v2 [Voice Generation]<br/>
              &nbsp;&nbsp;└─ SadTalker + Stable Diffusion [Avatar Animation]
            </code>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Smart Workload Distribution (Hybrid)</h3>
            <ul className="space-y-2">
              <li className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-teal-500 mt-1">▸</span>
                <span><strong>Local Models:</strong> Handle core interview logic, common questions</span>
              </li>
              <li className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-teal-500 mt-1">▸</span>
                <span><strong>Cloud APIs:</strong> Manage peak loads, specialized tasks</span>
              </li>
              <li className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-teal-500 mt-1">▸</span>
                <span><strong>Caching:</strong> Store common responses for faster delivery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            💡 Key Takeaways
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <span className="text-slate-700 pt-0.5">
                <strong>Start with Cloud-Based</strong> if you need rapid deployment and have budget for operational costs
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <span className="text-slate-700 pt-0.5">
                <strong>Move to Hybrid</strong> as you scale to optimize costs while maintaining quality
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <span className="text-slate-700 pt-0.5">
                <strong>Consider Self-Hosted</strong> only if data sovereignty is critical and you have the technical expertise
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <span className="text-slate-700 pt-0.5">
                <strong>Choose orchestration tools</strong> based on your team's expertise and specific requirements
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
