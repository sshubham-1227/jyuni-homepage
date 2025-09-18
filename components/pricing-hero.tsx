export function PricingHero() {
  return (
    <section className="relative flex items-center justify-center py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 dark:bg-slate-900">
      {/* Background */}
      <div className="absolute inset-0 gradient-subtle-bg" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 bg-white/20 dark:bg-slate-900/50" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white dark:bg-slate-800 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50 mt-12">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-balance mb-6 text-slate-900 dark:text-white">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              pricing
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-pretty mb-8 leading-relaxed">
            Choose the plan that fits your practice size. All plans include HIPAA compliance, 24/7 support, and unlimited
            data storage.
          </p>
        </div>
      </div>
    </section>
  )
}
