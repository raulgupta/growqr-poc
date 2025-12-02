"use client";

import Image from "next/image";

interface MicroserviceProgress {
  name: string;
  shortName: string;
  expectedProgress: number;
  currentProgress: number;
  comments: string[];
  bugImage?: string;
}

const microservicesProgress: MicroserviceProgress[] = [
  {
    name: "User Management Service",
    shortName: "UMS",
    expectedProgress: 70,
    currentProgress: 30,
    comments: [
      "No email service for registration confirmation",
      "No SMS/text for login verification",
      "Admin panel CRUD: Update & Delete functionalities not working",
    ],
    bugImage: "/bugs/usm.png",
  },
  {
    name: "Resume & Cover Letter",
    shortName: "R+C",
    expectedProgress: 50,
    currentProgress: 10,
    comments: [
      "Resumes not getting parsed into the service",
      "AI resume parsing not working (AI calls failing)",
      "Cover letter feature not functional",
      "User required to re-enter info from scratch instead of using pre-uploaded resume from onboarding",
    ],
    bugImage: "/bugs/r+c.png",
  },
  {
    name: "Job Matchmaking",
    shortName: "JM",
    expectedProgress: 40,
    currentProgress: 10,
    comments: [
      "Job matching engines created but results unsatisfactory",
      "Location-based search broken (e.g., searching New Delhi returns New York results)",
      "Feature currently unusable due to inaccurate matching",
    ],
    bugImage: "/bugs/job-matchmaking.png",
  },
  {
    name: "Social Media / Branding",
    shortName: "SM",
    expectedProgress: 25,
    currentProgress: 0,
    comments: [
      "LinkedIn service returning constant 404 errors",
      "Feature completely unusable",
    ],
    bugImage: "/bugs/social-branding.png",
  },
  {
    name: "Upskilling - Roleplay",
    shortName: "UPS-RP",
    expectedProgress: 20,
    currentProgress: 5,
    comments: [
      "Currently a static page that requires depth",
      "No dynamic content or interactions",
      "Feature currently unusable",
    ],
  },
  {
    name: "Upskilling - Practice",
    shortName: "UPS-PR",
    expectedProgress: 20,
    currentProgress: 5,
    comments: [
      "Using hardcoded upskilling content",
      "No dynamic practice scenarios",
      "Feature currently unusable",
    ],
  },
];

function ProgressBar({ current, expected }: { current: number; expected: number }) {
  const percentage = (current / expected) * 100;

  let barColor = "bg-red-500";
  if (percentage >= 70) barColor = "bg-green-500";
  else if (percentage >= 50) barColor = "bg-yellow-500";
  else if (percentage >= 30) barColor = "bg-orange-500";

  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <div
        className={`h-2.5 rounded-full ${barColor}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default function ProjectProgress() {
  const overallProgress = Math.round(
    microservicesProgress.reduce((acc, ms) => acc + ms.currentProgress, 0) /
      microservicesProgress.length
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Project Progress
          </h1>
          <p className="text-lg text-slate-600">
            Track the development milestones and progress of GrowQR microservices
          </p>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-2xl font-semibold text-slate-900">Overall Progress</h2>
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-indigo-600">{overallProgress}%</span>
              <span className="text-sm text-slate-500">Complete</span>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-4">
            <div
              className="h-4 rounded-full bg-indigo-600 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Microservices Progress Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-4 sm:p-6 bg-linear-to-r from-indigo-50 to-purple-50 border-b border-slate-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Microservices Progress
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Detailed progress tracking for each microservice
            </p>
          </div>

          {/* Mobile Card Layout */}
          <div className="md:hidden p-4 space-y-4">
            {microservicesProgress.map((ms) => (
              <div
                key={ms.shortName}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-semibold text-slate-900">{ms.name}</span>
                    <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded text-xs font-medium">
                      {ms.shortName}
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-semibold text-slate-900">{ms.currentProgress}%</span>
                  </div>
                  <ProgressBar current={ms.currentProgress} expected={ms.expectedProgress} />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500">Missing/Comments:</span>
                  <ul className="text-sm text-slate-700 mt-1 space-y-1">
                    {ms.comments.map((comment, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-0.5">•</span>
                        <span>{comment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {ms.bugImage && (
                  <div className="mt-3">
                    <span className="text-xs font-medium text-slate-500">Bug Screenshot:</span>
                    <div className="mt-2 rounded-lg overflow-hidden border border-red-200">
                      <Image
                        src={ms.bugImage}
                        alt={`${ms.name} bug screenshot`}
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Table Layout */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Microservice
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Short Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Expected
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Current Progress
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 min-w-[200px]">
                    Progress Bar
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Comments / What&apos;s Missing
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                    Bug Screenshot
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {microservicesProgress.map((ms) => (
                  <tr key={ms.shortName} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      {ms.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded text-xs font-medium">
                        {ms.shortName}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {ms.expectedProgress}%
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-sm font-semibold ${
                          ms.currentProgress >= 70
                            ? "text-green-600"
                            : ms.currentProgress >= 50
                            ? "text-yellow-600"
                            : ms.currentProgress >= 30
                            ? "text-orange-600"
                            : "text-red-600"
                        }`}
                      >
                        {ms.currentProgress}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <ProgressBar current={ms.currentProgress} expected={ms.expectedProgress} />
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <ul className="space-y-1">
                        {ms.comments.map((comment, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-slate-400 mt-0.5">•</span>
                            <span>{comment}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4">
                      {ms.bugImage ? (
                        <div className="rounded-lg overflow-hidden border border-red-200 max-w-[200px]">
                          <Image
                            src={ms.bugImage}
                            alt={`${ms.name} bug screenshot`}
                            width={200}
                            height={150}
                            className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => window.open(ms.bugImage, "_blank")}
                          />
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Progress Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span className="text-sm text-slate-600">70-100% (On Track)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-500"></div>
              <span className="text-sm text-slate-600">50-69% (Moderate)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-orange-500"></div>
              <span className="text-sm text-slate-600">30-49% (Needs Attention)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-500"></div>
              <span className="text-sm text-slate-600">0-29% (Critical)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
