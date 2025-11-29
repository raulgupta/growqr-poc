"use client";

export default function AgenticFrameworksPage() {
  const frameworks = [
    {
      name: "LangGraph",
      latency: "Graph access O(1) tail reads; overall p95 ~1.5s for memory-integrated chains; streaming cuts perceived latency by 50%+ in multi-step flows.",
      memory: "Optimized slots reduce baseline by 20-30%; ~137 KiB per agent in benchmarks; scales to 10k+ tokens without bloat via checkpoints.",
      tooling: "Mature hybrid: LangGraph Studio (visual IDE for graphs/debugging) + Open Agent Platform (drag-drop UI for RAG/tools); production-ready since mid-2025.",
      category: "Production-Ready",
      language: "Python/JavaScript",
      bestFor: "Complex multi-agent workflows with state management"
    },
    {
      name: "CrewAI",
      latency: "Sequential flows: 5-15s end-to-end for 3-agent crews; abstraction overhead adds 2-5s vs. raw LLM calls; background jobs mitigate for scale.",
      memory: "~37.5 KiB baseline per agent (10x lighter than peers in some tests); long-term via SQLite/Chroma, but can bloat to 50k+ tokens in unpruned convos.",
      tooling: "Strong no-code pivot: Crew Studio (chat-to-crew builder, templates/export); integrates with low-code like KNiME; enterprise AMP for visual lifecycle mgmt.",
      category: "Production-Ready",
      language: "Python",
      bestFor: "Multi-agent collaboration with role-based task assignment"
    },
    {
      name: "Agno",
      latency: "Instantiation <5μs (10k× faster than LangGraph); runtime ~100-200ms for multimodal tasks; tool parallelism shaves 30-50% off chains.",
      memory: "Featherlight: 3.75 KiB per agent (50× less than LangGraph); in-memory for sessions, scales to fleets without GPU sweat.",
      tooling: "Emerging code-first: Agent Studio (forthcoming drag-drop for workflows); CLI-heavy now, with Python simplicity as the 'no-boilerplate' hook.",
      category: "Emerging",
      language: "Python",
      bestFor: "Lightweight, fast agents with minimal overhead"
    },
    {
      name: "OpenAI Agents SDK",
      latency: "p95 0.9-1.5s for memory retrieval in sessions; Responses API batches tools to cut 20-40% latency; full-context bypasses add ~1s for long histories.",
      memory: "Token-efficient: 7-14k tokens/convo via trimming/summarization; zero extra overhead in SDK primitives, but API calls accumulate.",
      tooling: "Beta-mature no-code: Agent Builder (visual canvas for logic/guardrails, templates); ChatKit for embeddable UIs; eval tools for iteration.",
      category: "Beta/Mature",
      language: "Python/TypeScript",
      bestFor: "OpenAI-native integrations with function calling"
    },
    {
      name: "Google ADK",
      latency: "Metrics-tracked: <1s for session state loads; Vertex orchestration adds 200-500ms for multi-agent; built-in tracing flags latency spikes early.",
      memory: "InMemoryService: ~50 KiB baseline; long-term via SQL/Vector scales to enterprise (no unbounded growth); A2A protocol keeps it lean.",
      tooling: "Code-centric maturity: Developer UI/CLI for local viz/debug; Vertex Agent Builder (visual flows in GCP); no full drag-drop yet, but modular extensibility shines.",
      category: "Production-Ready",
      language: "Python/Go",
      bestFor: "Google Cloud-native enterprise deployments"
    },
    {
      name: "AutoGen",
      latency: "Conversational agents: 2-8s per turn (depends on model); group chat orchestration adds ~1-3s overhead; async patterns help with parallelization.",
      memory: "Moderate: ~25-50 KiB per agent baseline; conversation history can grow unbounded without manual pruning; supports external memory stores.",
      tooling: "Research-first: AutoGen Studio (visual interface for agent composition); strong academic backing; maturing toward production use.",
      category: "Research/Beta",
      language: "Python",
      bestFor: "Research and experimentation with conversational AI agents"
    },
    {
      name: "LangChain",
      latency: "Chain execution: 1-5s depending on complexity; LCEL (LangChain Expression Language) optimizes by ~20-30%; streaming reduces perceived latency.",
      memory: "Memory modules: 10-100 KiB per session; vector store integrations scale well; conversation buffers need manual management.",
      tooling: "Mature ecosystem: LangSmith (debugging/monitoring), LangServe (deployment); extensive integrations with 100+ services.",
      category: "Production-Ready",
      language: "Python/JavaScript",
      bestFor: "General-purpose LLM application development with rich integrations"
    },
    {
      name: "Semantic Kernel",
      latency: "Plugin execution: 0.5-2s; planners add 1-3s overhead; native async/await patterns optimize performance.",
      memory: "Lightweight: ~5-15 KiB per skill; memory stores integrate with Azure services; efficient token management.",
      tooling: "Enterprise-grade: Visual Studio integration; Azure AI Studio support; strong .NET ecosystem.",
      category: "Production-Ready",
      language: "C#/.NET, Python",
      bestFor: "Microsoft ecosystem and enterprise .NET applications"
    },
    {
      name: "Haystack",
      latency: "Pipeline execution: 1-4s for RAG workflows; component caching reduces repeated queries by 40-60%; batch processing optimized.",
      memory: "Document-centric: memory scales with corpus size; efficient indexing via FAISS/Elasticsearch; ~20-40 KiB pipeline overhead.",
      tooling: "Production-focused: REST API deployment; monitoring dashboards; extensive documentation and examples.",
      category: "Production-Ready",
      language: "Python",
      bestFor: "RAG and document search applications"
    },
    {
      name: "Phidata",
      latency: "Assistant execution: 1-3s for tool calls; streaming responses; optimized for production workloads.",
      memory: "Efficient: ~10-20 KiB per assistant; built-in memory management; PostgreSQL/Redis storage options.",
      tooling: "Developer-friendly: CLI tools; built-in observability; pre-built templates for common patterns.",
      category: "Emerging",
      language: "Python",
      bestFor: "Production-ready assistants with built-in tools and memory"
    }
  ];

  const featureComparison = [
    {
      feature: "State Management",
      frameworks: {
        "LangGraph": "Advanced graph-based state with persistence",
        "CrewAI": "Process-based state within crews",
        "Agno": "Lightweight in-memory state",
        "OpenAI SDK": "Session-based with API state",
        "Google ADK": "Enterprise-grade state with A2A protocol"
      }
    },
    {
      feature: "Multi-Agent Support",
      frameworks: {
        "LangGraph": "Graph-based coordination",
        "CrewAI": "Role-based crew collaboration",
        "Agno": "Lightweight multi-agent",
        "OpenAI SDK": "Function-based coordination",
        "Google ADK": "Vertex-orchestrated agents"
      }
    },
    {
      feature: "Deployment Options",
      frameworks: {
        "LangGraph": "Self-hosted, LangSmith Cloud",
        "CrewAI": "Self-hosted, Docker",
        "Agno": "Lightweight self-hosted",
        "OpenAI SDK": "OpenAI API, Azure OpenAI",
        "Google ADK": "Google Cloud, Vertex AI"
      }
    },
    {
      feature: "Learning Curve",
      frameworks: {
        "LangGraph": "Moderate - Graph concepts required",
        "CrewAI": "Low - Intuitive role-based model",
        "Agno": "Low - Simple Python API",
        "OpenAI SDK": "Low - Familiar OpenAI patterns",
        "Google ADK": "Moderate - GCP knowledge helpful"
      }
    }
  ];

  const useCases = [
    {
      useCase: "Customer Support Automation",
      recommendedFrameworks: ["CrewAI", "OpenAI Agents SDK", "Phidata"],
      rationale: "Need role-based agents (triage, specialist, escalation) with conversation memory and tool integration"
    },
    {
      useCase: "Complex RAG Pipelines",
      recommendedFrameworks: ["LangGraph", "Haystack", "LangChain"],
      rationale: "Require sophisticated document processing, multi-step retrieval, and state management"
    },
    {
      useCase: "High-Performance Real-time",
      recommendedFrameworks: ["Agno", "OpenAI Agents SDK"],
      rationale: "Need minimal latency, lightweight memory footprint, and fast response times"
    },
    {
      useCase: "Enterprise GCP Deployments",
      recommendedFrameworks: ["Google ADK", "LangChain"],
      rationale: "Benefit from native Vertex AI integration, enterprise security, and managed infrastructure"
    },
    {
      useCase: "Microsoft/.NET Ecosystem",
      recommendedFrameworks: ["Semantic Kernel"],
      rationale: "Native .NET integration, Azure services, and Visual Studio tooling"
    },
    {
      useCase: "Research & Experimentation",
      recommendedFrameworks: ["AutoGen", "LangGraph"],
      rationale: "Flexible architecture for testing novel agent patterns and conversational AI"
    },
    {
      useCase: "Non-Technical Team Automation",
      recommendedFrameworks: ["Make", "Zapier", "n8n"],
      rationale: "Visual builders enable non-coders to create workflows; extensive integrations; fast time-to-market"
    },
    {
      useCase: "Conversational Voice Assistants",
      recommendedFrameworks: ["Voiceflow", "n8n"],
      rationale: "Purpose-built dialogue design tools, voice optimization, and UX-focused testing capabilities"
    },
    {
      useCase: "Rapid Prototyping & MVPs",
      recommendedFrameworks: ["Flowise", "Stack AI", "Relevance AI"],
      rationale: "Quick iteration cycles, visual debugging, template marketplaces accelerate proof-of-concept development"
    }
  ];

  const noCodePlatforms = [
    {
      name: "n8n",
      latency: "Workflow engine hits 12k records/min in CSV-AI pipelines; multi-step agents add 1-3s overhead from API calls, but self-hosting shaves 20-40% via local LLMs.",
      memory: "Built-in types like Postgres Chat or MongoDB Vector for persistent context; ~50-100 KiB per session in cloud, scales without bloat but manual pruning needed for long histories.",
      tooling: "Fully mature hybrid: Drag-drop canvas with AI Agent Studio (evals, logs, templates); unlimited workflows since Aug '25, blending visual with JS snippets for pros.",
      category: "Production-Ready",
      pricing: "Free self-hosted, Cloud from $20/mo",
      bestFor: "Self-hosted automation with AI agents and custom integrations"
    },
    {
      name: "Make",
      latency: "End-to-end scenarios ~0.5-2s for AI Agents in beta tests; real-time adaptation adds <500ms via internal Maia engine, outperforming external LLM hops by 30%.",
      memory: "Session-based RAM or persistent via Redis/Postgres; token-efficient at 5-10k/convo, with auto-summarization to curb growth—lean for enterprise without the sprawl.",
      tooling: "Production-ready since Apr '25 launch: Natural language config + visual orchestration (30k+ actions); Maia beta for prompt-to-agent; seamless for non-coders scaling to teams.",
      category: "Production-Ready",
      pricing: "Free tier, Pro from $9/mo",
      bestFor: "Visual workflow automation with AI agents for non-technical teams"
    },
    {
      name: "Zapier",
      latency: "Zaps execute in 1-5s; AI actions add 2-4s overhead; recently added AI Agent workflows in beta with streaming for perceived speed improvements.",
      memory: "Action-based memory: 10-50 KiB per workflow; persistent storage via tables/databases; limited conversation memory in current beta.",
      tooling: "Mature platform with growing AI capabilities: Central AI hub, AI Agent builder (beta), ChatGPT plugin; 7000+ app integrations; enterprise-grade reliability.",
      category: "Production-Ready",
      pricing: "Free tier, Paid from $19.99/mo",
      bestFor: "Enterprise-grade workflow automation with extensive app ecosystem"
    },
    {
      name: "Voiceflow",
      latency: "Conversation flows: 0.5-2s response time; Knowledge Base queries add 1-3s; optimized for voice with minimal latency in production.",
      memory: "Context-aware: session variables + long-term user profiles; ~20-50 KiB per session; vector DB integration for knowledge retrieval.",
      tooling: "Production-mature for conversational AI: Visual canvas for dialogue design, testing/debugging suite, analytics dashboard; strong focus on voice + chat UX.",
      category: "Production-Ready",
      pricing: "Free tier, Pro from $50/mo",
      bestFor: "Conversational AI and voice assistants with visual dialogue design"
    },
    {
      name: "Relevance AI",
      latency: "Agent execution: 1-4s for multi-step workflows; chain optimization reduces by 20-30%; real-time streaming for user feedback.",
      memory: "Knowledge-centric: vector DB integration; ~30-80 KiB per agent; scales with document corpus; efficient chunking strategies.",
      tooling: "Agent-first platform: Visual agent builder, tool marketplace, deployment templates; analytics and monitoring; API-first for developers.",
      category: "Production-Ready",
      pricing: "Free tier, Growth from $99/mo",
      bestFor: "AI agent marketplace and rapid agent deployment for teams"
    },
    {
      name: "Flowise",
      latency: "LangChain-based: 1-5s for chain execution; drag-drop adds minimal overhead; streaming reduces perceived latency by 40%+.",
      memory: "LangChain memory modules: 10-100 KiB per session; supports multiple memory types; manual buffer management needed.",
      tooling: "Open-source visual builder: Drag-drop LangChain flows, marketplace of templates, self-hostable; growing community contributions.",
      category: "Emerging",
      pricing: "Free open-source, Cloud from $29/mo",
      bestFor: "Open-source LangChain workflow builder for developers"
    },
    {
      name: "Dust",
      latency: "Assistants respond in 1-3s; data source queries add 1-2s; optimized for enterprise knowledge retrieval with caching.",
      memory: "Document-centric: memory scales with connected data sources; ~40-100 KiB baseline; efficient indexing for large corpora.",
      tooling: "Enterprise-focused: Assistant builder with data connectors, permission controls, usage analytics; Slack/Teams native; strong governance.",
      category: "Production-Ready",
      pricing: "Pro from $29/user/mo",
      bestFor: "Enterprise AI assistants with data governance and security"
    },
    {
      name: "Stack AI",
      latency: "Workflow execution: 0.8-3s; parallel node execution optimizes complex flows; real-time collaboration features.",
      memory: "Flow-based: 15-60 KiB per workflow; supports vector stores; efficient context management for multi-step processes.",
      tooling: "Modern visual interface: Node-based builder, pre-built templates, version control, team collaboration; API deployment with monitoring.",
      category: "Production-Ready",
      pricing: "Free tier, Team from $99/mo",
      bestFor: "Team collaboration on AI workflows with version control"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Production-Ready":
        return "bg-green-100 text-green-800 border-green-200";
      case "Beta/Mature":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Emerging":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "Research/Beta":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            AI Agentic Frameworks Comparison
          </h1>
          <p className="text-lg text-slate-600">
            Code-based frameworks for building autonomous AI agents - Performance, Memory, and Tooling Analysis
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Framework Overview
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Agentic frameworks enable developers to build sophisticated AI systems that can reason, plan, use tools,
            and collaborate autonomously. This analysis compares leading code-first frameworks across three critical dimensions:
            latency benchmarks, memory usage, and no-code tooling maturity.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <p className="text-sm text-indigo-900">
                <strong>⚡ Performance:</strong> Latency ranges from sub-millisecond instantiation (Agno) to
                5-15s for complex multi-agent workflows (CrewAI), with streaming cutting perceived delays by 50%+.
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-sm text-emerald-900">
                <strong>💾 Memory Efficiency:</strong> Memory footprints vary from 3.75 KiB (Agno) to 137 KiB (LangGraph)
                per agent, with smart checkpoint systems preventing token bloat at scale.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-sm text-purple-900">
                <strong>🛠️ Developer Experience:</strong> Tooling ranges from code-centric (Agno, Google ADK) to
                mature visual builders (LangGraph Studio, Crew Studio) with enterprise lifecycle management.
              </p>
            </div>
          </div>
        </div>

        {/* Main Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-linear-to-r from-indigo-50 to-purple-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              🤖 Framework Performance Comparison
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Detailed benchmarks across latency, memory usage, and tooling maturity
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 w-32">
                    Framework
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Latency Benchmarks
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Memory Usage
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    No-Code Tooling Maturity
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 w-32">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {frameworks.map((framework, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-slate-900 mb-1">
                        {framework.name}
                      </div>
                      <div className="text-xs text-slate-600">
                        {framework.language}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {framework.latency}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {framework.memory}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {framework.tooling}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(framework.category)}`}>
                        {framework.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* No-Code Platforms Comparison */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-linear-to-r from-violet-50 to-fuchsia-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              🎨 No-Code/Low-Code Platform Comparison
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Visual workflow builders for non-technical teams and rapid prototyping
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 w-32">
                    Platform
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Latency Benchmarks
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Memory Usage
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    No-Code Tooling Maturity
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 w-32">
                    Pricing
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {noCodePlatforms.map((platform, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-slate-900 mb-1">
                        {platform.name}
                      </div>
                      <div className="text-xs text-slate-600">
                        {platform.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {platform.latency}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {platform.memory}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {platform.tooling}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-semibold text-violet-700">
                        {platform.pricing}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-violet-50 border-t border-violet-200">
            <div className="space-y-2">
              <p className="text-sm text-violet-900">
                <strong>💡 Key Insight:</strong> No-code platforms excel at rapid prototyping and empowering non-technical teams.
                n8n and Make lead in flexibility and AI agent capabilities, while Zapier dominates in app integrations (7000+).
                For conversational AI, Voiceflow is purpose-built. For enterprise security and governance, consider Dust or Relevance AI.
              </p>
              <p className="text-sm text-violet-900">
                <strong>🚀 When to Choose No-Code:</strong> Select no-code platforms when speed-to-market is critical, your team lacks
                coding expertise, or you need to validate ideas quickly. They typically offer 60-80% of code-based framework capabilities
                with 5-10x faster development time for standard use cases.
              </p>
            </div>
          </div>
        </div>

        {/* No-Code Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {noCodePlatforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:border-violet-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">{platform.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(platform.category)}`}>
                  {platform.category}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-xs font-semibold text-violet-700 bg-violet-50 px-2 py-1 rounded">
                  {platform.pricing}
                </span>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                <strong className="text-slate-900">Best for:</strong> {platform.bestFor}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Performance:</span> {platform.latency.split(';')[0]}
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Memory:</span> {platform.memory.split(';')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Framework Cards with Best For */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {frameworks.map((framework, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 hover:border-indigo-300 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">{framework.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(framework.category)}`}>
                  {framework.category}
                </span>
              </div>
              <div className="mb-3">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                  {framework.language}
                </span>
              </div>
              <p className="text-sm text-slate-700 mb-4">
                <strong className="text-slate-900">Best for:</strong> {framework.bestFor}
              </p>
              <div className="space-y-2">
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Performance:</span> {framework.latency.split(';')[0]}
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Memory:</span> {framework.memory.split(';')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use Case Recommendations */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-linear-to-r from-emerald-50 to-teal-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              🎯 Use Case Recommendations
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Which framework to choose based on your specific needs
            </p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((item, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-5 hover:border-indigo-300 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.useCase}
                  </h3>
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-indigo-900">Recommended:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.recommendedFrameworks.map((fw, idx) => (
                        <span key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium border border-indigo-200">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600">
                    <strong className="text-slate-900">Why:</strong> {item.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              ⚙️ Feature Comparison Matrix
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    LangGraph
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    CrewAI
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Agno
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    OpenAI SDK
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Google ADK
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {featureComparison.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.frameworks["LangGraph"]}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.frameworks["CrewAI"]}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.frameworks["Agno"]}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.frameworks["OpenAI SDK"]}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.frameworks["Google ADK"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights and Recommendations */}
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
            💡 Key Insights & Decision Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Choose Production-Ready Frameworks When:</h4>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Building customer-facing production applications</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Need enterprise support and SLAs</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Require mature monitoring and debugging tools</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">✓</span>
                  <span>Have complex state management needs</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Choose Emerging Frameworks When:</h4>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Performance and low latency are critical</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Building lightweight proof-of-concepts</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Comfortable with less mature tooling</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>Want to optimize for minimal resource usage</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg border border-indigo-200">
            <p className="text-sm text-slate-700">
              <strong className="text-slate-900">Quick Decision Guide:</strong> For most startups building production agents,
              start with <strong>LangGraph</strong> (complex workflows), <strong>CrewAI</strong> (team collaboration), or
              <strong> OpenAI Agents SDK</strong> (OpenAI-native). If latency is paramount, consider <strong>Agno</strong>.
              For enterprise GCP deployments, <strong>Google ADK</strong> is the natural choice. For .NET teams,
              <strong> Semantic Kernel</strong> is the clear winner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
