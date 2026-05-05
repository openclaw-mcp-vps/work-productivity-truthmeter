export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Analytics
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          The Productivity{' '}
          <span className="text-[#58a6ff]">Truth Meter</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Anonymously track actual vs reported work hours. Reveal real industry patterns and give HR teams the data they need to make honest decisions.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19/month
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No identity required. Cancel anytime.</p>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          { value: '12,400+', label: 'Hours Tracked' },
          { value: '98%', label: 'Anonymous' },
          { value: '340+', label: 'Teams Enrolled' },
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
            <div className="text-sm text-[#8b949e] mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to surface real productivity data.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited anonymous submissions',
              'Real-time analytics dashboard',
              'Team comparison reports',
              'CSV & API data export',
              'Priority email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How is anonymity guaranteed?',
              a: 'All submissions are stripped of identifying metadata before storage. We never collect names, emails, or device fingerprints — only aggregated time data.',
            },
            {
              q: 'Who is this built for?',
              a: 'HR teams, engineering managers, and productivity consultants who need honest data to benchmark workloads and spot burnout before it happens.',
            },
            {
              q: 'Can I cancel my subscription?',
              a: 'Yes. Cancel anytime from your billing portal with one click. You keep access until the end of your billing period.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} WorkTruth. All rights reserved.
      </footer>
    </main>
  )
}
