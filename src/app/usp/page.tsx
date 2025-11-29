"use client";

export default function USP() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            GrowQR - Unique Selling Propositions
          </h1>
          <p className="text-lg text-slate-600 mb-4">
            <strong>Tagline:</strong> One Career. One Score. One QR.
          </p>
          <p className="text-base text-slate-700 leading-relaxed">
            GrowQR is the world's first AI-powered Career Operating System that maintains a continuously evolving digital twin for every professional.
            The platform combines four enterprise-grade capabilities into a single, unified experience.
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Dynamic Document Generation</h3>
              <p className="text-sm text-slate-700">
                Real-time, ATS-optimized résumés, cover letters, and executive bios generated from a living knowledge graph
                of the user's experience, achievements, and market signaling data.
              </p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Real-Time Skill Intelligence & Coaching</h3>
              <p className="text-sm text-slate-700">
                Adaptive video practice environments with instant feedback on communication, executive presence, and
                domain-specific performance, backed by multimodal analysis.
              </p>
            </div>
            <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Precision Job Matching & Market Intelligence</h3>
              <p className="text-sm text-slate-700">
                Sub-second semantic matching against millions of active roles, augmented with company funding,
                hiring velocity, manager sentiment, and compensation benchmarks.
              </p>
            </div>
            <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Portable Professional Identity</h3>
              <p className="text-sm text-slate-700">
                The Q-Score & Universal QR - a single, cryptographically signed QR code that serves as a
                real-time professional credential.
              </p>
            </div>
          </div>
        </div>

        {/* Q-Score Information */}
        <div className="bg-linear-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-8 mb-8 border border-indigo-200">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">The Q-Score</h2>
          <p className="text-base text-slate-700 mb-4 leading-relaxed">
            Every user receives a <strong>Q-Score (0–100)</strong>: a transparent, market-calibrated employability index
            derived from 47 proprietary signals including ATS pass rates, salary percentile projection, skill velocity,
            and recruiter response benchmarks.
          </p>
          <div className="bg-white rounded-lg p-6 border border-indigo-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">What Your QR Code Delivers:</h3>
            <ul className="space-y-2">
              <li className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
                <span>A visually rich, mobile-optimized Hero Card</span>
              </li>
              <li className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
                <span>The latest résumé (PDF + structured data)</span>
              </li>
              <li className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
                <span>A verified 60-second video introduction</span>
              </li>
              <li className="text-sm text-slate-700 flex items-start gap-2">
                <span className="text-indigo-500 mt-1">•</span>
                <span>Your Q-Score updated hourly by your dedicated digital twin</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            The Q-Score has been independently validated to correlate <strong>&gt;0.91</strong> with time-to-offer and
            compensation outcomes in blind studies across tech, finance, and consulting roles.
          </p>
        </div>

        {/* USP Summary Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 border border-slate-200">
          <div className="p-6 bg-linear-to-r from-indigo-50 to-purple-50 border-b border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
              📊 USP / Value Proposition Summary
            </h2>
            <p className="text-sm text-slate-600 mt-2">Quick overview of core differentiators</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">#</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">USP / Value Proposition</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Core Benefit (Functional)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Technical / Structural Edge</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Primary Audience Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-bold text-indigo-600">1</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Single Living QR with Real-Time Q-Score</td>
                  <td className="px-6 py-4 text-sm text-slate-700">One scannable QR always shows the latest résumé, video intro, hero card, and a transparent 0–100 employability score — no outdated PDFs ever again</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Cryptographically signed payload + hourly embedding refresh from user's digital twin in Pinecone + Google ADK agent</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Job seekers, recruiters, networkers, conference attendees, students — literally everyone globally</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-bold text-purple-600">2</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Continuously Evolving Digital Twin</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Your career agent learns from every edit, mock interview, job application, and skill practice; proactively improves your materials without you asking</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Long-term memory in Pinecone vector DB + short-term session in Redis + Google ADK/LangGraph multi-agent system</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Mid-career professionals, career switchers, remote workers in 150+ countries who can't afford ongoing coaching</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-bold text-blue-600">3</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Multimodal Real-Time Video Coaching + Feedback</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Instant, unlimited practice for interviews, sales pitches, English fluency with filler-word detection, eye-contact scoring, and narrative advice</td>
                  <td className="px-6 py-4 text-sm text-slate-700">WebRTC + Whisper-live + GPT-4o-audio/vision pipeline running at &lt;800ms latency</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Non-native speakers, fresh graduates, sales & client-facing roles worldwide</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-bold text-green-600">4</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Market-Calibrated Matching & Intelligence</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Matches you only to roles you have &gt;70% probability of passing ATS + recruiter screen; includes salary bands, layoff risk, funding data</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Daily-updated job embeddings in Pinecone + pgvector hybrid + continuous scraping/enrichment mesh</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Global talent in tech, finance, consulting, creative fields — especially in emerging markets with opaque job data</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 text-sm font-bold text-orange-600">5</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">Privacy-First, User-Owned Career Layer</td>
                  <td className="px-6 py-4 text-sm text-slate-700">You own and control all data & the QR; nothing is sold, no data broker middlemen, selective disclosure (full/partial/time-bound)</td>
                  <td className="px-6 py-4 text-sm text-slate-700">End-to-end encryption + user-controlled disclosure keys + zero-knowledge score calculation + exportable twin state</td>
                  <td className="px-6 py-4 text-sm text-slate-700">Privacy-conscious professionals, executives, gig workers, digital nomads, Gen-Z entering the workforce globally</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <p className="text-sm text-slate-600 italic">
              These five are the non-negotiable differentiators that work the same whether the user is a software engineer in San Francisco,
              a marketing manager in Lagos, or a recent graduate in Jakarta.
            </p>
          </div>
        </div>

        {/* Five Core USPs */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Detailed USP Breakdown</h2>

          {/* USP 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold">1</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Single Living QR with Real-Time Q-Score</h3>
                <p className="text-base text-slate-700 mb-4">
                  One permanent QR code (printed on business cards, embedded in email signatures, LinkedIn banners, conference badges,
                  or even NFC chips) that, when scanned by any smartphone or badge reader, instantly renders the absolute latest version
                  of your résumé, a 60-second video intro, a mobile-optimized Hero Card, current availability status, and the Q-Score (0–100).
                  No more "here's my old PDF" embarrassment — the recipient always sees you at your peak, updated hourly.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Technical Edge</h4>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>Cryptographically signed JWT generated server-side on every request</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>Q-Score computed hourly by dedicated digital twin agent (Google ADK + Pinecone)</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>All assets pulled real-time from GCS + Pinecone metadata, never cached statically</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>Selective disclosure logic enforced via zero-knowledge keys</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>QR itself is static; destination endpoint is dynamic → lifetime validity, zero re-prints</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Global Audience Impact</h4>
                <p className="text-xs text-slate-700">
                  Works identically for a Silicon Valley CTO networking at Davos, a Nairobi startup founder at a local meetup,
                  a German apprentice at a career fair, or an Indian student handing out résumés at campus placements.
                  The QR ends version chaos globally.
                </p>
              </div>
            </div>
          </div>

          {/* USP 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold">2</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Continuously Evolving Digital Twin</h3>
                <p className="text-base text-slate-700 mb-4">
                  A persistent, reasoning AI agent that owns your entire career narrative. Every bullet you write, every mock interview
                  you record, every job you apply to, every skill course you finish is ingested and used to automatically strengthen
                  future résumés, cover letters, and pitch scripts — often without you opening the app again. Over time it knows you
                  better than any recruiter or coach ever could.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Technical Edge</h4>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Long-term memory = Pinecone vector namespace per user (1536–2048 dim embeddings)</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Short-term session memory = Redis Streams + LangGraph state</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Multi-agent system built on Google ADK / LangGraph: Planner, Writer, Researcher, Critic, Memory Orchestrator</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Event bus (Kafka or GCP Pub/Sub) pushes every user action → twin updates in &lt;3s</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-purple-500 mt-1">▸</span>
                    <span>Versioned "career DNA" allows rollback and diff</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Global Audience Impact</h4>
                <p className="text-xs text-slate-700">
                  Mid-career professionals in 150+ countries who switch roles every 3–5 years, remote workers with fragmented histories,
                  return-to-work parents, immigrants whose experience is routinely discounted — all get compounding advantage instead of
                  starting from scratch every cycle.
                </p>
              </div>
            </div>
          </div>

          {/* USP 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold">3</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Multimodal Real-Time Video Coaching + Feedback</h3>
                <p className="text-base text-slate-700 mb-4">
                  Unlimited practice sessions for job interviews, sales calls, investor pitches, or English fluency. While you speak,
                  on-screen overlay shows live metrics: filler words per minute, vocal energy, eye contact %, smile authenticity, pacing,
                  plus instant narrative suggestions. Sessions are saved and re-analyzed to track progress over months.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Technical Edge</h4>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>WebRTC via LiveKit or Daily.co for &lt;500ms glass-to-glass latency globally</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Whisper-large-v3 streaming transcription + GPT-4o-audio realtime for prosody analysis</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>Computer-vision model (custom-trained on 400k interview clips) for gaze tracking, gesture scoring</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">▸</span>
                    <span>All metrics stored as time-series + embedded back into Pinecone for twin memory</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Global Audience Impact</h4>
                <p className="text-xs text-slate-700">
                  Non-native English speakers (India, LATAM, Africa, SEA), fresh graduates lacking interview experience,
                  client-facing roles in sales/consulting, anyone preparing for FAANG-style behavioral or system-design interviews —
                  instant world-class coaching at zero marginal cost.
                </p>
              </div>
            </div>
          </div>

          {/* USP 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold">4</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Market-Calibrated Matching & Intelligence</h3>
                <p className="text-base text-slate-700 mb-4">
                  Instead of spraying 500 applications and praying, users see only the 5–15 roles globally where their current Q-Score +
                  twin embedding gives &gt;70% probability of passing ATS + recruiter screen in the first 10 seconds. Each match includes
                  live salary range, equity data, layoff risk score, hiring manager LinkedIn activity, and funding runway.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Technical Edge</h4>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">▸</span>
                    <span>Daily ingestion pipeline: 2M+ jobs from direct company APIs, aggregators, and public sources</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">▸</span>
                    <span>Embeddings stored in dedicated Pinecone index (filtered by region, level, visa sponsorship)</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">▸</span>
                    <span>Hybrid search: vector similarity + metadata filters (years exp, salary band, remote/onsite, visa)</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-green-500 mt-1">▸</span>
                    <span>Continuous calibration loop against real user outcome data (offer/no-offer) to keep Q-Score honest</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Global Audience Impact</h4>
                <p className="text-xs text-slate-700">
                  Emerging-market talent targeting North America/Europe, overqualified candidates in saturated markets,
                  niche experts (e.g., climate-tech, web3, aerospace) who waste months on irrelevant postings — finally see only winnable battles.
                </p>
              </div>
            </div>
          </div>

          {/* USP 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <span className="shrink-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold">5</span>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Privacy-First, User-Owned Career Layer</h3>
                <p className="text-base text-slate-700 mb-4">
                  You fully own your twin, your data, your Q-Score, and your QR. Nothing is ever sold or shared without explicit granular consent.
                  You can export your entire twin state (vectors + structured data) at any time, revoke access instantly, or set time-bound/share-limited
                  QR links (e.g., valid only during this conference).
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Technical Edge</h4>
                <ul className="space-y-2">
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>End-to-end encryption at rest (GCP CMEK) and in transit</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>Q-Score calculated client-side when possible, otherwise zero-knowledge proofs for high-security tiers</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>All personal identifiers stripped before any aggregated analytics</span>
                  </li>
                  <li className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-orange-500 mt-1">▸</span>
                    <span>Open export format (JSON-LD + embeddings) so you can take your twin to another platform</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h4 className="text-sm font-semibold text-slate-900 mb-3">Global Audience Impact</h4>
                <p className="text-xs text-slate-700">
                  Executives & board members who cannot risk data leaks, gig workers in the EU under GDPR, Gen-Z digital natives who refuse
                  traditional platforms that harvest data, professionals in authoritarian regimes who need plausible deniability — trust is non-negotiable everywhere.
                </p>
              </div>
            </div>
          </div>

          {/* Global Applicability Note */}
          <div className="bg-linear-to-r from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200">
            <p className="text-base text-slate-700 font-medium">
              <span className="text-teal-600 font-semibold">🌍 Global Design:</span> These five USPs are engineered to remain true and defensible whether the user is in San Francisco, São Paulo, Singapore, or a small town in rural India with 2G connectivity.
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 border border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Positioning Statement</h2>
          <p className="text-base text-slate-200 leading-relaxed mb-4">
            Designed from the ground up as a privacy-first, user-owned system, GrowQR never sells personal data.
            All career artifacts remain under the individual's control, and the QR can be configured for full, partial, or time-bound disclosure.
          </p>
          <p className="text-base text-slate-200 leading-relaxed mb-4">
            In practice, GrowQR transforms career development from a periodic, anxiety-driven exercise into a continuous, measurable,
            and compounding asset—one that professionals carry in their pocket and can present with absolute confidence in any room,
            on any device, at any moment.
          </p>
          <p className="text-lg font-semibold text-indigo-300">
            GrowQR is not a job board or a résumé builder. <br />
            It is the operating system for modern professional reputation.
          </p>
        </div>
      </div>
    </div>
  );
}
