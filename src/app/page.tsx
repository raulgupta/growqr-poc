"use client";

import { useState } from "react";
import Image from "next/image";
import { services, comparisonMetrics, strategicConsiderations, hybridApproach, akoolIntegration } from "@/data/comparison";

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const getColorClasses = (color: string, variant: 'bg' | 'border' | 'text' = 'bg') => {
    const colors: Record<string, Record<string, string>> = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600'
      }
    };
    return colors[color]?.[variant] || '';
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">
            GrowQR AI Interview Platform
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            Comparative Analysis: AI Services Research
          </p>
        </div>
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
            Research Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            This comparative analysis evaluates four leading AI platforms for implementing
            AI-powered interview simulations with avatars and voices. The goal is to help
            the team make informed decisions about technology selection for the GrowQR platform.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all cursor-pointer hover:shadow-xl hover:scale-[1.02] ${
                selectedService === index
                  ? getColorClasses(service.color, 'border')
                  : 'border-slate-200'
              }`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              <div className={`p-6 ${getColorClasses(service.color, 'bg')}`}>
                <div className="mb-4 flex items-center justify-center h-20">
                  <Image
                    src={service.logo}
                    alt={`${service.name} logo`}
                    width={180}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${getColorClasses(service.color, 'text')}`}>
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm">
                  {service.tagline}
                </p>
              </div>

              {selectedService === index && (
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <span>✅</span> Pros
                    </h4>
                    <ul className="space-y-2">
                      {service.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <span>❌</span> Cons
                    </h4>
                    <ul className="space-y-2">
                      {service.cons.map((con, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {selectedService !== index && (
                <div className="p-6">
                  <button className={`text-sm font-medium ${getColorClasses(service.color, 'text')} hover:underline`}>
                    Click to view details →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8 border border-slate-200">
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-2">
              📊 Feature Comparison
            </h2>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden p-4 space-y-4">
            {comparisonMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">{metric.feature}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-blue-50 rounded p-2">
                    <span className="font-medium text-blue-800 block mb-1">ElevenLabs</span>
                    <span className="text-slate-700">{metric.elevenLabs}</span>
                  </div>
                  <div className="bg-green-50 rounded p-2">
                    <span className="font-medium text-green-800 block mb-1">VideoAsk</span>
                    <span className="text-slate-700">{metric.videoAsk}</span>
                  </div>
                  <div className="bg-purple-50 rounded p-2">
                    <span className="font-medium text-purple-800 block mb-1">Synthesia</span>
                    <span className="text-slate-700">{metric.synthesia}</span>
                  </div>
                  <div className="bg-orange-50 rounded p-2">
                    <span className="font-medium text-orange-800 block mb-1">Akool</span>
                    <span className="text-slate-700">{metric.akool}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex flex-col items-start gap-2">
                      <Image
                        src="/logos/11labs.png"
                        alt="ElevenLabs logo"
                        width={100}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex flex-col items-start gap-2">
                      <Image
                        src="/logos/videoask.png"
                        alt="VideoAsk logo"
                        width={100}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex flex-col items-start gap-2">
                      <Image
                        src="/logos/synthesia.png"
                        alt="Synthesia logo"
                        width={100}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <div className="flex flex-col items-start gap-2">
                      <Image
                        src="/logos/akool.png"
                        alt="Akool logo"
                        width={100}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonMetrics.map((metric, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {metric.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {metric.elevenLabs}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {metric.videoAsk}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {metric.synthesia}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {metric.akool}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Considerations */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6 flex items-center gap-2">
            🧠 Strategic Considerations
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {strategicConsiderations.map((consideration, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start">
                <div className="shrink-0 sm:w-32 font-semibold text-slate-900">
                  {consideration.title}:
                </div>
                <div className="text-sm sm:text-base text-slate-700">
                  {consideration.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Akool Integration Strategy */}
        <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-orange-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            🤖 Akool Integration Strategy
          </h2>

          <div className="mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Potential System Architecture</h3>
            <div className="bg-white rounded-lg p-3 sm:p-4 border border-orange-200">
              <code className="text-xs sm:text-sm text-slate-700 wrap-break-word block">
                {akoolIntegration.architecture}
              </code>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Potential Applications</h3>
              <ul className="space-y-2">
                {akoolIntegration.potentialApplications.map((app, index) => (
                  <li key={index} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">▸</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">Implementation Considerations</h3>
              <ul className="space-y-2">
                {akoolIntegration.considerations.map((consideration, index) => (
                  <li key={index} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">▸</span>
                    <span>{consideration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3 sm:p-4 border border-orange-200">
            <p className="text-xs sm:text-sm text-slate-700">
              <strong>Key Insight:</strong> Akool appears to be a strong contender for the avatar component of your system,
              particularly if you&apos;re looking for a developer-friendly solution with API access. Its focus on avatars
              complements ElevenLabs&apos; strength in voice generation, potentially creating a powerful combination
              for your interview platform.
            </p>
          </div>
        </div>

        {/* Hybrid Approach */}
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-4 sm:p-8 border border-indigo-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            💡 Recommended Hybrid Approach
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4 sm:mb-6">
            Consider combining the strengths of multiple platforms for an optimal solution:
          </p>
          <ul className="space-y-3">
            {hybridApproach.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-700 pt-0.5">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
