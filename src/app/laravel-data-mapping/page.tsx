export default function LaravelDataMapping() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2">
            Laravel Data Mapping
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            JRN-API Database Schema Documentation - Auto-generated from Laravel migrations and models
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
            Table of Contents
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            <a href="#users-auth" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">1. Users &amp; Authentication</a>
            <a href="#user-profile" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">2. User Profile &amp; Details</a>
            <a href="#resume-data" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">3. Resume Data</a>
            <a href="#cover-letters" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">4. Cover Letters</a>
            <a href="#ats-scoring" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">5. ATS Scoring</a>
            <a href="#interview-practice" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">6. Interview Practice</a>
            <a href="#job-search" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">7. Job Search</a>
            <a href="#linkedin-ai" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">8. LinkedIn AI</a>
            <a href="#system-tables" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">9. System Tables</a>
            <a href="#models-reference" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">10. Models Reference</a>
            <a href="#erd" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">11. Entity Relationship Diagram</a>
            <a href="#migration-history" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">12. Migration History</a>
          </div>
        </div>

        {/* Section 1: Users & Authentication */}
        <div id="users-auth" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            1. Users &amp; Authentication
          </h2>

          {/* users table */}
          <div className="mb-8">
            <div className="bg-indigo-50 rounded-lg p-3 sm:p-4 mb-4 border border-indigo-200">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900">users</h3>
              <p className="text-sm text-indigo-700">Core user table for authentication and identity.</p>
            </div>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally to see more →</div>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-xs sm:text-sm min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Nullable</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Default</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-900">
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">No</td><td className="px-3 py-2">auto</td><td className="px-3 py-2">Primary key</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">first_name</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">User&apos;s first name</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">last_name</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">User&apos;s last name</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">email</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Unique email address</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">email_verified_at</td><td className="px-3 py-2 whitespace-nowrap">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Email verification timestamp</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">phone</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Phone number</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">phone_verified_at</td><td className="px-3 py-2 whitespace-nowrap">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Phone verification timestamp</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">type</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">&apos;user&apos;</td><td className="px-3 py-2">User type: &apos;user&apos; or &apos;admin&apos;</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">password</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Hashed password</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">remember_token</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Session remember token</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">qr_code</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Path to QR code image</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">balance</td><td className="px-3 py-2 whitespace-nowrap">decimal(15,2)</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">User account balance</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">created_at</td><td className="px-3 py-2 whitespace-nowrap">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Creation timestamp</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">updated_at</td><td className="px-3 py-2 whitespace-nowrap">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Last update timestamp</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-sm text-slate-700"><strong>Model:</strong> <code className="bg-slate-200 px-1 rounded">App\Models\User</code></p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li><strong>Traits:</strong> HasFactory, Notifiable, HasApiTokens</li>
                <li><strong>Hidden:</strong> password, remember_token</li>
                <li><strong>Casts:</strong> email_verified_at → datetime, password → hashed</li>
                <li><strong>Relationships:</strong> hasOne(UserDetail)</li>
              </ul>
            </div>
          </div>

          {/* password_reset_tokens table */}
          <div className="mb-8">
            <div className="bg-slate-100 rounded-lg p-3 sm:p-4 mb-4 border border-slate-300">
              <h3 className="text-lg font-bold text-slate-900">password_reset_tokens</h3>
              <p className="text-sm text-slate-600">Stores password reset tokens.</p>
            </div>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-xs sm:text-sm min-w-[500px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Nullable</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Default</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-900">
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">email</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Primary key (email)</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">token</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Reset token</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">created_at</td><td className="px-3 py-2 whitespace-nowrap">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Token creation time</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* sessions table */}
          <div className="mb-8">
            <div className="bg-slate-100 rounded-lg p-3 sm:p-4 mb-4 border border-slate-300">
              <h3 className="text-lg font-bold text-slate-900">sessions</h3>
              <p className="text-sm text-slate-600">Stores user session data.</p>
            </div>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-xs sm:text-sm min-w-[500px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Nullable</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Default</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-900">
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Primary key (session ID)</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">user_id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">FK → users.id</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">ip_address</td><td className="px-3 py-2 whitespace-nowrap">string(45)</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Client IP address</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">user_agent</td><td className="px-3 py-2 whitespace-nowrap">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Browser user agent</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">payload</td><td className="px-3 py-2 whitespace-nowrap">longText</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Session payload</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">last_activity</td><td className="px-3 py-2 whitespace-nowrap">integer</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Last activity timestamp</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* personal_access_tokens table */}
          <div>
            <div className="bg-slate-100 rounded-lg p-3 sm:p-4 mb-4 border border-slate-300">
              <h3 className="text-lg font-bold text-slate-900">personal_access_tokens</h3>
              <p className="text-sm text-slate-600">Laravel Sanctum API tokens.</p>
            </div>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-xs sm:text-sm min-w-[500px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Nullable</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Default</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-900">
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">No</td><td className="px-3 py-2">auto</td><td className="px-3 py-2">Primary key</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">tokenable_type</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Polymorphic type</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">tokenable_id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Polymorphic ID</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">name</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Token name</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">token</td><td className="px-3 py-2 whitespace-nowrap">string(64)</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">Hashed token</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">abilities</td><td className="px-3 py-2 whitespace-nowrap">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Token abilities</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">last_used_at</td><td className="px-3 py-2 whitespace-nowrap">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Last usage time</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">expires_at</td><td className="px-3 py-2 whitespace-nowrap">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Expiration time</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">created_at</td><td className="px-3 py-2">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Creation timestamp</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">updated_at</td><td className="px-3 py-2">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Last update timestamp</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 2: User Profile & Details */}
        <div id="user-profile" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            2. User Profile &amp; Details
          </h2>

          {/* user_details table */}
          <div>
            <div className="bg-green-50 rounded-lg p-3 sm:p-4 mb-4 border border-green-200">
              <h3 className="text-lg sm:text-xl font-bold text-green-900">user_details</h3>
              <p className="text-sm text-green-700">Extended user profile information.</p>
            </div>
            <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-xs sm:text-sm min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Nullable</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Default</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-900">
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">No</td><td className="px-3 py-2">auto</td><td className="px-3 py-2">Primary key</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">user_id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td><td className="px-3 py-2">FK → users.id (CASCADE)</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">dob</td><td className="px-3 py-2 whitespace-nowrap">date</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Date of birth</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">gender</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Gender</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">address</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Address</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">bio</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">User biography</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">profile_picture</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Profile image path</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">current_position</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Current job title</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">experience_level</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Experience level</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">industry</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Industry sector</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">desired_position</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Target job title</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">work_location_preference</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Remote/onsite preference</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">expected_salary_range</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Salary expectations</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">job_type_preferences</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Full-time/part-time</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">skills_technologies</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Skills list</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">primary_purpose_career_development</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Career development purpose</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">career_goals</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Career goals</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">motivates_professionally</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Professional motivations</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">areas_of_interest</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Interest areas</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">preferred_learning_methods</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Learning preferences</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">resume</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Resume file path</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">additional_notes</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Additional notes</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">video_introduction</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Video intro path</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">linkedin</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">LinkedIn URL</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">twitter</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Twitter URL</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">github</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">GitHub URL</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">personal_website</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Personal website URL</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">instagram</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Instagram URL</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">youtube</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">YouTube URL</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">behance</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Behance URL</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">dribbble</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Dribbble URL</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">step</td><td className="px-3 py-2">integer</td><td className="px-3 py-2">No</td><td className="px-3 py-2">1</td><td className="px-3 py-2">Onboarding step</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">status</td><td className="px-3 py-2">string</td><td className="px-3 py-2">No</td><td className="px-3 py-2">&apos;pending&apos;</td><td className="px-3 py-2">Profile status</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">resume_parsed</td><td className="px-3 py-2">longText</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Parsed resume JSON</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">resume_report</td><td className="px-3 py-2">longText</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">AI resume analysis JSON</td></tr>
                  <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">created_at</td><td className="px-3 py-2">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Creation timestamp</td></tr>
                  <tr><td className="px-3 py-2 font-mono text-indigo-600">updated_at</td><td className="px-3 py-2">timestamp</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Last update timestamp</td></tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-sm text-slate-700"><strong>Model:</strong> <code className="bg-slate-200 px-1 rounded">App\Models\UserDetail</code></p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li><strong>Casts:</strong> resume_parsed → array, resume_report → array</li>
                <li><strong>Relationships:</strong> belongsTo(User)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Resume Data */}
        <div id="resume-data" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            3. Resume Data
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* education */}
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-2">education</h3>
              <p className="text-sm text-blue-800 mb-3">User education records.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-blue-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-blue-100 px-1 rounded">user_id</code> - FK → users.id</li>
                <li><code className="bg-blue-100 px-1 rounded">degree</code> - Degree name</li>
                <li><code className="bg-blue-100 px-1 rounded">specialization</code> - Field of study</li>
                <li><code className="bg-blue-100 px-1 rounded">institution</code> - School/university</li>
                <li><code className="bg-blue-100 px-1 rounded">start_date</code> / <code className="bg-blue-100 px-1 rounded">end_date</code></li>
                <li><code className="bg-blue-100 px-1 rounded">grade</code> - Grade/GPA</li>
                <li><code className="bg-blue-100 px-1 rounded">location</code> - Institution location</li>
                <li><code className="bg-blue-100 px-1 rounded">deleted_at</code> - Soft delete</li>
              </ul>
              <p className="mt-3 text-xs text-blue-800"><strong>Model:</strong> Education (Soft Deletes: Yes)</p>
            </div>

            {/* skills */}
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-lg font-bold text-purple-900 mb-2">skills</h3>
              <p className="text-sm text-purple-800 mb-3">User skills inventory.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-purple-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-purple-100 px-1 rounded">user_id</code> - FK → users.id</li>
                <li><code className="bg-purple-100 px-1 rounded">skill</code> - Skill name</li>
                <li><code className="bg-purple-100 px-1 rounded">category</code> - Skill category</li>
                <li><code className="bg-purple-100 px-1 rounded">level</code> - Proficiency level</li>
              </ul>
              <p className="mt-3 text-xs text-purple-800"><strong>Model:</strong> Skill</p>
            </div>

            {/* experiences */}
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 className="text-lg font-bold text-orange-900 mb-2">experiences</h3>
              <p className="text-sm text-orange-800 mb-3">Work experience records.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-orange-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-orange-100 px-1 rounded">user_id</code> - FK → users.id</li>
                <li><code className="bg-orange-100 px-1 rounded">job_title</code> - Job title</li>
                <li><code className="bg-orange-100 px-1 rounded">company</code> - Company name</li>
                <li><code className="bg-orange-100 px-1 rounded">employment_type</code> - Full/part-time</li>
                <li><code className="bg-orange-100 px-1 rounded">start_date</code> / <code className="bg-orange-100 px-1 rounded">end_date</code></li>
                <li><code className="bg-orange-100 px-1 rounded">responsibilities</code> - Job duties</li>
                <li><code className="bg-orange-100 px-1 rounded">technologies</code> - Tech used</li>
                <li><code className="bg-orange-100 px-1 rounded">location</code> - Job location</li>
              </ul>
              <p className="mt-3 text-xs text-orange-800"><strong>Model:</strong> Experience</p>
            </div>

            {/* projects */}
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h3 className="text-lg font-bold text-teal-900 mb-2">projects</h3>
              <p className="text-sm text-teal-800 mb-3">Portfolio projects.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-teal-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-teal-100 px-1 rounded">user_id</code> - FK → users.id</li>
                <li><code className="bg-teal-100 px-1 rounded">title</code> - Project title</li>
                <li><code className="bg-teal-100 px-1 rounded">description</code> - Description</li>
                <li><code className="bg-teal-100 px-1 rounded">role</code> - User&apos;s role</li>
                <li><code className="bg-teal-100 px-1 rounded">technologies</code> - Tech used</li>
                <li><code className="bg-teal-100 px-1 rounded">link</code> - Project URL</li>
                <li><code className="bg-teal-100 px-1 rounded">duration</code> - Duration</li>
                <li><code className="bg-teal-100 px-1 rounded">team_size</code> - Team size</li>
              </ul>
              <p className="mt-3 text-xs text-teal-800"><strong>Model:</strong> Project</p>
            </div>

            {/* communications */}
            <div className="bg-pink-50 rounded-lg p-4 border border-pink-200">
              <h3 className="text-lg font-bold text-pink-900 mb-2">communications</h3>
              <p className="text-sm text-pink-800 mb-3">Language proficiency records.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-pink-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-pink-100 px-1 rounded">user_id</code> - FK → users.id</li>
                <li><code className="bg-pink-100 px-1 rounded">language</code> - Language name</li>
                <li><code className="bg-pink-100 px-1 rounded">proficiency</code> - Proficiency level</li>
              </ul>
              <p className="mt-3 text-xs text-pink-800"><strong>Model:</strong> Communication</p>
            </div>

            {/* curricula */}
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h3 className="text-lg font-bold text-yellow-900 mb-2">curricula</h3>
              <p className="text-sm text-yellow-800 mb-3">Learning curriculum/courses.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-yellow-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-yellow-100 px-1 rounded">user_id</code> - FK → users.id</li>
                <li><code className="bg-yellow-100 px-1 rounded">title</code> - Curriculum title</li>
                <li><code className="bg-yellow-100 px-1 rounded">description</code> - Description</li>
              </ul>
              <p className="mt-3 text-xs text-yellow-800"><strong>Model:</strong> Curriculum</p>
            </div>
          </div>
        </div>

        {/* Section 4: Cover Letters */}
        <div id="cover-letters" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            4. Cover Letters
          </h2>

          <div className="bg-cyan-50 rounded-lg p-3 sm:p-4 mb-4 border border-cyan-200">
            <h3 className="text-lg sm:text-xl font-bold text-cyan-900">cover_letters</h3>
            <p className="text-sm text-cyan-700">AI-generated cover letter configurations and outputs.</p>
          </div>
          <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">Primary key</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">user_id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">FK → users.id (CASCADE)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">name</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Cover letter name</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">company</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Target company</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">role</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Target role</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">description</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Job description</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">skills</td><td className="px-3 py-2">json</td><td className="px-3 py-2">Skills to highlight</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">experience_years</td><td className="px-3 py-2">unsignedInt</td><td className="px-3 py-2">Years of experience</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">max_words</td><td className="px-3 py-2">unsignedInt</td><td className="px-3 py-2">Word limit</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">tone</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Writing tone</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">language</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Output language</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">style</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Writing style</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">structure</td><td className="px-3 py-2">json</td><td className="px-3 py-2">Letter structure sections</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">use_bullets</td><td className="px-3 py-2">boolean</td><td className="px-3 py-2">Use bullet points (default: false)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">closing</td><td className="px-3 py-2">text</td><td className="px-3 py-2">Closing paragraph</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">sign_off_name</td><td className="px-3 py-2">string</td><td className="px-3 py-2">Sign-off name</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">model</td><td className="px-3 py-2">string</td><td className="px-3 py-2">AI model (gpt-4o-mini)</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">temperature</td><td className="px-3 py-2">float(8,2)</td><td className="px-3 py-2">AI temperature (default: 0.6)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600">generated_response</td><td className="px-3 py-2">longText</td><td className="px-3 py-2">Generated cover letter JSON</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600">deleted_at</td><td className="px-3 py-2">timestamp</td><td className="px-3 py-2">Soft delete timestamp</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-700"><strong>Model:</strong> <code className="bg-slate-200 px-1 rounded">App\Models\CoverLetter</code></p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><strong>Soft Deletes:</strong> Yes</li>
              <li><strong>Casts:</strong> skills → array, structure → array</li>
              <li><strong>Relationships:</strong> belongsTo(User)</li>
            </ul>
          </div>
        </div>

        {/* Section 5: ATS Scoring */}
        <div id="ats-scoring" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            5. ATS Scoring
          </h2>

          <div className="bg-amber-50 rounded-lg p-3 sm:p-4 mb-4 border border-amber-200">
            <h3 className="text-lg sm:text-xl font-bold text-amber-900">ats_scores</h3>
            <p className="text-sm text-amber-700">Resume ATS compatibility scores.</p>
          </div>
          <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Default</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">auto</td><td className="px-3 py-2">Primary key</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">user_id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">-</td><td className="px-3 py-2">FK → users.id (CASCADE)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">job_description</td><td className="px-3 py-2 whitespace-nowrap">text</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Target job description</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">template</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">NULL</td><td className="px-3 py-2">Resume template used</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">keyword_match</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">0</td><td className="px-3 py-2">Keyword match score</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">skill_match</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">0</td><td className="px-3 py-2">Skill match score</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">formatting_issues</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">0</td><td className="px-3 py-2">Formatting issues count</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">length_issues</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">0</td><td className="px-3 py-2">Length issues count</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">score</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">0</td><td className="px-3 py-2">Overall ATS score</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-700"><strong>Model:</strong> <code className="bg-slate-200 px-1 rounded">App\Models\AtsScores</code></p>
            <p className="text-sm text-slate-600 mt-1"><strong>Relationships:</strong> belongsTo(User)</p>
          </div>
        </div>

        {/* Section 6: Interview Practice */}
        <div id="interview-practice" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            6. Interview Practice
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* role_play_categories */}
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-200">
              <h3 className="text-lg font-bold text-rose-900 mb-2">role_play_categories</h3>
              <p className="text-sm text-rose-800 mb-3">Categories for interview practice scenarios.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-rose-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-rose-100 px-1 rounded">name</code> - Category name</li>
                <li><code className="bg-rose-100 px-1 rounded">status</code> - enum: active/inactive</li>
                <li><code className="bg-rose-100 px-1 rounded">deleted_at</code> - Soft delete</li>
              </ul>
              <p className="mt-3 text-xs text-rose-800"><strong>Model:</strong> RolePlayCategory</p>
              <p className="text-xs text-rose-800">hasMany(RolePlayUseCase)</p>
            </div>

            {/* role_play_use_cases */}
            <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
              <h3 className="text-lg font-bold text-violet-900 mb-2">role_play_use_cases</h3>
              <p className="text-sm text-violet-800 mb-3">Interview practice scenarios and prompts.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-violet-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-violet-100 px-1 rounded">name</code> - Use case name</li>
                <li><code className="bg-violet-100 px-1 rounded">category_id</code> - FK → categories</li>
                <li><code className="bg-violet-100 px-1 rounded">use_case_type</code> - Type</li>
                <li><code className="bg-violet-100 px-1 rounded">prompt</code> - AI prompt</li>
                <li><code className="bg-violet-100 px-1 rounded">question</code> - Questions JSON</li>
                <li><code className="bg-violet-100 px-1 rounded">time</code> - Time limit</li>
                <li><code className="bg-violet-100 px-1 rounded">status</code> - enum</li>
              </ul>
              <p className="mt-3 text-xs text-violet-800"><strong>Model:</strong> RolePlayUseCase</p>
              <p className="text-xs text-violet-800">Casts: question → array</p>
            </div>

            {/* practices */}
            <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">practices</h3>
              <p className="text-sm text-emerald-800 mb-3">User practice sessions.</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-900">
                <li><code className="bg-emerald-100 px-1 rounded">id</code> - bigint (PK)</li>
                <li><code className="bg-emerald-100 px-1 rounded">user_id</code> - FK → users</li>
                <li><code className="bg-emerald-100 px-1 rounded">role_play_use_case_id</code> - FK</li>
                <li><code className="bg-emerald-100 px-1 rounded">video</code> - Recording path</li>
                <li><code className="bg-emerald-100 px-1 rounded">user_input</code> - Responses JSON</li>
                <li><code className="bg-emerald-100 px-1 rounded">ai_response</code> - Feedback JSON</li>
                <li><code className="bg-emerald-100 px-1 rounded">status</code> - enum</li>
              </ul>
              <p className="mt-3 text-xs text-emerald-800"><strong>Model:</strong> Practice</p>
              <p className="text-xs text-emerald-800">Casts: user_input, ai_response → array</p>
            </div>
          </div>
        </div>

        {/* Section 7: Job Search */}
        <div id="job-search" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            7. Job Search
          </h2>

          <div className="bg-sky-50 rounded-lg p-3 sm:p-4 mb-4 border border-sky-200">
            <h3 className="text-lg sm:text-xl font-bold text-sky-900">job_engines</h3>
            <p className="text-sm text-sky-700">Job search configurations and results.</p>
          </div>
          <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs sm:text-sm min-w-[400px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">Primary key</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">user_id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">FK → users.id (CASCADE)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">location</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Job location</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">keyword</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Search keyword</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">country</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Country filter</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">time_range</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Posted time range</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">job_type</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Job type filter</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">experience_level</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Experience level filter</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">remote</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Remote filter</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">company</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Company filter</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">location_radius</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">Location radius</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">snapshot_id</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">API snapshot ID</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">jobs</td><td className="px-3 py-2 whitespace-nowrap">longText</td><td className="px-3 py-2">Job results JSON</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">status</td><td className="px-3 py-2 whitespace-nowrap">enum</td><td className="px-3 py-2">active/inactive (default: inactive)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">api_status</td><td className="px-3 py-2 whitespace-nowrap">boolean</td><td className="px-3 py-2">API call status (default: false)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-700"><strong>Model:</strong> <code className="bg-slate-200 px-1 rounded">App\Models\JobEngine</code></p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><strong>Soft Deletes:</strong> Yes</li>
              <li><strong>Casts:</strong> snapshot_id → array, jobs → array</li>
            </ul>
          </div>
        </div>

        {/* Section 8: LinkedIn AI */}
        <div id="linkedin-ai" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            8. LinkedIn AI
          </h2>

          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 border border-blue-200">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900">linked_in_profile_ais</h3>
            <p className="text-sm text-blue-700">LinkedIn profile analysis and optimization.</p>
          </div>
          <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs sm:text-sm min-w-[400px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Column</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Type</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">Primary key</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">user_id</td><td className="px-3 py-2 whitespace-nowrap">bigint</td><td className="px-3 py-2">FK → users.id (CASCADE)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">profile</td><td className="px-3 py-2 whitespace-nowrap">longText</td><td className="px-3 py-2">LinkedIn profile JSON</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">ai_report</td><td className="px-3 py-2 whitespace-nowrap">longText</td><td className="px-3 py-2">AI analysis report JSON</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">snapshot_id</td><td className="px-3 py-2 whitespace-nowrap">string</td><td className="px-3 py-2">API snapshot ID</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">status</td><td className="px-3 py-2 whitespace-nowrap">enum</td><td className="px-3 py-2">active/inactive (default: inactive)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">api_status</td><td className="px-3 py-2 whitespace-nowrap">boolean</td><td className="px-3 py-2">API call status (default: false)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-700"><strong>Model:</strong> <code className="bg-slate-200 px-1 rounded">App\Models\LinkedInProfileAi</code></p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li><strong>Soft Deletes:</strong> Yes</li>
              <li><strong>Casts:</strong> api_status → integer</li>
            </ul>
          </div>
        </div>

        {/* Section 9: System Tables */}
        <div id="system-tables" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            9. System Tables
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">cache</h3>
              <p className="text-xs text-gray-700 mb-2">Laravel cache storage</p>
              <ul className="text-xs space-y-1 text-gray-900">
                <li><code className="bg-gray-200 px-1 rounded">key</code> - PK</li>
                <li><code className="bg-gray-200 px-1 rounded">value</code> - mediumText</li>
                <li><code className="bg-gray-200 px-1 rounded">expiration</code> - integer</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">cache_locks</h3>
              <p className="text-xs text-gray-700 mb-2">Cache lock management</p>
              <ul className="text-xs space-y-1 text-gray-900">
                <li><code className="bg-gray-200 px-1 rounded">key</code> - PK</li>
                <li><code className="bg-gray-200 px-1 rounded">owner</code> - string</li>
                <li><code className="bg-gray-200 px-1 rounded">expiration</code> - integer</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">jobs</h3>
              <p className="text-xs text-gray-700 mb-2">Laravel queue jobs</p>
              <ul className="text-xs space-y-1 text-gray-900">
                <li><code className="bg-gray-200 px-1 rounded">id</code> - PK</li>
                <li><code className="bg-gray-200 px-1 rounded">queue</code> - Queue name</li>
                <li><code className="bg-gray-200 px-1 rounded">payload</code> - longText</li>
                <li><code className="bg-gray-200 px-1 rounded">attempts</code> - tinyInt</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">job_batches</h3>
              <p className="text-xs text-gray-700 mb-2">Laravel job batches</p>
              <ul className="text-xs space-y-1 text-gray-900">
                <li><code className="bg-gray-200 px-1 rounded">id</code> - PK</li>
                <li><code className="bg-gray-200 px-1 rounded">name</code> - Batch name</li>
                <li><code className="bg-gray-200 px-1 rounded">total_jobs</code> / <code className="bg-gray-200 px-1 rounded">pending_jobs</code></li>
                <li><code className="bg-gray-200 px-1 rounded">failed_jobs</code></li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">failed_jobs</h3>
              <p className="text-xs text-gray-700 mb-2">Failed queue jobs</p>
              <ul className="text-xs space-y-1 text-gray-900">
                <li><code className="bg-gray-200 px-1 rounded">id</code> - PK</li>
                <li><code className="bg-gray-200 px-1 rounded">uuid</code> - Unique ID</li>
                <li><code className="bg-gray-200 px-1 rounded">payload</code> - Job data</li>
                <li><code className="bg-gray-200 px-1 rounded">exception</code> - Error</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 10: Models Reference */}
        <div id="models-reference" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            10. Models Reference
          </h2>

          <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-indigo-900 whitespace-nowrap">Model</th>
                  <th className="px-3 py-2 text-left font-semibold text-indigo-900 whitespace-nowrap">Table</th>
                  <th className="px-3 py-2 text-left font-semibold text-indigo-900 whitespace-nowrap">Soft Deletes</th>
                  <th className="px-3 py-2 text-left font-semibold text-indigo-900">Key Casts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">User</td><td className="px-3 py-2 whitespace-nowrap">users</td><td className="px-3 py-2">No</td><td className="px-3 py-2">email_verified_at, password</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono whitespace-nowrap">UserDetail</td><td className="px-3 py-2 whitespace-nowrap">user_details</td><td className="px-3 py-2">No</td><td className="px-3 py-2">resume_parsed, resume_report</td></tr>
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">Education</td><td className="px-3 py-2 whitespace-nowrap">education</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">-</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono whitespace-nowrap">Skill</td><td className="px-3 py-2 whitespace-nowrap">skills</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td></tr>
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">Experience</td><td className="px-3 py-2 whitespace-nowrap">experiences</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono whitespace-nowrap">Project</td><td className="px-3 py-2 whitespace-nowrap">projects</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td></tr>
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">Communication</td><td className="px-3 py-2 whitespace-nowrap">communications</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono whitespace-nowrap">Curriculum</td><td className="px-3 py-2 whitespace-nowrap">curricula</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td></tr>
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">CoverLetter</td><td className="px-3 py-2 whitespace-nowrap">cover_letters</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">skills, structure</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono whitespace-nowrap">AtsScores</td><td className="px-3 py-2 whitespace-nowrap">ats_scores</td><td className="px-3 py-2">No</td><td className="px-3 py-2">-</td></tr>
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">RolePlayCategory</td><td className="px-3 py-2 whitespace-nowrap">role_play_categories</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">-</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono whitespace-nowrap">RolePlayUseCase</td><td className="px-3 py-2 whitespace-nowrap">role_play_use_cases</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">question</td></tr>
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">Practice</td><td className="px-3 py-2 whitespace-nowrap">practices</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">user_input, ai_response</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono whitespace-nowrap">JobEngine</td><td className="px-3 py-2 whitespace-nowrap">job_engines</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">snapshot_id, jobs</td></tr>
                <tr><td className="px-3 py-2 font-mono whitespace-nowrap">LinkedInProfileAi</td><td className="px-3 py-2 whitespace-nowrap">linked_in_profile_ais</td><td className="px-3 py-2">Yes</td><td className="px-3 py-2">api_status</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 11: Entity Relationship Diagram */}
        <div id="erd" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 mb-6 sm:mb-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            11. Entity Relationship Diagram
          </h2>

          {/* Users Domain */}
          <div className="mb-8">
            <div className="bg-indigo-100 rounded-lg p-4 border-2 border-indigo-300 mb-4">
              <h3 className="text-lg font-bold text-indigo-900 mb-4 text-center">USERS DOMAIN</h3>

              {/* Core User */}
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold shadow-md">
                  users
                </div>
              </div>

              {/* 1:1 Arrow */}
              <div className="flex justify-center mb-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-indigo-400"></div>
                  <span className="text-xs text-indigo-700 font-semibold">1:1</span>
                  <div className="w-0.5 h-4 bg-indigo-400"></div>
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-indigo-400"></div>
                </div>
              </div>

              {/* User Details */}
              <div className="flex justify-center mb-4">
                <div className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold shadow-md">
                  user_details
                </div>
              </div>

              {/* 1:N Arrow */}
              <div className="flex justify-center mb-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-slate-400"></div>
                  <span className="text-xs text-slate-700 font-semibold">1:N (user_id FK)</span>
                  <div className="w-0.5 h-4 bg-slate-400"></div>
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-400"></div>
                </div>
              </div>

              {/* Resume Data Tables - Row 1 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div className="bg-blue-500 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">education</div>
                <div className="bg-purple-500 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">skills</div>
                <div className="bg-orange-500 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">experiences</div>
                <div className="bg-teal-500 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">projects</div>
              </div>

              {/* Resume Data Tables - Row 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <div className="bg-pink-500 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">communications</div>
                <div className="bg-yellow-600 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">curricula</div>
                <div className="bg-cyan-600 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">cover_letters</div>
                <div className="bg-amber-600 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">ats_scores</div>
              </div>

              {/* Feature Tables - Row 3 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-sky-600 text-white px-3 py-2 rounded text-center text-sm font-medium shadow">job_engines</div>
                <div className="bg-blue-700 text-white px-2 py-2 rounded text-center text-xs font-medium shadow">linked_in_profile_ais</div>
                <div className="bg-emerald-600 text-white px-3 py-2 rounded text-center text-sm font-medium shadow col-span-2 sm:col-span-1">practices</div>
              </div>
            </div>
          </div>

          {/* Interview Practice Domain */}
          <div className="mb-6">
            <div className="bg-rose-100 rounded-lg p-4 border-2 border-rose-300">
              <h3 className="text-lg font-bold text-rose-900 mb-4 text-center">INTERVIEW PRACTICE DOMAIN</h3>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Categories */}
                <div className="flex flex-col items-center">
                  <div className="bg-rose-600 text-white px-4 py-2 rounded-lg font-medium shadow">
                    role_play_categories
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-xs text-rose-700 font-semibold mr-2">1:N</span>
                    <div className="w-8 h-0.5 bg-rose-400"></div>
                    <div className="w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-rose-400"></div>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="flex flex-col items-center">
                  <div className="bg-violet-600 text-white px-4 py-2 rounded-lg font-medium shadow">
                    role_play_use_cases
                  </div>
                  <div className="text-xs text-violet-700 mt-2 font-semibold">
                    N:1 to practices
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-slate-100 rounded-lg p-4 border border-slate-300">
            <h4 className="font-semibold text-slate-900 mb-3">Relationship Legend</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-800">
              <div className="flex items-center gap-2">
                <span className="font-mono bg-slate-200 px-2 py-1 rounded">1:1</span>
                <span>One-to-One (users → user_details)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-slate-200 px-2 py-1 rounded">1:N</span>
                <span>One-to-Many (user → tables)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-slate-200 px-2 py-1 rounded">FK</span>
                <span>Foreign Key constraint</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 12: Migration History */}
        <div id="migration-history" className="bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4 sm:mb-6">
            12. Migration History
          </h2>

          <div className="text-xs text-slate-500 mb-2 sm:hidden">← Scroll horizontally →</div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-xs sm:text-sm min-w-[400px]">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">Migration</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-900">
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">0001_01_01_000000</td><td className="px-3 py-2">Create users, password_reset_tokens, sessions</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">0001_01_01_000001</td><td className="px-3 py-2">Create cache, cache_locks</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">0001_01_01_000002</td><td className="px-3 py-2">Create jobs, job_batches, failed_jobs</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_05_163303</td><td className="px-3 py-2">Create personal_access_tokens (Sanctum)</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_05_175108</td><td className="px-3 py-2">Create user_details</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_07_171726</td><td className="px-3 py-2">Create education</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_07_173630</td><td className="px-3 py-2">Create skills</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_07_175506</td><td className="px-3 py-2">Create communications</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_07_180428</td><td className="px-3 py-2">Create projects</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_07_181723</td><td className="px-3 py-2">Create experiences</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_07_182803</td><td className="px-3 py-2">Create ats_scores</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_09_165350</td><td className="px-3 py-2">Create curricula</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_12_140640</td><td className="px-3 py-2">Add type column to users</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_12_144455</td><td className="px-3 py-2">Create role_play_categories</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_12_145852</td><td className="px-3 py-2">Create role_play_use_cases</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_12_151821</td><td className="px-3 py-2">Create cover_letters</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_13_174847</td><td className="px-3 py-2">Add generation columns to cover_letters</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_14_185806</td><td className="px-3 py-2">Add generated_response to cover_letters</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_15_181609</td><td className="px-3 py-2">Add resume_parsed to user_details</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_08_16_074022</td><td className="px-3 py-2">Add resume_report to user_details</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_09_13_163345</td><td className="px-3 py-2">Create job_engines</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_09_13_164844</td><td className="px-3 py-2">Create linked_in_profile_ais</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_09_18_165538</td><td className="px-3 py-2">Add qr_code to users</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_09_25_174722</td><td className="px-3 py-2">Add balance to users</td></tr>
                <tr><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_09_27_170704</td><td className="px-3 py-2">Add question to role_play_use_cases</td></tr>
                <tr className="bg-slate-50"><td className="px-3 py-2 font-mono text-indigo-600 whitespace-nowrap">2025_10_09_153635</td><td className="px-3 py-2">Create practices</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-xs sm:text-sm text-slate-600">
              <strong>Generated on:</strong> 2025-12-06<br />
              <strong>Source:</strong> Laravel migrations in <code className="bg-slate-200 px-1 rounded">database/migrations/</code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
