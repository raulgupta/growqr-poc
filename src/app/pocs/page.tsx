"use client";

import { useState } from "react";
import { pocs, categories } from "@/data/pocs";

export default function POCs() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [expandedPOC, setExpandedPOC] = useState<string | null>(null);

  const filteredPOCs = selectedCategory === "All"
    ? pocs
    : pocs.filter(poc => poc.category === selectedCategory);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Low": return "bg-green-100 text-green-700 border-green-300";
      case "Medium": return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "High": return "bg-red-100 text-red-700 border-red-300";
      default: return "bg-slate-100 text-slate-700 border-slate-300";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Cloud-Based": return "bg-blue-100 text-blue-700";
      case "Hybrid": return "bg-purple-100 text-purple-700";
      case "Local": return "bg-green-100 text-green-700";
      case "Integration": return "bg-orange-100 text-orange-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Possible POCs (Proof of Concepts)
          </h1>
          <p className="text-lg text-slate-600">
            2-3 day proof of concepts to validate technology choices and architecture decisions
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Why POCs?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Before committing to a full implementation, these rapid proof of concepts allow you to:
          </p>
          <ul className="space-y-2">
            <li className="text-slate-700 flex items-start gap-2">
              <span className="text-indigo-500 mt-1">▸</span>
              <span><strong>Validate technical feasibility</strong> of different approaches</span>
            </li>
            <li className="text-slate-700 flex items-start gap-2">
              <span className="text-indigo-500 mt-1">▸</span>
              <span><strong>Compare quality and performance</strong> across different services and architectures</span>
            </li>
            <li className="text-slate-700 flex items-start gap-2">
              <span className="text-indigo-500 mt-1">▸</span>
              <span><strong>Assess integration complexity</strong> and developer experience</span>
            </li>
            <li className="text-slate-700 flex items-start gap-2">
              <span className="text-indigo-500 mt-1">▸</span>
              <span><strong>Make data-driven decisions</strong> with real metrics and user feedback</span>
            </li>
          </ul>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({pocs.filter(p => p.category === category).length})
                  </span>
                )}
                {category === "All" && (
                  <span className="ml-2 text-xs opacity-75">
                    ({pocs.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* POC Cards */}
        <div className="space-y-6">
          {filteredPOCs.map((poc) => (
            <div
              key={poc.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 transition-all hover:shadow-xl"
            >
              {/* Card Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => setExpandedPOC(expandedPOC === poc.id ? null : poc.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {poc.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-3">{poc.description}</p>
                  </div>
                  <button
                    className="ml-4 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        expandedPOC === poc.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(poc.category)}`}>
                    {poc.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getComplexityColor(poc.complexity)}`}>
                    {poc.complexity} Complexity
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
                    ⏱️ {poc.duration}
                  </span>
                </div>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2">
                  {poc.techStack.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {poc.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">
                      +{poc.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              {expandedPOC === poc.id && (
                <div className="border-t border-slate-200 bg-slate-50 p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Objective */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        🎯 Objective
                      </h4>
                      <p className="text-slate-700 text-sm">{poc.objective}</p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        🛠️ Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {poc.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white text-slate-700 rounded text-xs border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        ⭐ Key Features
                      </h4>
                      <ul className="space-y-2">
                        {poc.keyFeatures.map((feature, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-indigo-500 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        📦 Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {poc.deliverables.map((deliverable, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Success Metrics */}
                    <div>
                      <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center gap-2">
                        ✅ Success Metrics
                      </h4>
                      <ul className="space-y-2">
                        {poc.successMetrics.map((metric, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-green-500 mt-1">▸</span>
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Risks */}
                    <div>
                      <h4 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                        ⚠️ Risks & Challenges
                      </h4>
                      <ul className="space-y-2">
                        {poc.risks.map((risk, index) => (
                          <li key={index} className="text-sm text-slate-700 flex items-start gap-2">
                            <span className="text-red-500 mt-1">▸</span>
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Recommendations Section */}
        <div className="mt-12 bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            💡 Recommended Approach
          </h2>
          <p className="text-slate-700 mb-6">
            Based on typical project constraints, here&apos;s a suggested sequence:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Start with Cloud-Based POC</h3>
                <p className="text-sm text-slate-700">
                  Begin with <strong>GPT-4 + ElevenLabs</strong> to quickly validate the core concept and user experience with minimal setup.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Add Avatar Capability</h3>
                <p className="text-sm text-slate-700">
                  Test <strong>Akool Avatar + GPT-4</strong> to measure engagement improvement and assess technical complexity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Optimize Costs with Hybrid</h3>
                <p className="text-sm text-slate-700">
                  If scaling, implement <strong>Local Llama 3 + Cloud ElevenLabs</strong> hybrid to reduce operational costs while maintaining quality.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">Add Advanced Features</h3>
                <p className="text-sm text-slate-700">
                  Based on feedback, explore <strong>Multi-Modal Code Assessment</strong> or <strong>Emotion-Aware</strong> features for differentiation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
