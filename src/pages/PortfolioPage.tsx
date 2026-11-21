import React from 'react';

const flagshipHoldings = [
  {
    type: 'image' as const,
    imageSrc: '/images/sconetree.jpg',
    imageAlt: 'Scone woodland landscape',
    badge: 'Lorem Sector I',
    title: 'Lorem Ipsum Holding One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.',
    statOneLabel: 'Placeholder Metric A',
    statOneValue: '£000.0M',
    statTwoLabel: 'Placeholder Metric B',
    statTwoValue: '+00.0%',
  },
  {
    type: 'image' as const,
    imageSrc: '/images/sconepath.jpg',
    imageAlt: 'Scone agricultural field path',
    badge: 'Lorem Sector II',
    title: 'Lorem Ipsum Holding Two',
    description:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
    statOneLabel: 'Placeholder Metric A',
    statOneValue: '£00.0M',
    statTwoLabel: 'Placeholder Metric B',
    statTwoValue: '+00.0%',
  },
  {
    type: 'icon' as const,
    iconName: 'bolt',
    iconBannerTitle: 'Lorem Ipsum Block',
    badge: 'Lorem Sector III',
    title: 'Lorem Ipsum Holding Three',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed do eiusmod.',
    statOneLabel: 'Placeholder Metric A',
    statOneValue: '£000.0M',
    statTwoLabel: 'Placeholder Metric B',
    statTwoValue: '+00.0%',
  },
];

const ledgerRows = [
  {
    holding: 'Lorem Ipsum Position I',
    location: 'Lorem Ipsum Region A',
    sector: 'Lorem Sector I',
    vintage: '2026',
    metricA: '£00,000,000',
    metricB: '0.0% placeholder',
    metricC: '+00.0%',
  },
  {
    holding: 'Lorem Ipsum Position II',
    location: 'Lorem Ipsum Region B',
    sector: 'Lorem Sector II',
    vintage: '2026',
    metricA: '£00,000,000',
    metricB: '0.0% placeholder',
    metricC: '+00.0%',
  },
  {
    holding: 'Lorem Ipsum Position III',
    location: 'Lorem Ipsum Region C',
    sector: 'Lorem Sector III',
    vintage: '2026',
    metricA: '£00,000,000',
    metricB: '0.0% placeholder',
    metricC: '+00.0%',
  },
  {
    holding: 'Lorem Ipsum Position IV',
    location: 'Lorem Ipsum Region D',
    sector: 'Lorem Sector I',
    vintage: '2026',
    metricA: '£00,000,000',
    metricB: '0.0% placeholder',
    metricC: '+00.0%',
  },
];

export const PortfolioPage: React.FC = () => {
  return (
    <>
      {/* Hero Slide with Gradient Overlaid Background Image ONLY */}
      <section className="relative min-h-[520px] flex items-center bg-onyx-bg text-white overflow-hidden">
        <img
          src="/images/sconetree.jpg"
          alt="Scone woodland foliage"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-75 brightness-70"
        />
        {/* Gradient overlays strictly over background photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-onyx-bg via-onyx-bg/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-button-blue-hover/70 via-onyx-bg/40 to-burgundy-surface/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx-bg/30 via-transparent to-onyx-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-page-margin py-20 w-full">
          <div className="max-w-2xl">
            <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-4">
              Scone Investment Group
            </span>
            <h1 className="font-display text-display-2xl text-white mb-6 text-balance">
              Portfolio
            </h1>
            <p className="font-body text-body-lg text-gray-200 mb-8 max-w-xl text-pretty font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#holdings"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-DEFAULT bg-button-blue text-white font-medium text-body-md hover:bg-button-blue-hover transition-colors duration-hover-transition shadow-lg"
              >
                <span>View Portfolio Ledger</span>
                <span className="material-symbols-outlined text-[18px]">table_chart</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 2: Allocation Breakdown & Asset Showcase (Solid Background: Deep Navy) */}
      <section className="py-20 bg-burgundy-dark text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10">
            <div>
              <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-2">
                Allocation
              </span>
              <h2 className="font-display text-headline-lg text-white">
                Lorem Ipsum Holdings Breakdown
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-4 md:mt-0 font-body text-body-sm font-medium text-gray-300">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-frosted-blue" /> Lorem Sector I (00%)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-button-blue" /> Lorem Sector II (00%)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-onyx-card border border-white/20" /> Lorem Sector III (00%)
              </span>
            </div>
          </div>

          {/* 3 Feature Highlight Cards (Solid Navy Card Containers) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flagshipHoldings.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-onyx-card overflow-hidden hover:border-button-blue transition-colors"
              >
                {item.type === 'image' ? (
                  <div className="h-44 relative bg-onyx-bg overflow-hidden">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover filter brightness-90 saturate-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-card via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-onyx-bg/90 border border-white/20 font-caption text-caption-xs font-semibold text-frosted-blue uppercase">
                      {item.badge}
                    </span>
                  </div>
                ) : (
                  <div className="h-44 bg-burgundy-surface flex items-center justify-center p-6 relative border-b border-white/10">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-[48px] text-frosted-blue mb-1">
                        {item.iconName}
                      </span>
                      <p className="font-label text-label-md uppercase text-white font-semibold">
                        {item.iconBannerTitle}
                      </p>
                    </div>
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-onyx-bg/90 border border-white/20 font-caption text-caption-xs font-semibold text-frosted-blue uppercase">
                      {item.badge}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-display text-headline-sm text-white mb-2">{item.title}</h3>
                  <p className="font-body text-body-sm text-gray-300 mb-6">{item.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="font-label text-label-md uppercase text-gray-400">
                        {item.statOneLabel}
                      </div>
                      <div className="font-display text-headline-sm text-white font-semibold">
                        {item.statOneValue}
                      </div>
                    </div>
                    <div>
                      <div className="font-label text-label-md uppercase text-gray-400">
                        {item.statTwoLabel}
                      </div>
                      <div className="font-display text-headline-sm text-frosted-blue font-semibold">
                        {item.statTwoValue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 3: Detailed Portfolio Holdings Ledger (Solid Background: Midnight Navy) */}
      <section id="holdings" className="py-20 bg-onyx-bg text-white">
        <div className="max-w-7xl mx-auto px-page-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="font-label text-label-md uppercase text-frosted-blue font-semibold block mb-2">
                Lorem Ipsum Analytics
              </span>
              <h2 className="font-display text-headline-lg text-white">
                Lorem Ipsum Position Ledger
              </h2>
            </div>
            <div className="font-body text-body-sm text-gray-400 mt-2 md:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>

          {/* Ledger Table (Solid Navy Block Rows) */}
          <div className="overflow-x-auto rounded-DEFAULT border border-white/10 bg-onyx-card shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-burgundy-dark border-b border-white/10">
                  <th scope="col" className="py-4 px-6 text-white font-semibold font-label text-label-md uppercase">
                    Holding / Position
                  </th>
                  <th scope="col" className="py-4 px-6 text-white font-semibold font-label text-label-md uppercase">
                    Sector
                  </th>
                  <th scope="col" className="py-4 px-6 text-white font-semibold font-label text-label-md uppercase">
                    Year
                  </th>
                  <th scope="col" className="py-4 px-6 text-white font-semibold font-label text-label-md uppercase text-right">
                    Metric A
                  </th>
                  <th scope="col" className="py-4 px-6 text-white font-semibold font-label text-label-md uppercase text-right">
                    Metric B
                  </th>
                  <th scope="col" className="py-4 px-6 text-white font-semibold font-label text-label-md uppercase text-right">
                    Metric C
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-body text-body-md text-gray-200">
                {ledgerRows.map((row) => (
                  <tr key={row.holding} className="hover:bg-burgundy-dark/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-white">
                      <div className="font-semibold text-white">{row.holding}</div>
                      <div className="font-caption text-caption-xs text-gray-400">{row.location}</div>
                    </td>
                    <td className="py-4 px-6 text-gray-300">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded font-caption text-caption-xs font-medium bg-burgundy-surface text-frosted-blue">
                        {row.sector}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">{row.vintage}</td>
                    <td className="py-4 px-6 text-right font-medium tabular-nums text-white">
                      {row.metricA}
                    </td>
                    <td className="py-4 px-6 text-right font-medium tabular-nums text-gray-300">
                      {row.metricB}
                    </td>
                    <td className="py-4 px-6 text-right font-bold tabular-nums text-frosted-blue">
                      {row.metricC}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
