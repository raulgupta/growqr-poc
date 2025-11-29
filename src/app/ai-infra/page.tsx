"use client";

import { FcGoogle } from "react-icons/fc";
import { FaAws, FaMicrosoft } from "react-icons/fa";

export default function AIInfraPage() {
  const gpuPricing = [
    // Budget Options
    {
      provider: "GCP",
      instance: "n1-standard-2 + 1x T4",
      vCPU: "2",
      ram: "7.5GB",
      gpu: "1x T4 16GB",
      hourlyINR: "₹65",
      monthlyINR: "₹47k",
      color: "green",
      tier: "Budget"
    },
    {
      provider: "AWS",
      instance: "g4dn.xlarge",
      vCPU: "4",
      ram: "16GB",
      gpu: "1x T4 16GB",
      hourlyINR: "₹78",
      monthlyINR: "₹57k",
      color: "orange",
      tier: "Budget"
    },
    {
      provider: "AWS",
      instance: "g5.xlarge",
      vCPU: "4",
      ram: "16GB",
      gpu: "1x A10G 24GB",
      hourlyINR: "₹89",
      monthlyINR: "₹65k",
      color: "orange",
      tier: "Budget"
    },
    {
      provider: "Azure",
      instance: "NC6_Promo",
      vCPU: "6",
      ram: "56GB",
      gpu: "1x K80 12GB",
      hourlyINR: "₹140",
      monthlyINR: "₹1L",
      color: "blue",
      tier: "Budget"
    },
    {
      provider: "Azure",
      instance: "NV6_Promo",
      vCPU: "6",
      ram: "56GB",
      gpu: "1x M60 8GB",
      hourlyINR: "₹180",
      monthlyINR: "₹1.3L",
      color: "blue",
      tier: "Budget"
    },
    // Entry Level
    {
      provider: "AWS",
      instance: "g5.2xlarge (Entry)",
      vCPU: "8",
      ram: "32GB",
      gpu: "1x A10G 24GB",
      hourlyINR: "₹178",
      monthlyINR: "₹1.3L",
      color: "orange",
      tier: "Entry"
    },
    {
      provider: "Azure",
      instance: "NC6s_v3 (Entry)",
      vCPU: "6",
      ram: "112GB",
      gpu: "1x V100 16GB",
      hourlyINR: "₹271",
      monthlyINR: "₹1.98L",
      color: "blue",
      tier: "Entry"
    },
    {
      provider: "GCP",
      instance: "a2-highgpu-1g (Entry)",
      vCPU: "12",
      ram: "85GB",
      gpu: "1x A100 40GB",
      hourlyINR: "₹325",
      monthlyINR: "₹2.4L",
      color: "green",
      tier: "Entry"
    },
    // Mid-Tier
    {
      provider: "AWS",
      instance: "g5.12xlarge (Mid)",
      vCPU: "48",
      ram: "192GB",
      gpu: "4x A10G 24GB",
      hourlyINR: "₹1,068",
      monthlyINR: "₹7.8L",
      color: "orange",
      tier: "Mid"
    },
    {
      provider: "Azure",
      instance: "NC24ads_A100_v4 (Mid)",
      vCPU: "24",
      ram: "220GB",
      gpu: "1x A100 80GB",
      hourlyINR: "₹1,200",
      monthlyINR: "₹8.76L",
      color: "blue",
      tier: "Mid"
    },
    {
      provider: "GCP",
      instance: "a2-highgpu-4g (Mid)",
      vCPU: "48",
      ram: "340GB",
      gpu: "4x A100 40GB",
      hourlyINR: "₹1,300",
      monthlyINR: "₹9.5L",
      color: "green",
      tier: "Mid"
    },
    // High Performance
    {
      provider: "Azure",
      instance: "ND96asr_v4 (High)",
      vCPU: "96",
      ram: "1.9TB",
      gpu: "8x A100 80GB",
      hourlyINR: "₹2,525",
      monthlyINR: "₹18.4L",
      color: "blue",
      tier: "High"
    },
    {
      provider: "GCP",
      instance: "a3-highgpu-8g (High)",
      vCPU: "208",
      ram: "1.3TB",
      gpu: "8x H100 80GB",
      hourlyINR: "₹3,650",
      monthlyINR: "₹26.6L",
      color: "green",
      tier: "High"
    },
    {
      provider: "AWS",
      instance: "p5.48xlarge (High)",
      vCPU: "192",
      ram: "2TB",
      gpu: "8x H100 80GB",
      hourlyINR: "₹3,700",
      monthlyINR: "₹27L",
      color: "orange",
      tier: "High"
    }
  ];

  const llmApiPricing = [
    {
      provider: "OpenAI GPT-4o",
      inputPrice: "208",
      outputPrice: "830",
      monthlyTotal: "2.1L",
      strengths: "Multimodal mastery (vision+text), creative genius, enterprise reliability",
      indicEdge: "Strong via English prompts; Hindi/Tamil via translation hacks"
    },
    {
      provider: "OpenAI GPT-4o mini",
      inputPrice: "25",
      outputPrice: "83",
      monthlyTotal: "26k",
      strengths: "Lightning-fast inference, cheap multimodal, broad knowledge",
      indicEdge: "As above; lighter Indic via quantization"
    },
    {
      provider: "Anthropic Claude 3.5 Sonnet",
      inputPrice: "249",
      outputPrice: "1,245",
      monthlyTotal: "3.1L",
      strengths: "God-tier reasoning, code mastery, safety rails",
      indicEdge: "Growing Indic via fine-tunes; excellent for logic in regional scripts"
    },
    {
      provider: "Anthropic Claude 3 Haiku",
      inputPrice: "66",
      outputPrice: "332",
      monthlyTotal: "77k",
      strengths: "Speed + brevity, low-latency chat, STEM sharp",
      indicEdge: "Quick Indic support in chat; great for short Hinglish replies"
    },
    {
      provider: "Google Gemini 1.5 Pro",
      inputPrice: "104",
      outputPrice: "415",
      monthlyTotal: "1L",
      strengths: "1M+ context window, native multimodal, Google ecosystem sync",
      indicEdge: "Fluent in 10+ Indic langs; Mumbai data residency"
    },
    {
      provider: "Google Gemini 1.5 Flash",
      inputPrice: "12",
      outputPrice: "62",
      monthlyTotal: "14k",
      strengths: "Ultra-low latency, cost-efficient, mobile-first",
      indicEdge: "Hindi/Tamil/Bengali native; free tier for Indic testing"
    },
    {
      provider: "xAI Grok-3",
      inputPrice: "249",
      outputPrice: "1,036",
      monthlyTotal: "2.6L",
      strengths: "Real-time X data, humor + wit, uncensored edge",
      indicEdge: "English-first; Indic via translation layers"
    },
    {
      provider: "xAI Grok-3-mini",
      inputPrice: "21",
      outputPrice: "35",
      monthlyTotal: "5k",
      strengths: "STEM precision, compact efficiency, low-cost reasoning",
      indicEdge: "As above; mini for math in regional education apps"
    },
    {
      provider: "Together AI Llama 3.1 70B",
      inputPrice: "75",
      outputPrice: "75",
      monthlyTotal: "92k",
      strengths: "Open-source fine-tuning, custom domains, no vendor lock",
      indicEdge: "Indic via community LoRAs (Hindi/Telugu strong)"
    },
    {
      provider: "Together AI Llama 3.1 8B",
      inputPrice: "17",
      outputPrice: "17",
      monthlyTotal: "21k",
      strengths: "Dirt-cheap prototyping, lightweight deploy, multilingual base",
      indicEdge: "Same; bootstrap Indic bots fast"
    },
    {
      provider: "Krutrim (Llama 4 Scout/Maverick)",
      inputPrice: "7",
      outputPrice: "7",
      monthlyTotal: "5.8k",
      strengths: "Built for India: 11 Indic langs native, low-cost scale, Ola-backed",
      indicEdge: "Indic-first: Hindi, Tamil, etc. in DNA—no translation loss"
    },
    {
      provider: "Sarvam AI (Chat/Speech)",
      inputPrice: "23 (per 10k chars)",
      outputPrice: "N/A",
      monthlyTotal: "~17k",
      strengths: "Voice + text in Indic, TTS/STT mastery",
      indicEdge: "10+ Indic native; real-time speech for regional users"
    }
  ];

  const purchaseOptions = [
    {
      model: "RTX 5070",
      vram: "12GB GDDR7",
      type: "Consumer/Entry-Mid",
      priceRange: "55k - 65k",
      useCase: "Prototyping small LLMs (≤7B quantized), inference"
    },
    {
      model: "RTX 5070 Ti",
      vram: "12GB GDDR7",
      type: "Consumer/Mid",
      priceRange: "75k - 90k",
      useCase: "Mid-size models (13B), light fine-tuning"
    },
    {
      model: "RTX 5080",
      vram: "16GB GDDR7",
      type: "Consumer/Mid-High",
      priceRange: "1.0L - 1.2L",
      useCase: "Efficient inference (30B quantized), multi-GPU setups"
    },
    {
      model: "RTX 5090",
      vram: "32GB GDDR7",
      type: "Consumer/AI Flagship",
      priceRange: "2.1L - 2.5L",
      useCase: "Heavy inference (70B+ quantized), future-proofing"
    },
    {
      model: "RTX 4080",
      vram: "16GB GDDR6X",
      type: "Consumer/Mid-Tier",
      priceRange: "1.0L - 1.4L",
      useCase: "Balanced AI workloads, 30B models"
    },
    {
      model: "RTX 4090",
      vram: "24GB GDDR6X",
      type: "Consumer/AI Prototyping",
      priceRange: "1.6L - 2.6L",
      useCase: "High-VRAM inference (up to 70B quantized)"
    },
    {
      model: "RTX 3090 (Used/Refurb)",
      vram: "24GB GDDR6X",
      type: "Consumer Legacy",
      priceRange: "50k - 80k",
      useCase: "Bootstrapping 13-30B params, cheap entry"
    },
    {
      model: "A40",
      vram: "48GB GDDR6",
      type: "Enterprise HPC",
      priceRange: "3L - 5L (new) / 2L - 3L (refurb)",
      useCase: "Long-haul inference, multi-user servers"
    },
    {
      model: "A6000",
      vram: "48GB GDDR6",
      type: "Enterprise AI",
      priceRange: "4L - 6L (new) / 2.5L - 4L (refurb)",
      useCase: "Stable enterprise training/inference"
    },
    {
      model: "A100",
      vram: "80GB HBM2e",
      type: "Enterprise AI/HPC",
      priceRange: "8L - 15L (new) / 5L - 8L (refurb)",
      useCase: "Full training pipelines, large models"
    },
    {
      model: "L40S",
      vram: "48GB GDDR6",
      type: "Enterprise Inference",
      priceRange: "5L - 8L",
      useCase: "Optimized gen AI, low-power racks"
    },
    {
      model: "H100",
      vram: "80GB HBM3",
      type: "Enterprise Elite",
      priceRange: "25L - 30L (new) / 15L - 20L (refurb)",
      useCase: "Top-tier training, massive scale"
    }
  ];

  const getProviderIcon = (provider: string) => {
    switch (provider) {
      case "AWS":
        return <FaAws className="text-orange-600" />;
      case "Azure":
        return <FaMicrosoft className="text-blue-600" />;
      case "GCP":
        return <FcGoogle />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            AI Infrastructure Pricing
          </h1>
          <p className="text-lg text-slate-600">
            Cloud GPU Pricing Comparison for Indian Startups
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Research Overview
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            As an India-based startup, understanding the cost implications of cloud GPU infrastructure
            is crucial for AI/ML workloads. This research compares pricing from major cloud providers:
            AWS, Azure, and GCP across budget, entry-level, mid-tier, and high-performance options.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>💡 Pro Tip:</strong> Spot/reserved instances can cut costs by 50-80%. Consider these options
                for non-critical workloads or long-term commitments.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900">
                <strong>💰 Budget Friendly:</strong> Start as low as ₹65/hr (₹47k/mo) with GCP T4 instances,
                perfect for development, testing, and small-scale inference.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              💰 GPU Instance Pricing Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Provider
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Instance
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    vCPU
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    RAM
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    GPU
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Hourly (INR)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Monthly Est. (INR)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {gpuPricing.map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl">
                          {getProviderIcon(item.provider)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-slate-900">
                      {item.instance}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.vCPU}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {item.ram}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {item.gpu}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {item.hourlyINR}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-indigo-600">
                      {item.monthlyINR}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              💰 Budget Options
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>GCP n1-standard-2 + T4:</strong> Most affordable at ₹65/hr (₹47k/mo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>AWS g4dn.xlarge:</strong> T4 GPU at ₹78/hr (₹57k/mo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>Azure NC6_Promo:</strong> K80 GPU at ₹140/hr (₹1L/mo)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              📊 Entry-Level Options
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>AWS g5.2xlarge:</strong> A10G GPU at ₹178/hr (₹1.3L/mo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>Azure NC6s_v3:</strong> V100 GPU at ₹271/hr (₹1.98L/mo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>GCP a2-highgpu-1g:</strong> A100 GPU at ₹325/hr (₹2.4L/mo)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
              🚀 High-Performance Options
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>Azure ND96asr_v4:</strong> 8x A100 80GB at ₹2,525/hr (₹18.4L/mo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>GCP a3-highgpu-8g:</strong> 8x H100 80GB at ₹3,650/hr (₹26.6L/mo)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 mt-1">▸</span>
                <span className="text-slate-700 text-sm">
                  <strong>AWS p5.48xlarge:</strong> 8x H100 80GB at ₹3,700/hr (₹27L/mo)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cost Optimization Tips */}
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            💡 Cost Optimization Strategies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Spot Instances</h4>
              <p className="text-sm text-slate-700 mb-2">
                Save 50-80% by using spot/preemptible instances for:
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Development and testing workloads</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Batch processing jobs</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Model training with checkpointing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Reserved Instances</h4>
              <p className="text-sm text-slate-700 mb-2">
                Save 30-70% with 1-3 year commitments for:
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Production inference workloads</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Continuous model training pipelines</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Predictable long-term workloads</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* LLM API Pricing */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8 border border-slate-200">
          <div className="p-6 bg-linear-to-r from-purple-50 to-indigo-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              🤖 LLM API Pricing (Complete LLM-First Approach)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Monthly cost estimates for 10,000 users using managed LLM APIs - no GPU infrastructure needed
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Provider/Model
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Input (₹/1M)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Output (₹/1M)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Total Est. (₹)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Strengths 🔥
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Indic Edge 🇮🇳
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {llmApiPricing.map((api, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {api.provider}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      ₹{api.inputPrice}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {api.outputPrice === "N/A" ? api.outputPrice : `₹${api.outputPrice}`}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-purple-600">
                      ₹{api.monthlyTotal}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {api.strengths}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {api.indicEdge}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-amber-50 border-t border-amber-200">
            <div className="space-y-2">
              <p className="text-sm text-amber-900">
                <strong>💡 Key Insight:</strong> For 10k users, the most cost-effective options are Krutrim (₹5.8k/month)
                and Gemini Flash (₹14k/month), while premium models like Claude 3.5 Sonnet (₹3.1L) and GPT-4o (₹2.1L) offer
                enterprise-grade capabilities.
              </p>
              <p className="text-sm text-amber-900">
                <strong>🇮🇳 India Advantage:</strong> Krutrim and Sarvam AI provide native Indic language support (10-11 languages)
                with significant free credits. Google Gemini offers Mumbai data residency and free tiers. For English-first with
                Indic needs, consider OpenAI or Claude with translation layers.
              </p>
            </div>
          </div>
        </div>

        {/* GPU Purchase Options */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8 border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              🛒 GPU Purchase Options (On-Premise)
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              One-time purchase pricing for building your own AI infrastructure in India
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    GPU Model
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    VRAM
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Approx. Price Range (₹)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Key Use Case
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {purchaseOptions.map((option, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      {option.model}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {option.vram}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {option.type}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-indigo-600">
                      ₹{option.priceRange}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {option.useCase}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Purchase vs Cloud Comparison */}
        <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8 mt-8 border border-emerald-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            💰 Purchase vs Cloud: Break-Even Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">When to Buy</h4>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Continuous 24/7 workloads (break-even in 3-6 months)</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Data privacy/security requirements</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Long-term project commitment (&gt;1 year)</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Local development team needs GPUs</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-emerald-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">When to Use Cloud</h4>
              <ul className="space-y-2">
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Sporadic/bursty workloads</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Testing different GPU types</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>No upfront capital available</span>
                </li>
                <li className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Need instant scaling capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
