export default function LaravelApiMappingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Laravel API Mapping
          </h1>
          <p className="text-lg text-slate-600">
            Complete API endpoint reference with request/response specifications for the GrowQR Laravel backend.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Base URL: /api</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Auth: Laravel Sanctum</span>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Table of Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <a href="#authentication" className="text-indigo-600 hover:text-indigo-800 hover:underline">1. Authentication</a>
            <a href="#user-profile" className="text-indigo-600 hover:text-indigo-800 hover:underline">2. User Profile</a>
            <a href="#onboarding" className="text-indigo-600 hover:text-indigo-800 hover:underline">3. Onboarding</a>
            <a href="#dashboard" className="text-indigo-600 hover:text-indigo-800 hover:underline">4. Dashboard</a>
            <a href="#resume-data" className="text-indigo-600 hover:text-indigo-800 hover:underline">5. Resume Data (CRUD)</a>
            <a href="#resume-parsing" className="text-indigo-600 hover:text-indigo-800 hover:underline">6. Resume Parsing & Analysis</a>
            <a href="#cover-letters" className="text-indigo-600 hover:text-indigo-800 hover:underline">7. Cover Letters</a>
            <a href="#job-search" className="text-indigo-600 hover:text-indigo-800 hover:underline">8. Job Search Engine</a>
            <a href="#linkedin-ai" className="text-indigo-600 hover:text-indigo-800 hover:underline">9. LinkedIn AI Analysis</a>
            <a href="#interview-practice" className="text-indigo-600 hover:text-indigo-800 hover:underline">10. Interview Practice</a>
            <a href="#admin-apis" className="text-indigo-600 hover:text-indigo-800 hover:underline">11. Admin APIs</a>
            <a href="#akool" className="text-indigo-600 hover:text-indigo-800 hover:underline">12. Akool Avatar Integration</a>
            <a href="#response-format" className="text-indigo-600 hover:text-indigo-800 hover:underline">13. Response Format</a>
            <a href="#external-services" className="text-indigo-600 hover:text-indigo-800 hover:underline">14. External Services</a>
          </div>
        </div>

        {/* 1. Authentication */}
        <section id="authentication" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Authentication</h2>
          </div>

          {/* POST /login */}
          <div className="mb-6 border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">POST</span>
                <code className="text-sm font-mono text-slate-800">/login</code>
                <span className="text-xs text-slate-500">- User login and token generation</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase">Auth Required:</span>
                <span className="ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">No</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body:</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "email": "string (required, email)",
  "password": "string (required, min:6)"
}`}</code></pre>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Success Response (200):</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "success": true,
  "message": "Login successful",
  "access_token": "string",
  "type": "user",
  "user": { "first_name", "last_name", "email" },
  "user_detail": { ... }
}`}</code></pre>
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Controller:</span> <code className="bg-slate-100 px-1 rounded">AuthApiController@login</code>
              </div>
            </div>
          </div>

          {/* POST /register */}
          <div className="mb-6 border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">POST</span>
                <code className="text-sm font-mono text-slate-800">/register</code>
                <span className="text-xs text-slate-500">- New user registration</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase">Auth Required:</span>
                <span className="ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">No</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body:</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "first_name": "string (required, max:255)",
  "last_name": "string (nullable, max:255)",
  "email": "string (required, email, unique)",
  "password": "string (required, min:6)",
  "password_confirmation": "string (required)"
}`}</code></pre>
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Controller:</span> <code className="bg-slate-100 px-1 rounded">AuthApiController@register</code>
              </div>
            </div>
          </div>

          {/* POST /forgot-password */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">POST</span>
                <code className="text-sm font-mono text-slate-800">/forgot-password</code>
                <span className="text-xs text-slate-500">- Initiate password reset</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase">Auth Required:</span>
                <span className="ml-2 px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">No</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body:</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{ "email": "string (required, email)" }`}</code></pre>
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Controller:</span> <code className="bg-slate-100 px-1 rounded">AuthApiController@forgotPassword</code>
              </div>
            </div>
          </div>
        </section>

        {/* 2. User Profile */}
        <section id="user-profile" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. User Profile</h2>
          </div>

          <div className="text-xs text-slate-500 mb-4 sm:hidden">Scroll horizontally to see more</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Method</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Endpoint</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Controller</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono text-indigo-600">/profile</td><td className="px-3 py-2">Get authenticated user&apos;s profile</td><td className="px-3 py-2 font-mono text-xs">ProfileApiController@profile</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono text-indigo-600">/profile</td><td className="px-3 py-2">Update user profile</td><td className="px-3 py-2 font-mono text-xs">ProfileApiController@update</td></tr>
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono text-indigo-600">/profile/qr-code</td><td className="px-3 py-2">Get user&apos;s QR code</td><td className="px-3 py-2 font-mono text-xs">ProfileApiController@getQrCode</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono text-indigo-600">/profile/generate-qr-code</td><td className="px-3 py-2">Generate QR code for profile URL</td><td className="px-3 py-2 font-mono text-xs">ProfileApiController@generateQrCode</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. Onboarding */}
        <section id="onboarding" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Onboarding</h2>
          </div>

          {/* GET /onboarding */}
          <div className="mb-4 border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">GET</span>
                <code className="text-sm font-mono text-slate-800">/onboarding</code>
                <span className="text-xs text-slate-500">- Get onboarding data for current user</span>
              </div>
            </div>
            <div className="p-4">
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Controller:</span> <code className="bg-slate-100 px-1 rounded">OnboardingApiController@index</code>
              </div>
            </div>
          </div>

          {/* POST /onboarding */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">POST</span>
                <code className="text-sm font-mono text-slate-800">/onboarding</code>
                <span className="text-xs text-slate-500">- Save onboarding data (multi-step form)</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body (key fields):</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone": "string",
  "dob": "date",
  "gender": "string",
  "current_position": "string",
  "experience_level": "string",
  "desired_position": "string",
  "resume": "file (mimes:pdf,doc,docx)",
  "linkedin": "string (URL)",
  "step": "integer (1-7)"
}`}</code></pre>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                <strong>Notes:</strong> If LinkedIn URL changes, triggers BrightData API to scrape profile. Step 1-6 = &apos;in_progress&apos;, Step 7 = &apos;uploaded&apos;
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Controller:</span> <code className="bg-slate-100 px-1 rounded">OnboardingApiController@save</code>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Dashboard */}
        <section id="dashboard" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Dashboard</h2>
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">GET</span>
                <code className="text-sm font-mono text-slate-800">/dashboard</code>
                <span className="text-xs text-slate-500">- Get dashboard metrics</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Success Response:</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "success": true,
  "data": {
    "job_count": 0,
    "resume_score": 0,
    "social_profiles": 0
  }
}`}</code></pre>
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Controller:</span> <code className="bg-slate-100 px-1 rounded">DashboardApiController@dashboard</code>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Resume Data (CRUD) */}
        <section id="resume-data" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Resume Data (CRUD)</h2>
          </div>
          <p className="text-sm text-slate-600 mb-4">All resume data endpoints follow RESTful conventions with apiResource routes.</p>

          {/* Education */}
          <div className="bg-orange-50 rounded-lg p-4 mb-4 border border-orange-200">
            <h3 className="font-bold text-orange-900 mb-3">Education</h3>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
            <div className="overflow-x-auto rounded border border-orange-200">
              <table className="w-full text-xs sm:text-sm min-w-[400px] bg-white">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-orange-800">Method</th>
                    <th className="px-3 py-2 text-left font-semibold text-orange-800">Endpoint</th>
                    <th className="px-3 py-2 text-left font-semibold text-orange-800">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-100 text-slate-900">
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/education</td><td className="px-3 py-2">List all education records</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/education</td><td className="px-3 py-2">Create education record</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">PUT</span></td><td className="px-3 py-2 font-mono">/education/{`{id}`}</td><td className="px-3 py-2">Update education record</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">DEL</span></td><td className="px-3 py-2 font-mono">/education/{`{id}`}</td><td className="px-3 py-2">Delete education record</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2"><strong>Controller:</strong> EducationApiController</p>
          </div>

          {/* Skills */}
          <div className="bg-emerald-50 rounded-lg p-4 mb-4 border border-emerald-200">
            <h3 className="font-bold text-emerald-900 mb-3">Skills</h3>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
            <div className="overflow-x-auto rounded border border-emerald-200">
              <table className="w-full text-xs sm:text-sm min-w-[400px] bg-white">
                <thead className="bg-emerald-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-emerald-800">Method</th>
                    <th className="px-3 py-2 text-left font-semibold text-emerald-800">Endpoint</th>
                    <th className="px-3 py-2 text-left font-semibold text-emerald-800">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100 text-slate-900">
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/skills</td><td className="px-3 py-2">List all skills</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/skills</td><td className="px-3 py-2">Create skill</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">PUT</span></td><td className="px-3 py-2 font-mono">/skills/{`{id}`}</td><td className="px-3 py-2">Update skill</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">DEL</span></td><td className="px-3 py-2 font-mono">/skills/{`{id}`}</td><td className="px-3 py-2">Delete skill</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2"><strong>Controller:</strong> SkillsApiController</p>
          </div>

          {/* Experience */}
          <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
            <h3 className="font-bold text-blue-900 mb-3">Experience</h3>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
            <div className="overflow-x-auto rounded border border-blue-200">
              <table className="w-full text-xs sm:text-sm min-w-[400px] bg-white">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-blue-800">Method</th>
                    <th className="px-3 py-2 text-left font-semibold text-blue-800">Endpoint</th>
                    <th className="px-3 py-2 text-left font-semibold text-blue-800">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100 text-slate-900">
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/experience</td><td className="px-3 py-2">List all experiences</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/experience</td><td className="px-3 py-2">Create experience</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">PUT</span></td><td className="px-3 py-2 font-mono">/experience/{`{id}`}</td><td className="px-3 py-2">Update experience</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">DEL</span></td><td className="px-3 py-2 font-mono">/experience/{`{id}`}</td><td className="px-3 py-2">Delete experience</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2"><strong>Controller:</strong> ExperienceApiController</p>
          </div>

          {/* Projects */}
          <div className="bg-violet-50 rounded-lg p-4 mb-4 border border-violet-200">
            <h3 className="font-bold text-violet-900 mb-3">Projects</h3>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
            <div className="overflow-x-auto rounded border border-violet-200">
              <table className="w-full text-xs sm:text-sm min-w-[400px] bg-white">
                <thead className="bg-violet-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-violet-800">Method</th>
                    <th className="px-3 py-2 text-left font-semibold text-violet-800">Endpoint</th>
                    <th className="px-3 py-2 text-left font-semibold text-violet-800">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-violet-100 text-slate-900">
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/projects</td><td className="px-3 py-2">List all projects</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/projects</td><td className="px-3 py-2">Create project</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">PUT</span></td><td className="px-3 py-2 font-mono">/projects/{`{id}`}</td><td className="px-3 py-2">Update project</td></tr>
                  <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">DEL</span></td><td className="px-3 py-2 font-mono">/projects/{`{id}`}</td><td className="px-3 py-2">Delete project</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2"><strong>Controller:</strong> ProjectApiController</p>
          </div>

          {/* Other CRUD endpoints summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <h4 className="font-semibold text-slate-800 text-sm mb-1">Communications</h4>
              <p className="text-xs text-slate-600">/communications - Language proficiencies</p>
              <p className="text-xs text-slate-500 mt-1">CommunicationApiController</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <h4 className="font-semibold text-slate-800 text-sm mb-1">Curriculum</h4>
              <p className="text-xs text-slate-600">/curriculum - Curriculum entries</p>
              <p className="text-xs text-slate-500 mt-1">CurriculumApiController</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <h4 className="font-semibold text-slate-800 text-sm mb-1">ATS Scores</h4>
              <p className="text-xs text-slate-600">/ats-scores - ATS score tracking</p>
              <p className="text-xs text-slate-500 mt-1">AtsScoresApiController</p>
            </div>
          </div>
        </section>

        {/* 6. Resume Parsing & Analysis */}
        <section id="resume-parsing" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Resume Parsing & Analysis</h2>
          </div>

          {/* POST /resume-parse */}
          <div className="mb-4 border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">POST</span>
                <code className="text-sm font-mono text-slate-800">/resume-parse</code>
                <span className="text-xs text-slate-500">- Parse PDF resume using AI (OpenAI)</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Request Body:</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "resume_url": "string (required, URL to PDF)",
  "job_description": "string (optional)"
}`}</code></pre>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Success Response (structured data):</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "status": "success",
  "structured": {
    "user_details": { name, email, phone, location, linkedin, summary },
    "experiences": [{ job_title, company, responsibilities, technologies }],
    "education": [{ degree, institution, grade }],
    "skills": { technical: [], soft: [], languages: [] },
    "projects": [...], "certifications": [...]
  }
}`}</code></pre>
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Service:</span> <code className="bg-slate-100 px-1 rounded">ResumeParseService@parseFromUrl</code>
              </div>
            </div>
          </div>

          {/* POST /resume-generate-report */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-4 py-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded">POST</span>
                <code className="text-sm font-mono text-slate-800">/resume-generate-report</code>
                <span className="text-xs text-slate-500">- Generate AI analysis report</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Success Response:</p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "status": "success",
  "analysis": {
    "resume_analysis": {
      "pros": [...], "cons": [...],
      "score": { overall, skills_match, experience_relevance },
      "quality": "Excellent|Good|Average|Poor",
      "recommendations": [...]
    }
  }
}`}</code></pre>
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-semibold">Controller:</span> <code className="bg-slate-100 px-1 rounded">ResumeParseApiController@generateReport</code>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Cover Letters */}
        <section id="cover-letters" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. Cover Letters</h2>
          </div>

          <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Method</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Endpoint</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/cover-letters</td><td className="px-3 py-2">List all cover letters</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/cover-letters</td><td className="px-3 py-2">Create cover letter config</td></tr>
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-bold rounded">PUT</span></td><td className="px-3 py-2 font-mono">/cover-letters/{`{id}`}</td><td className="px-3 py-2">Update cover letter config</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">DEL</span></td><td className="px-3 py-2 font-mono">/cover-letters/{`{id}`}</td><td className="px-3 py-2">Delete cover letter</td></tr>
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/cover-letters-generate</td><td className="px-3 py-2">Generate cover letter using AI</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600"><strong>Controller:</strong> CoverLetterApiController | <strong>Service:</strong> CoverLetterService@generate</p>
        </section>

        {/* 8. Job Search Engine */}
        <section id="job-search" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8. Job Search Engine</h2>
          </div>

          <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Method</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Endpoint</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/job-engine</td><td className="px-3 py-2">List job searches</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/job-engine</td><td className="px-3 py-2">Create job search config</td></tr>
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/job-engine/{`{id}`}</td><td className="px-3 py-2">Get & trigger job fetch</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/job-engine/search</td><td className="px-3 py-2">Search jobs via BrightData API</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600"><strong>Controller:</strong> JobEngineApiController</p>
        </section>

        {/* 9. LinkedIn AI Analysis */}
        <section id="linkedin-ai" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">9. LinkedIn AI Analysis</h2>
          </div>

          <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Method</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Endpoint</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/linkedin-profile-ai</td><td className="px-3 py-2">Get latest LinkedIn profile</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/linkedin-profile-ai</td><td className="px-3 py-2">Create LinkedIn profile entry</td></tr>
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/linkedin-profile-ai/snapshot</td><td className="px-3 py-2">Retrieve profile snapshot from BrightData</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/linkedin-profile-ai/analyze</td><td className="px-3 py-2">Analyze LinkedIn profile with AI</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600"><strong>Controller:</strong> LinkedInProfileAiApiController</p>
        </section>

        {/* 10. Interview Practice */}
        <section id="interview-practice" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">10. Interview Practice</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="font-bold text-rose-900 mb-2">Role Play Categories</h3>
              <p className="text-xs text-slate-700 mb-2">GET /role-play-categories</p>
              <p className="text-xs text-slate-500">Query: search</p>
              <p className="text-xs text-slate-500 mt-1">RolePlayApiController@category</p>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="font-bold text-rose-900 mb-2">Role Play Use Cases</h3>
              <p className="text-xs text-slate-700 mb-2">GET /role-play-use-cases</p>
              <p className="text-xs text-slate-500">Query: search, category_id</p>
              <p className="text-xs text-slate-500 mt-1">RolePlayApiController@useCases</p>
            </div>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="font-bold text-rose-900 mb-2">Practices</h3>
              <p className="text-xs text-slate-700 mb-2">GET/POST /practices</p>
              <p className="text-xs text-slate-500">User practice sessions</p>
              <p className="text-xs text-slate-500 mt-1">PracticeApiController</p>
            </div>
          </div>
        </section>

        {/* 11. Admin APIs */}
        <section id="admin-apis" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">11. Admin APIs</h2>
            </div>
            <div className="flex flex-wrap gap-2 ml-0 sm:ml-13">
              <span className="px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded">Base: /admin</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
            <table className="w-full text-xs sm:text-sm min-w-[600px]">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Method</th>
                  <th className="px-3 py-2 text-left font-semibold">Endpoint</th>
                  <th className="px-3 py-2 text-left font-semibold">Description</th>
                  <th className="px-3 py-2 text-left font-semibold">Controller</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/admin/login</td><td className="px-3 py-2">Admin login</td><td className="px-3 py-2 font-mono text-xs">Admin\AuthApiController</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/admin/profile</td><td className="px-3 py-2">Get admin profile</td><td className="px-3 py-2 font-mono text-xs">Admin\ProfileApiController</td></tr>
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/admin/users</td><td className="px-3 py-2">List all users</td><td className="px-3 py-2 font-mono text-xs">Admin\UserApiController</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/admin/users/{`{id}`}</td><td className="px-3 py-2">Get user details</td><td className="px-3 py-2 font-mono text-xs">Admin\UserApiController</td></tr>
                <tr><td className="px-3 py-2">CRUD</td><td className="px-3 py-2 font-mono">/admin/role-play-categories</td><td className="px-3 py-2">Manage categories</td><td className="px-3 py-2 font-mono text-xs">Admin\RolePlayCategoryApiController</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2">CRUD</td><td className="px-3 py-2 font-mono">/admin/role-play-use-cases</td><td className="px-3 py-2">Manage use cases</td><td className="px-3 py-2 font-mono text-xs">Admin\RolePlayUseCaseApiController</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 12. Akool Avatar Integration */}
        <section id="akool" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">12. Akool Avatar Integration</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">Base: /akool</span>
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">No Auth Required</span>
            </div>
          </div>

          <div className="text-xs text-slate-500 mb-2 sm:hidden">Scroll horizontally</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-purple-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-purple-900">Method</th>
                  <th className="px-3 py-2 text-left font-semibold text-purple-900">Endpoint</th>
                  <th className="px-3 py-2 text-left font-semibold text-purple-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 text-slate-900">
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/akool/generate-token</td><td className="px-3 py-2">Generate Akool API token</td></tr>
                <tr className="bg-purple-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">GET</span></td><td className="px-3 py-2 font-mono">/akool/talking-avatars</td><td className="px-3 py-2">Get list of available avatars</td></tr>
                <tr><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/akool/create-session</td><td className="px-3 py-2">Create live avatar session</td></tr>
                <tr className="bg-purple-50"><td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">POST</span></td><td className="px-3 py-2 font-mono">/akool/close-session</td><td className="px-3 py-2">Close live avatar session</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 mt-2"><strong>Controller:</strong> Akool\AkollApiController</p>
        </section>

        {/* 13. Response Format */}
        <section id="response-format" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">13. Response Format</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Success Response</h3>
              <pre className="bg-green-900 text-green-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "success": true,
  "message": "string",
  "data": { ... } | [ ... ]
}`}</code></pre>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Error Response</h3>
              <pre className="bg-red-900 text-red-100 p-3 rounded-lg text-xs overflow-x-auto"><code>{`{
  "success": false,
  "message": "string",
  "error": "string (debug only)"
}`}</code></pre>
            </div>
          </div>

          <h3 className="font-semibold text-slate-800 mb-2">HTTP Status Codes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            <div className="bg-green-50 px-3 py-2 rounded border border-green-200 text-center"><span className="font-bold text-green-700">200</span><p className="text-xs text-green-600">Success</p></div>
            <div className="bg-green-50 px-3 py-2 rounded border border-green-200 text-center"><span className="font-bold text-green-700">201</span><p className="text-xs text-green-600">Created</p></div>
            <div className="bg-amber-50 px-3 py-2 rounded border border-amber-200 text-center"><span className="font-bold text-amber-700">400</span><p className="text-xs text-amber-600">Bad Request</p></div>
            <div className="bg-red-50 px-3 py-2 rounded border border-red-200 text-center"><span className="font-bold text-red-700">401</span><p className="text-xs text-red-600">Unauthorized</p></div>
            <div className="bg-red-50 px-3 py-2 rounded border border-red-200 text-center"><span className="font-bold text-red-700">403</span><p className="text-xs text-red-600">Forbidden</p></div>
            <div className="bg-red-50 px-3 py-2 rounded border border-red-200 text-center"><span className="font-bold text-red-700">404</span><p className="text-xs text-red-600">Not Found</p></div>
            <div className="bg-orange-50 px-3 py-2 rounded border border-orange-200 text-center"><span className="font-bold text-orange-700">422</span><p className="text-xs text-orange-600">Validation Error</p></div>
            <div className="bg-red-50 px-3 py-2 rounded border border-red-200 text-center"><span className="font-bold text-red-700">500</span><p className="text-xs text-red-600">Server Error</p></div>
          </div>
        </section>

        {/* 14. External Services */}
        <section id="external-services" className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 sm:p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">14. External Service Integrations</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="font-bold text-emerald-900 mb-2">OpenAI (GPT-4o-mini)</h3>
              <p className="text-sm text-emerald-800 mb-2">Resume parsing, cover letter generation, profile analysis</p>
              <p className="text-xs text-emerald-600">ResumeParseService, CoverLetterService, LinkedInProfileAiApiController</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">BrightData</h3>
              <p className="text-sm text-blue-800 mb-2">LinkedIn profile scraping, job search</p>
              <p className="text-xs text-blue-600">OnboardingApiController, JobEngineApiController, LinkedInProfileAiApiController</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-2">Akool</h3>
              <p className="text-sm text-purple-800 mb-2">Live AI avatars for interview practice</p>
              <p className="text-xs text-purple-600">AkollApiController</p>
            </div>
            <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
              <h3 className="font-bold text-sky-900 mb-2">Job Scraper API</h3>
              <p className="text-sm text-sky-800 mb-2">Job listing retrieval</p>
              <p className="text-xs text-sky-600">JobEngineApiController</p>
            </div>
          </div>
        </section>

        {/* File Paths Reference */}
        <section className="bg-slate-800 rounded-xl shadow-sm p-4 sm:p-6">
          <h2 className="text-xl font-bold text-white mb-4">File Paths Reference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span className="text-slate-400">Routes</span><code className="text-emerald-400 break-all">routes/api.php</code></div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span className="text-slate-400">Controllers</span><code className="text-emerald-400 break-all">app/Http/Controllers/Api/</code></div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span className="text-slate-400">Admin Controllers</span><code className="text-emerald-400 break-all">app/Http/Controllers/Api/Admin/</code></div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span className="text-slate-400">Akool Controllers</span><code className="text-emerald-400 break-all">app/Http/Controllers/Api/Akool/</code></div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span className="text-slate-400">Services</span><code className="text-emerald-400 break-all">app/Services/</code></div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1"><span className="text-slate-400">Models</span><code className="text-emerald-400 break-all">app/Models/</code></div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Generated on: 2025-12-06 | Source: Laravel controllers and routes</p>
        </section>
      </div>
    </div>
  );
}
