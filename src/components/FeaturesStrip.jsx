function FeatureItem({ icon, title, description }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-2xl bg-white p-3 shadow-sm transition hover:shadow-md sm:p-4 lg:p-5">
      <div className="flex h-full items-start gap-2.5 sm:gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#e6f0fb] text-[#1e3a8a] sm:h-10 sm:w-10 lg:h-11 lg:w-11">
          <div className="h-4 w-4 sm:h-5 sm:w-5">{icon}</div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-start">
          <h4 className="mb-1 text-[12px] font-semibold leading-4 text-[#1f2340] sm:text-[13px] sm:leading-5 lg:text-[14px]">
            {title}
          </h4>

          <p className="text-[10px] leading-4 text-[#64748b] sm:text-[11px] sm:leading-5 lg:text-[12px] lg:leading-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesStrip() {
  const features = [
    {
      id: 1,
      title: "Fast Data Delivery",
      description: "Instant access to purchased datasets",
      icon: (
        <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Secure Payments",
      description: "Safe and encrypted transactions",
      icon: (
        <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l7 4v5c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-4zm-1 10l-2-2-1.5 1.5L11 15l6-6-1.5-1.5L11 12z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Premium Data",
      description: "High-quality verified business datasets",
      icon: (
        <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21h4V10H2v11zm7 0h9a3 3 0 001.8-5.4l-1.2-.9a3 3 0 00-1.8-.6H14V7.5A2.5 2.5 0 0011.5 5L9 10v11z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Admin Verified",
      description: "All datasets are collected & verified by admin",
      icon: (
        <svg className="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.3l-6.2 3.7 1.6-7.1L2 9.2l7.2-.6L12 2l2.8 6.6 7.2.6-5.4 4.7 1.6 7.1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-10 my-6 w-full sm:my-8 lg:my-10">
      <div className="grid w-full grid-cols-2 items-stretch gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {features.map((item) => (
          <div key={item.id} className="h-full">
            <FeatureItem
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
}